"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import SearchModal from "@/components/Constants/SearchModal";
import patternlight from "./Pattern-Light.png";
import Image from "next/image";

export default function HeroBody() {
  const [openModal, setOpenModal] = useState<any>();

  return (
    <div className="space-y-10 ">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-center h-full gap-20 md:gap-40 ">
        {/* Hero Text */}
        <div className="mb-10 space-y-6 flex flex-col items-start justify-center h-full ">
          <h1 className="text-5xl text-gray-100 sm:leading-loose  text-start font-bold">
            Let the world see all you{" "}
            <span className="p-3 text-white rounded-full bg-light-accent mt-10">
              do
            </span>
          </h1>
          <div>
            <h3 className="text-gray-400 text-2xl">No portfolio site yet? </h3>
            <h2 className="text-2xl font-regular text-start text-gray-100 leading-lg">
              Lio provides a platform to display your projects. Show your work
              as an individual, show your impact as an organization.
            </h2>
          </div>

          <div className="flex flex-col w-full sm:w-fit items-start sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-8">
            <button className="bg-light-accent w-full sm:w-fit  text-gray-900 font-bold rounded-xl shadow-xl py-4 px-4 font-regular transition duration-300 transform hover:scale-105 hover:bg-opacity-80 focus:outline-none ring ring-light-accent">
              <a href="https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/lio1.apk?alt=media&token=37255135-8e55-47ae-8cb4-97beb479cc77">
                Get the app now
              </a>
            </button>
          </div>
          {/*<Button onClick={() => setOpenModal('initial-focus')}>Toggle modal</Button>*/}
          <SearchModal
            openModal={openModal}
            setOpenModal={() => setOpenModal(undefined)}
          />
        </div>
        <img
          src="https://images.pexels.com/photos/5922323/pexels-photo-5922323.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="rounded-xl  md:w-2/5"
        />
      </div>
      <Image
        src={patternlight}
        alt={"lio pattern"}
        className="rounded-xl w-full h-[300px] object-cover"
      />
    </div>
  );
}
