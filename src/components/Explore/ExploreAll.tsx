"use client";
import { Portfolio, PortfoliosResponse, ProjectsResponse } from "@/interfaces";
import { Link } from "next-view-transitions";
import React, { useState } from "react";
import PortfolioCard from "../Constants/PortfolioCard";
import { usePathname } from "next/navigation";
import ProjectCard from "../Constants/ProjectCard";
function Portfolios({ portfolio }: { portfolio: PortfoliosResponse }) {
  const { portfolios } = portfolio;
  return (
    <div className="grid grid-col-1 md:grid-cols-4 place-items-center ">
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
  );
}
function Projects({ project }: { project: ProjectsResponse }) {
  const { projects } = project;
  return (
    <div className="md:grid md:grid-cols-3  gap-4 ">
      {projects.map((project, index) => (
        <div
          key={index}
          className="transition duration-300 transform hover:scale-95 scale-90 w-fit "
        >
          <Link href={`/${project.user}/${project.nickName}`} key={index}>
            <ProjectCard project={project} />
          </Link>
        </div>
      ))}
    </div>
  );
}
function ExploreAll({ portfolio }: { portfolio: any }) {
  const pathName = usePathname();
  return (
    <div className="pt-20 space-y-6 ">
      <div className="text-sm font-medium text-center text-gray-400 border-gray-700  md:scale-100">
        <ul className="flex  flex-row md:-mb-px">
          <li className="me-2">
            <Link
              href="/explore/portfolios"
              className={`inline-block p-4  border-b-2  rounded-t-lg hover:border-gray-300 ${
                pathName.split("/")[2] === "portfolios"
                  ? "active border-light-accent"
                  : "border-transparent"
              }`}
            >
              <h3 className="text-gray-100 md:text-[32px] font-bold">
                Popular portfolios
              </h3>
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="/explore/projects"
              className={`inline-block p-4  border-b-2  rounded-t-lg hover:border-gray-300 ${
                pathName.split("/")[2] === "projects"
                  ? "active border-light-accent"
                  : "border-transparent"
              }`}
              aria-current="page"
            >
              <h3 className="text-gray-100 md:text-[32px] font-bold">
                Popular projects
              </h3>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-fit">
        {pathName.split("/")[2] == "portfolios" ? (
          <Portfolios portfolio={portfolio} />
        ) : (
          <div className="w-fit ">
            <Projects project={portfolio} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ExploreAll;
