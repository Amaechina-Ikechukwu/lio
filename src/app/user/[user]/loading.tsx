
import { usePathname } from 'next/navigation'
export default function Loading() {
  
  // Or a custom loading skeleton component
  return <p className='font-semibold text-gray-500'>Fetching user</p>
}