import Image from 'next/image';
import lio from '../../../../public/lio.png';
import ImageModal from '../../../components/Constants/ImageModal';

// Fixed a typo in the function parameters, changed 'project' to 'projectId'
async function getData(user: string, projectId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LIOSERVER}/userproject?user=${user}&projectId=${projectId}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const StatusComponent = ({ result }: any) => {
  let textColorClass = '';

  if (result.status === 'in progress') {
    textColorClass = 'text-green-500';
  } else if (result.status === 'completed') {
    textColorClass = 'text-neutral-500';
  } else if (result.status === 'todo') {
    textColorClass = 'text-yellow-500';
  }

  return (
    <p className={`${textColorClass}`}>{result.status}</p>
  );
};

export default async function Page({ params }: { params: { user: string, project: string } }) {
  const { user, project } = params;
  const result = await getData(user, project);

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div className='space-y-6 p-4'>
      <div className='w-full sm:flex justify-center sm:justify-between md:flex-row-reverse items-center space-y-5 sm:space-y-0'>
        <Image
          src={result.heroimage}
          alt="Picture of the author"
          width={300}
          height={300}
          className='w-full sm:w-fit'
        />
        <div className='space-y-5 md:w-3/6'>
          <div className='flex w-fit items-end space-x-3'>
            <h2 className='text-5xl font-bold font-open-sans'>{result.name}</h2>
            <div>
              <StatusComponent result={result} />
            </div>
          </div>
          <p className='leading-7'>{result.description}</p>
          <div className='space-y-1'>
            <p className='font-light text-gray-400'>Built with:</p>
            <p className='font-light'>{result.technologyStack}</p>
          </div>
          <div className='space-y-1'>
            <p className='font-light text-gray-400'>For:</p>
            <div className='space-x-5 flex'>
              {result.category.split(',').map((cat: any) => (
                <div className='w-fit p-2 rounded-full border-2' key={cat}>
                  <p className='font-light'>{cat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        {result.collectionOfImages && (
          <>
            <p>
              <span className='text-gray-400'>Project Images:</span> {result.albumName}
            </p>
            <ImageModal name={result.name} images={result.collectionOfImages} />
          </>
        )}
      </div>

      <div className='space-y-8'>
        {result.challenges.length > 0 && (
          <div className='space-y-1'>
            <p className='font-light text-gray-400'>Challenges:</p>
            <p className='font-light'>{result.challenges}</p>
          </div>
        )}
        {result.overcome.length > 0 && (
          <div className='space-y-1'>
            <p className='font-light text-gray-400'>How I overcame:</p>
            <p className='font-light'>{result.overcome}</p>
          </div>
        )}
      </div>
    </div>
  );
}
