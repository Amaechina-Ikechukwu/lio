import Image from 'next/image';
import lio from './lio.png'
import Link from 'next/link';
export default function Header() {
  return (
    <div className='bg-transparent container mx-auto px-10 sm:px-20 py-4'>
      
      <Link href='/' ><button  >
        <Image
          src={lio}
          alt="lio"
          width={50} 
          height={50} 
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        /></button>
      </Link>
        
      
    </div>
  );
}
