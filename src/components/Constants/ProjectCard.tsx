import { Portfolio, Project } from "@/interfaces";
import React from "react";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="max-w-sm rounded-lg shadow bg-gray-900 border-gray-700">
      <img
        className="rounded-t-lg h-[200px] object-contain w-full"
        src={project.heroImage}
        alt={project.name}
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
          {project.name}
        </h5>

        <p className="mb-3 font-normal  text-gray-400">by {project.user}</p>
        <h5 className="mb-2 truncate ...  tracking-tight text-gray-900 text-white ">
          {project.description}
        </h5>
        <div className="flex items-center justify-start gap-2  ">
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
          <p className=" text-gray-300 font-bold">{project.clicks} views</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
