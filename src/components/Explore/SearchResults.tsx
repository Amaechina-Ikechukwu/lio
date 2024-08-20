import { Portfolio, Project } from "@/interfaces";
import React from "react";
import PortfolioCard from "../Constants/PortfolioCard";
import ProjectCard from "../Constants/ProjectCard";
import { Link } from "next-view-transitions";
const Users = ({ users }: { users: Portfolio[] }) => {
  return (
    <div className="space-y-5">
      <p className="text-2xl md:text-3xl font-bold text-gray-200">Users</p>
      <div className="flex overflow-x-auto">
        {users.map((user) => (
          <div className="w-[300px]" key={user.displayName}>
            <Link href={`/${user.username}`}>
              <PortfolioCard portfolio={user} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="space-y-5">
      <p className="text-2xl md:text-3xl font-bold text-gray-200">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 ">
        {projects.map((project) => (
          <div key={project.nickName}>
            <Link href={`/${project.user}/${project.nickName}`}>
              <ProjectCard project={project} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
function SearchResults({
  portfolio,
}: {
  portfolio: { user: Portfolio[]; projects: Project[] };
}) {
  const { projects, user } = portfolio;

  return (
    <div className="space-y-10 ">
      <div>{user && user.length > 0 && <Users users={user} />}</div>
      <div>
        {projects && projects.length && <Projects projects={projects} />}
      </div>
    </div>
  );
}

export default SearchResults;
