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
  const { userProfile } = useAuth();
  if (!userProfile) {
    return (
      <button className="bg-light-accent w-full sm:w-fit text-gray-900 font-bold rounded-xl shadow-xl py-4 px-4 transition duration-300 transform hover:scale-105 hover:bg-opacity-80 focus:outline-none ring ring-light-accent">
        Create your own portfolio
      </button>
    );
  }
  return (
    <div>
      <Link href={"/profile"}>
        <div className="flex items-center space-x-2 justify-center">
          <Image
            src={userProfile.photoURL || lio}
            width={50}
            height={50}
            alt="Lio"
            className="ring ring-light-accent rounded-full"
          />
          <p className="mb-3 font-normal md:hidden mt-2  text-gray-400">
            {userProfile?.displayName}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default function Header() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userProfile } = useAuth();
  const pathNameSplit = pathName.split("/");
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
  console.log({ pathName, pathNameSplit });
  return (
    <div className="bg-transparent container mx-auto px-10 sm:px-20 py-4 flex justify-between items-center">
      {/* Left Side */}
      <div className="flex flex-row-reverse justify-between w-full md:w-fit items-center space-x-4 md:space-x-0">
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
        className={`md:flex space-x-4 bg-red-200  ${
          pathName === "/" ? "md:w-fit" : "md:w-2/5"
        } ${
          isMenuOpen
            ? "block absolute top-20 z-10 left-0 w-full bg-gray-900 p-4 space-y-4"
            : "hidden md:flex "
        }`}
      >
        {pathName === "/" && (
          <Link href="/explore/portfolios" className="w-full">
            <LioButton
              text="Explore Portfolios"
              style="shadow-lg text-gray-200 text-lg md:w-full justify-self-end"
            />
          </Link>
        )}
        {pathNameSplit.length > 1 && (
          <div className="w-full flex items-center space-x-4 justify-end ">
            {pathNameSplit.length > 1 && pathNameSplit[1] == "explore" && (
              <div className="flex flex-col md:flex-row space-x-2 items-center">
                <div className="relative margin-40  z-99">
                  <button
                    id="dropdown-button"
                    onClick={toggleDropdown}
                    className="py-2 px-4 text-sm font-medium text-gray-100 bg-gray-900 rounded-lg w-full"
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
                    <div className="absolute z-10 bg-gray-900 rounded-lg shadow w-[4/5] mt-2">
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
                  className="h-10 px-4 w-4/5 md:w-4/5 bg-gray-800 text-gray-100 rounded-lg focus:ring-2 focus:ring-gray-500"
                  placeholder={`Search ${selectedCategory.toLowerCase()}...`}
                  onChange={(e) => handleSearch(e.target.value)}
                  defaultValue={searchParams.get("search")?.toString()}
                />
              </div>
            )}
            {pathName !== "/" && (
              <div className="flex flex-col space-y-4 w-full items-center md:justify-end">
                <UserAvatar />
                {pathNameSplit.length > 1 && pathNameSplit[1] == "profile" && (
                  <div className="flex flex-col md:flex-row items-center w-full space-y-2 md:space-x-4 md:space-y-0 md:hidden">
                    <LioButton
                      text="Edit Profile"
                      style="bg-light-accent w-full"
                      onClick={() =>
                        push(`/profile/${userProfile.username}/editprofile`)
                      }
                    />

                    <LioButton
                      text="Log out"
                      style="bg-red-500 text-white w-full"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}
