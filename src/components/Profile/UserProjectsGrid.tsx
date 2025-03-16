import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  description: string;
  heroimage: string;
  nickname: string;
}

interface UserProjectsProps {
  data: Project[];
  user: string;
}

const UserProjectsGrid: React.FC<UserProjectsProps> = ({ data, user }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="work">
      {data.map((project) => (
        <Link
          key={project.id}
          href={`/${user}/${project.nickname}`}
          className="block"
        >
          <div className="w-full p-4 transition duration-300 transform hover:scale-105 bg-gray-800 rounded-lg shadow-lg">
            <Image
              src={project.heroimage}
              alt={`Picture of ${project.name}`}
              width={250}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-200 truncate">
                {project.name}
              </h2>
              <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                {project.description.length > 80
                  ? `${project.description.substring(0, 80)}...`
                  : project.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UserProjectsGrid;
