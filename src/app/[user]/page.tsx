
import Image from 'next/image'
import lio from '../../../public/lio.png'
import UserProjects from '../../components/Profile/UserProjects'
async function getData(user:string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LIOSERVER}/userprojects?user=${user}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export default async function Page({ params }: { params: { user: string } }){
	const result = await getData(params.user)
	return(
		<div className=' space-y-28  p-4'>
		<div className=' w-full sm:flex justify-center sm:justify-around items-center space-y-5 sm:space-y-0'>
	<div className='space-y-5 md:w-3/6 '>
	<h2 className='text-5xl font-bold font-open-sans'>Amaechina Ikechukwu</h2>
		<p className='leading-7'>
			Every project holds immense potential, waiting for its moment to shine. You possess the ingenuity, and now it's time to showcase your accomplishments on a platform that amplifies your pride and dedication.
		</p>

	</div>
		<Image  src={lio}
          alt="Picture of the author"
          width={300} 
          height={300} className='w-full sm:w-fit' />
</div>
<UserProjects user={params.user} data={result.userportfolio} />
</div>
				)
}