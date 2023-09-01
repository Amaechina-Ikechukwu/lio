import Image from 'next/image'
import lio from './lio.png'
export default function ProfileLanding(){
	return(

<div className='sm:flex sm:justify-around space-y-5 sm:space-y-0'>
	<div className='space-y-5 w-3/5 '>
	<h2>Amaechina Ikechukwu</h2>
		<p className=''>
			Every project holds immense potential, waiting for its moment to shine. You possess the ingenuity, and now it's time to showcase your accomplishments on a platform that amplifies your pride and dedication.
		</p>

	</div>
		<Image  src={lio}
          alt="Picture of the author"
          width={300} 
          height={300} />
</div>
		)
}