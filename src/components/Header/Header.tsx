"use client";
import Image from "next/image";
import { useDebouncedCallback } from "use-debounce";
import lio from "./lio.png";
import { Link } from "next-view-transitions";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import LioButton from "./LioButton";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthProvider";
const UserAvatar = () => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return (
      <button className="bg-light-accent w-full sm:w-fit  text-gray-900 font-bold rounded-xl shadow-xl py-4 px-4 font-regular transition duration-300 transform hover:scale-105 hover:bg-opacity-80 focus:outline-none ring ring-light-accent">
        Login
      </button>
    );
  }
  return (
    <div>
      <Link href={"/profile"}>
        <div className=" flex items-center justify-center">
          <Image
            src={currentUser.photoURL || lio}
            width={50}
            height={50}
            alt="Lio"
            className="ring ring-light-accent rounded-full"
          />
        </div>
      </Link>
    </div>
  );
};
export default function Header() {
  const pathName = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 300);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

  const filteredPath = pathName.split("/").filter((str) => str.trim() !== "");
  const viewMyWorksButtonAvoid = ["explore", "profile"];
  return (
    <div
      className={`bg-transparent container mx-auto px-10 sm:px-20 py-4 flex ${
        pathName.split("/")[1] === "explore" &&
        "md:items-center flex-col md:flex-row"
      } justify-between `}
    >
      <Link href="/">
        <button>
          <Image src={lio} alt="lio" width={50} height={50} />
        </button>
      </Link>

      {filteredPath.length === 1 &&
        !viewMyWorksButtonAvoid.includes(pathName.split("/")[1]) && (
          <div>
            <a href={`${pathName}#work`}>
              <LioButton text={"View my works"} style="shadow-lg text-white" />
            </a>
          </div>
        )}

      {pathName === "/" && (
        <div>
          <Link href="/explore/portfolios">
            <LioButton
              text="Explore Portfolios"
              style="shadow-lg text-gray-200 text-lg"
            />
          </Link>
        </div>
      )}

      {viewMyWorksButtonAvoid.includes(pathName.split("/")[1]) && (
        <div
          className={`flex 
             w-full 
          md:w-7/12 h-[70px] items-center justify-center space-x-4`}
        >
          <div
            className={`flex flex-col items-center mt-4 md:block w-full md:scale-100`}
          >
            <div className="w-full rounded-lg h-full">
              <form className="w-full h-full">
                <div className="flex h-full">
                  <div className="flex flex-col relative">
                    <label
                      htmlFor="search-dropdown"
                      className="mb-2 text-sm font-medium bg-gray-900 sr-only"
                    >
                      Search by name
                    </label>
                    <button
                      id="dropdown-button"
                      onClick={toggleDropdown}
                      className="w-full h-full flex items-center py-1 px-4 text-sm font-medium text-center text-gray-100 bg-gray-900 rounded-s-lg"
                      type="button"
                    >
                      {selectedCategory}{" "}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
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
                      <div
                        id="dropdown"
                        className="z-10 bg-gray-900 divide-y divide-gray-100 rounded-lg shadow w-44 mt-16 absolute top-0"
                      >
                        <ul
                          className="py-2 text-sm text-gray-100 dark:text-gray-200"
                          aria-labelledby="dropdown-button"
                        >
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => handleCategorySelect("Name")}
                            >
                              Name
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => handleCategorySelect("Technology")}
                            >
                              Technology Stack
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => handleCategorySelect("Tags")}
                            >
                              Tags
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="relative w-full">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block h-full w-full z-20 text-sm text-gray-100 bg-gray-800 rounded-e-lg border-s-gray-900 border-s-2 border border-gray-900 focus:border-gray-900 focus:ring-0 focus:outline-none"
                      placeholder={`Search ${selectedCategory.toLowerCase()}...`}
                      required
                      onChange={(e) => {
                        handleSearch(e.target.value);
                      }}
                      defaultValue={searchParams.get("search")?.toString()}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <UserAvatar />
        </div>
      )}
    </div>
  );
}
