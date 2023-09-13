import LioHome from "../lio-web.png"
import LioWebUser from "../lio-web-user.png"
import LioWebProject from "../lio-web-project.png"
import LioH from "../lio-home.jpg"
import LioInput from "../lio-input.jpg"
import LioProfile from "../lio-profile.jpg"

import Image from 'next/image'
export default function Experience(){
	const data=[
{
	title:'For Up Coming Developers',
	use:"Lio provides a platform for upcoming developers to share even the most little or basic of projects until they have their portfolio site",
	image:LioWebUser
},
{
	title:"Dont Hide That Project",
	use:`Add as many projects as you want, it doesn't need to be that good, it shows you are learning everyday`,
	image:LioWebProject
},{
	title:'Discoverability',
	use:'Visitor can search and discover developers with ease, exposing thousand of projects to the world',
	image:LioHome,
}
		]
	return(
		<div className='space-y-24 w-full'>
			{data.map((data,index)=>(
<div key={data.title} className='flex flex-col md:flex-row justify-between items-center'>
	<div className="md:w-3/6 space-y-6" >
		<h2 className="text-4xl text-gray-700 sm:leading-loose  text-start font-bold">
			{data.title}
		</h2>
		<p className="text-xl font-regular text-start text-gray-600 leading-lg">
			{data.use}
		</p>
	</div>
	<Image src={data.image} width={300} alt={data.title}  className="w-full sm:w-auto aspect-square object-contain  rounded-md w-[500px] md:w-[500px]"/>
</div>
				))}
			<div className='flex flex-col md:flex-row items-center justify-between space-y-6'>
				<button className="bg-gray-900 w-full md:w-3/6   text-gray-200 rounded-xl shadow-xl py-4 px-4 font-bold text-xl transition duration-300 transform hover:scale-105 hover:bg-opacity-80 focus:outline-none ring ring-light-accent">
            Get Started With Lio App
          </button> 
      <div className='md:grid md:grid-cols-2 space-y-6 md:gap-14 justify-center'>
  <Image src={LioH} width={300} alt={"lio homescreen"} className="w-full sm:w-auto aspect-square object-contain rounded-md w-[500px] md:w-[200px]" />
  <Image src={LioProfile} width={300} alt={"Lio Profile"} className="w-full sm:w-auto aspect-square object-contain rounded-md w-[500px] md:w-[200px]" />
  <Image src={LioInput} width={300} alt={'lio-input'} className="w-full sm:w-auto aspect-square object-contain rounded-md w-[500px] md:w-[200px] justify-self-center" />
</div>

         
			</div>
		</div>)
}