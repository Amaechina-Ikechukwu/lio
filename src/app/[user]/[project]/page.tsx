import Image from 'next/image';
import lio from '../../../../public/lio.png';
import ImageModal from '../../../components/Constants/ImageModal';
import type { Metadata, ResolvingMetadata } from 'next'
// Fixed a typo in the function parameters, changed 'project' to 'projectId'
async function getUser(user:string) {
  const username=user.toLowerCase()
  const res = await fetch(`${process.env.NEXT_PUBLIC_LIOSERVER}/searchuser?search=${username}`, { next: { revalidate: 5 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
async function getData( nick: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LIOSERVER}/searchproject?search=${nick}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


export async function generateMetadata(
  { params }: { params: { user:string, project: string } }
): Promise<Metadata> {
  // read route params
const {user,project } = params;
  const result = await getData(project.toLowerCase());
  const {projectData} =result 

  // optionally access and extend (rather than replace) parent metadata
 
  return {
    title: projectData.name,
    description:projectData.description,
     icons:{
      icon:projectData.heroimage
    },
    openGraph: {
      title: projectData.name,
    description:projectData.description,
      images: [projectData.heroimage, ],
    },
  }
}
const StatusComponent = ({ result }: any) => {
  let textColorClass = '';

  if (result.status === 'in progress') {
    textColorClass = 'text-green-500';
  } else if (result.status === 'done') {
    textColorClass = 'text-blue-500';
  } else if (result.status === 'todo') {
    textColorClass = 'text-yellow-500';
  }

  return (
    <p className={`${textColorClass}`}>{result.status}</p>
  );
};
export default async function Page({ params }: { params: {user:string,  project: string } }) {
  const {user,project } = params;
  const result = await getData(project.toLowerCase());
  const {projectData} =result
    const {userData}= await getUser(user)
  if (!result) {
    return <p className='font-semibold text-gray-500'>Fetching project</p>;
  }

  return (
    <div className='space-y-6 pt-14'>
      <div className='w-full sm:flex justify-center sm:justify-between md:flex-row-reverse items-center space-y-5 sm:space-y-0'>
        <Image
          src={projectData.heroimage}
          alt={`  ${projectData.name}-image`}
          width={300}
          height={200}
          className='w-full sm:w-auto aspect-square object-contain'
        />
        <div className='space-y-5 md:w-3/6'>
          <div className='flex w-fit items-end space-x-3'>
            <h2 className='text-5xl font-bold font-open-sans'>{projectData.name}</h2>
            <div>
              <StatusComponent result={projectData} />
            </div>
          </div>
          <button className='border flex w-fit space-x-2 p-2 items-center rounded-full'>

            <Image src={userData.photoURL}
          alt={`  ${userData.displayName}-image`}
          width={30}
          height={30} className='rounded-full aspect-square object-cover' /> <h1>{userData.displayName}</h1>
          </button>

          <p className='leading-7'>{projectData.description}</p>
          <div className='space-y-1'>
            <p className='font-light text-gray-400'>Built with:</p>
            <p className='font-light'>{projectData.technologyStack}</p>
          </div>
          <div className='space-y-1'>
            <p className='font-light text-gray-400'>For:</p>
            <div className='space-x-5 flex'>
  {projectData.category
    ?.split(',')
    .map((cat: string, index: number) => (
      // Check if the value is empty and replace it with a space
      <div className='w-fit p-2 rounded-full border-2' key={index}>
        <p className='font-light'>{cat.trim() || ' '}</p>
      </div>
    ))}
</div>

          </div>
        </div>
      </div>

      <div>
        {projectData.collectionOfImages && (
          <>
            <p>
              <span className='text-gray-400'>Project Images:</span> {projectData.albumName}
            </p>
            <ImageModal name={projectData.name} images={projectData.collectionOfImages} />
          </>
        )}
      </div>

      <div className='space-y-8'>
        {projectData.challenges?.length > 0 && (
          <div className='space-y-1'>
            <p className='font-light text-gray-400'>Challenges:</p>
            <p className='font-light'>{projectData.challenges}</p>
          </div>
        )}
        {projectData.overcome?.length > 0 && (
          <div className='space-y-1'>
            <p className='font-light text-gray-400'>How I overcame:</p>
            <p className='font-light'>{projectData.overcome}</p>
          </div>
        )}
      </div>
    </div>
  );
}
