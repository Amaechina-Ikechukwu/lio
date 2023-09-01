import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import lio from '../../../../public/lio.png'
import UserProjects from '../../../components/Profile/UserProjects'
async function getData(user:string) {
	const username=user.toLowerCase()
  const res = await fetch(`${process.env.NEXT_PUBLIC_LIOSERVER}/searchuser?search=${username}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
async function getProjects(user:string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LIOSERVER}/userprojectsbyusername?username=${user}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export async function generateMetadata(
  { params }: { params: { user: string } }
): Promise<Metadata> {
  // read route params
const result = await getData(params.user)
	const {userData} =result 
  // optionally access and extend (rather than replace) parent metadata
 
  return {
    title: userData.displayName,
    description:userData.bio,
    icons:{
    	icon:userData.photoURL
    },
    openGraph: {
      images: [userData.photoURL],
    },
  }
}
export default async function Page({ params }: { params: { user: string } }){
	const result = await getData(params.user)
	const projects = await getProjects(result.userData.username)
	const {userData} =result
	console.log(result)
	return(
		<div className=' space-y-28  '>
		<div className=' w-full sm:flex justify-center sm:justify-around items-center space-y-5 sm:space-y-0'>
	<div className='space-y-5 md:w-3/6 '>
	<h2 className='text-5xl font-bold font-open-sans'>{userData.displayName}</h2>
		<p className='leading-7'>
			{userData.bio}
		</p>
<h3 className=' underline-offset-1 font-light font-open-sans'>{userData.email}</h3>
	</div>
		<Image  src={userData.photoURL}
          alt={userData.displayName}
          width={300} 
          height={300} className='w-full sm:w-auto' />
</div>
<UserProjects user={result.userData.username} data={projects.userportfolio} />
</div>
				)
}