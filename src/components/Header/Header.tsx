"use client";
import Image from "next/image";
import { useDebouncedCallback } from "use-debounce";
import lio from "./lio.png";
import { Link } from "next-view-transitions";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import LioButton from "./LioButton";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthProvider";
import { Menu, X } from "lucide-react";

const UserAvatar = () => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return (
      <button className="bg-light-accent w-full sm:w-fit text-gray-900 font-bold rounded-xl shadow-xl py-4 px-4 transition duration-300 transform hover:scale-105 hover:bg-opacity-80 focus:outline-none ring ring-light-accent">
        Login
      </button>
    );
  }
  return (
    <div>
      <Link href={"/profile"}>
        <div className="flex items-center space-x-2 justify-center">
          <Image
            src={currentUser.photoURL || lio}
            width={50}
            height={50}
            alt="Lio"
            className="ring ring-light-accent rounded-full"
          />
          <p className="mb-3 font-normal md:hidden mt-2  text-gray-400">
            {currentUser?.displayName}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default function Header() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useAuth();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 300);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleCategorySelect = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    replace(`${pathName}?${params.toString()}`);
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-transparent container mx-auto px-10 sm:px-20 py-4 flex justify-between items-center">
      {/* Left Side */}
      <div className="flex flex-row-reverse justify-between w-full items-center space-x-4">
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? (
            <X size={32} style={{ color: "white" }} />
          ) : (
            <Menu size={32} style={{ color: "white" }} />
          )}
        </button>
        <Link href="/">
          <Image src={lio} alt="lio" width={50} height={50} />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`md:flex space-x-4 ${
          isMenuOpen
            ? "block absolute top-20 z-10 left-0 w-full bg-gray-900 p-4 space-y-4"
            : "hidden md:flex"
        }`}
      >
        {pathName === "/" && (
          <Link href="/explore/portfolios">
            <LioButton
              text="Explore Portfolios"
              style="shadow-lg text-gray-200 text-lg"
            />
          </Link>
        )}

        <div className="relative margin-40 z-99">
          <button
            id="dropdown-button"
            onClick={toggleDropdown}
            className="py-2 px-4 text-sm font-medium text-gray-100 bg-gray-900 rounded-lg"
          >
            {selectedCategory}{" "}
            <svg
              className="w-2.5 h-2.5 ml-2 inline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 bg-gray-900 rounded-lg shadow w-44 mt-2">
              <ul className="py-2 text-sm text-gray-100">
                <li>
                  <button
                    className="w-full px-4 py-2 hover:bg-gray-800"
                    onClick={() => handleCategorySelect("Name")}
                  >
                    Name
                  </button>
                </li>
                <li>
                  <button
                    className="w-full px-4 py-2 hover:bg-gray-800"
                    onClick={() => handleCategorySelect("Technology")}
                  >
                    Technology Stack
                  </button>
                </li>
                <li>
                  <button
                    className="w-full px-4 py-2 hover:bg-gray-800"
                    onClick={() => handleCategorySelect("Tags")}
                  >
                    Tags
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <input
          type="search"
          className="h-10 px-4 w-4/5 bg-gray-800 text-gray-100 rounded-lg focus:ring-2 focus:ring-gray-500"
          placeholder={`Search ${selectedCategory.toLowerCase()}...`}
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("search")?.toString()}
        />
        <div className="flex space-y-12 items-start">
          <UserAvatar />
        </div>
      </nav>

      {/* Right Side */}
      <div className="hidden md:block">
        <UserAvatar />
      </div>
    </div>
  );
}
