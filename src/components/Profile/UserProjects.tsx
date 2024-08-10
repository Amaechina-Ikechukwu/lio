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

const UserProjects: React.FC<UserProjectsProps> = ({ data, user }) => {
  return (
    <div className="space-y-24 " id="work">
      {data.map((project: any) => (
        <Link
          key={project.id}
          href={{
            pathname: `/${user}/${project.nickname}`,
          }}
        >
          {" "}
          <button
            key={project.id}
            className=" w-full transition duration-300 transform hover:scale-105  divide-x-8 mb-8 hover:bg-gray-200 hover:px-4 hover:mt-4 rounded-md"
          >
            <div className=" w-full flex flex-col-reverse md:flex md:flex-row md:justify-between items-center space-y-5 md:space-y-0 py-5  md:px-2">
              <div className="space-y-5 w-full md:w-3/6 mt-4">
                <h2 className="text-3xl font-bold font-open-sans text-start">
                  {project.name}
                </h2>
                <p className="leading-7 text-start">{project.description}</p>
              </div>
              <Image
                src={project.heroimage}
                alt={`Picture of ${project.name}`}
                width={200}
                height={200}
                className=" w-full md:w-fit shadow-2xl rounded-md aspect-square object-contain "
              />
            </div>
            <div className="px-16 hidden hover:block ">
              <p className="text-gray-400 text-start">Click to view</p>
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default UserProjects;
