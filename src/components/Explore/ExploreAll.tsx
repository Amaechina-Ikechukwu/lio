"use client";
import React, { useState } from "react";

function ExploreAll() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex flex-col items-center w-full mt-4">
      <div className="w-4/5 rounded-lg ">
        <form className="w-full ">
          <div className="flex">
            <div className="flex flex-col  relative">
              <label
                htmlFor="search-dropdown"
                className="mb-2 text-sm font-medium bg-gray-900 sr-only"
              >
                Search by name
              </label>
              <button
                id="dropdown-button"
                onClick={toggleDropdown}
                className=" w-full flex items-center py-1 px-4 text-sm font-medium text-center text-gray-100 bg-gray-900 rounded-s-lg "
                type="button"
              >
                All categories{" "}
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
                  className="z-10 bg-gray-900 divide-y divide-gray-100 rounded-lg shadow w-44 mt-16  absolute top-0"
                >
                  <ul
                    className="py-2 text-sm text-gray-100 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mockups
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Design
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logos
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
                className="block h-full w-full z-20 text-sm text-gray-100 bg-gray-800 rounded-e-lg border-s-gray-900 border-s-2 border border-gray-900 focus:border-gray-900 focus:ring-0 focus:outline-none "
                placeholder="Search Developers,Languages etc Templates..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 py-2.5 px-5 text-sm font-medium h-full text-white bg-gray-900 rounded-e-lg  hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
  );
}

export default ExploreAll;
