"use client";
import Image from "next/image";
import { useDebouncedCallback } from "use-debounce";
import lio from "./lio.png";
import { Link } from "next-view-transitions";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import LioButton from "./LioButton";
import { useEffect, useState } from "react";

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
      params.set("category", "name");
    } else {
      params.delete("search");
      params.delete("category");
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

      {filteredPath.length === 2 && pathName.split("/")[1] !== "explore" && (
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

      {pathName.split("/")[1] === "explore" && (
        <div
          className={`flex items-center 
             w-full 
          md:w-7/12 h-[50px]`}
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
                    <button
                      type="submit"
                      className="absolute top-0 end-0 py-2.5 px-5 text-sm font-medium h-full text-white bg-gray-900 rounded-e-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
