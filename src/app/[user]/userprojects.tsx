import React from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  description: string;
  heroimage: string;
}

interface UserProjectsProps {
  data: Project[];
}

const UserProjects: React.FC<UserProjectsProps> = ({ data }) => {
  console.log(data);
  
  return (
    <div className='space-y-10'>
      {data.map((project) => ( project.heroimage !== "" &&
        <button
          key={project.id}
          className= ' w-full transition duration-300 transform hover:scale-90 shadow-2xl hover:shadow-xl items-start'
        >
          <div className='sm:flex sm:justify-around  space-y-5 sm:space-y-0'>
            <div className='space-y-5 w-3/6'>
              <h2 className='text-5xl font-bold font-open-sans'>{project.name}</h2>
              <p className='leading-7'>
                {project.description}
              </p>
            </div>
            <Image
              src={project.heroimage}
              alt={`Picture of ${project.name}`}
              width={400}
              height={400}
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default UserProjects;
