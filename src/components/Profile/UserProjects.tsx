import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface Project {
  id: number;
  name: string;
  description: string;
  heroimage: string;
}

interface UserProjectsProps {
  data: Project[];
  user:string
}

const UserProjects: React.FC<UserProjectsProps> = ({ data,user }) => {
  
  return (
    <div className='space-y-24 '>
      {data.map((project:any) => ( 
        <Link key={project.id}
          href={{
            pathname: `/project/${project.name}`
            
          }}
>  <button
          key={project.id}
          className= ' w-full transition duration-300 transform hover:scale-105  hover:shadow-md divide-x-8 mb-8 hover:bg-white hover:px-4 rounded-md'
        >
          <div className=' w-full flex flex-col-reverse sm:flex sm:flex-row sm:justify-between items-center space-y-5 sm:space-y-0 py-5  sm:px-2'>
            <div className='space-y-5 w-full md:w-3/6 mt-4'>
              <h2 className='text-5xl font-bold font-open-sans text-start'>{project.name}</h2>
              <p className='leading-7 text-start'>
                {project.description}
              </p>
            </div>
            <Image
              src={project.heroimage}
              alt={`Picture of ${project.name}`}
              width={200}
              height={200} className=' w-full sm:w-fit shadow-2xl rounded-md aspect-square object-contain '
            />
          </div>
          <div className='px-16 hidden hover:block ' ><p className='text-gray-400 text-start'>
                Click to view
              </p></div>
          
        </button></Link>
      
      ))}
    </div>
  );
};

export default UserProjects;
