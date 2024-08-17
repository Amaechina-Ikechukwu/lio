"use client";
import { PortfoliosResponse } from "@/interfaces";
import { Link } from "next-view-transitions";
import React, { useState } from "react";
import PortfolioCard from "../Constants/PortfolioCard";

function ExploreAll({ portfolio }: { portfolio: PortfoliosResponse }) {
  const { portfolios } = portfolio;
  return (
    <div className="pt-20 space-y-6 ">
      <h3 className="text-gray-100 text-[32px] font-bold">
        Popular portfolios
      </h3>
      <div className="grid grid-col-1 md:grid-cols-4 place-items-center">
        {portfolios.map((portfolio, index) => (
          <div
            key={index}
            className="transition duration-300 transform hover:scale-105"
          >
            <Link href={`/${portfolio.username}`} key={index}>
              <PortfolioCard portfolio={portfolio} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreAll;
