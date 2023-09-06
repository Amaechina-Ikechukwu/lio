import './globals.css'
import lio from './lio.png'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
const inter = Inter({ subsets: ['latin'] })

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'lio',
  description: 'Easy platform of compile your portfolio',
  openGraph: {
     title: 'lio',
  description: 'Easy platform of compile your portfolio',
    },
    icons:{
      icon:lio
    },
     openGraph: {
      images: [lio ],
    },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
           <body className={` bg-gradient-to-t from-gray-100 to-white h-full  flex flex-col h-full  ${inter.className}`}>
           <div className='bg-gradient-to-b from-gray-100 to-white w-full '><Header/></div>
           <div className='container mx-auto p-4 px-10 sm:px-20 '>{children}</div>
           
           </body>
    </html>
  )
}
