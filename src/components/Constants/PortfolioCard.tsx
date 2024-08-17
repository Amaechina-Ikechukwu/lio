import { Portfolio } from "@/interfaces";
import React from "react";

function PortfolioCard({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${portfolio.photoURL})`,
        }}
        className=" bg-center bg-no-repeat bg-cover h-[500px]  rounded-lg space-y-4"
      >
        <div className=" bg-gradient-to-b from-transparent to-black p-4 h-full flex flex-col rounded-lg  items-center justify-end ">
          <div className="gap-20  ">
            <h5 className=" text-xl font-medium text-gray-100 ">
              {portfolio.displayName}
            </h5>
            <span className="text-sm text-gray-300 text-center">
              {portfolio.bio}
            </span>
          </div>
          <div className="flex items-center justify-start gap-2 w-full">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <p className=" text-gray-300 font-bold">
              {portfolio.portfolioClicks} views
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
