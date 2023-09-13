"use client"
import React from 'react';
import Link from 'next/link'
import {useEffect,useState,useRef} from 'react'
import SearchModal from '@/components/Constants/SearchModal'

export default function HeroBody() {
  const [openModal, setOpenModal] = useState<any>();

  return (
    <div className="h-screen ">
      <div className="flex flex-col items-center justify-center h-full ">
        {/* Hero Text */}
        <div className="mb-10 space-y-6 flex flex-col items-start justify-center h-full ">
          <h1 className="text-5xl text-gray-900 sm:leading-loose  text-start font-bold">
            Let the world see all you{' '}
            <span className="p-3 text-white rounded-full bg-light-accent mt-10">do</span>
          </h1>
          <p className="text-xl font-regular text-start text-gray-700 leading-lg">
            Every project holds immense potential, waiting for its moment to shine.
            You possess the ingenuity, and now it&apos;s time to showcase your accomplishments
            on a platform that amplifies your{' '}
            <span className="text-light-alterna">pride</span> and dedication.
            Let the world witness the extraordinary impact of your work – because no
            endeavor is trivial when it&apos;s a testament to your{' '}
            <span className="text-light-alterna">passion and creativity</span>.
          </p>
<div className='flex flex-col w-full sm:w-fit items-start sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-8'><button className="bg-white w-full sm:w-fit  text-black rounded-xl shadow-xl py-4 px-4 font-regular transition duration-300 transform hover:scale-105 hover:bg-opacity-80 focus:outline-none ring ring-light-accent">
            Download Lio App
          </button>
          <button onClick={() => setOpenModal('initial-focus')} className="bg-gray-900 w-full sm:w-fit text-gray-200 rounded-xl shadow-xl py-4 px-4 font-bold transition duration-300 transform hover:scale-105  hover:ring-gray-200 focus:outline-none ring ring-light-accent">
          
            Search For A Portfolio
          </button></div>
           {/*<Button onClick={() => setOpenModal('initial-focus')}>Toggle modal</Button>*/}
           <SearchModal openModal={openModal} setOpenModal={()=>setOpenModal(undefined)} />
        </div>
      </div>
    </div>
  );
}
