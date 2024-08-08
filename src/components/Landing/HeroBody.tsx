"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import SearchModal from "@/components/Constants/SearchModal";

export default function HeroBody() {
  const [openModal, setOpenModal] = useState<any>();

  return (
    <div className="h-screen ">
      <div className="flex flex-col items-center justify-center h-full ">
        {/* Hero Text */}
        <div className="mb-10 space-y-6 flex flex-col items-start justify-center h-full ">
          <h1 className="text-5xl text-gray-900 sm:leading-loose  text-start font-bold">
            Let the world see all you{" "}
            <span className="p-3 text-white rounded-full bg-light-accent mt-10">
              do
            </span>
          </h1>
          <p className="text-xl font-regular text-start text-gray-700 leading-lg">
            No portfolio site yet?. Lio provides a platform to display your
            projects. In addition to displaying your projects, Lio provides
            tools to track your progress and measure the impact of your work.
            Analyze performance metrics, see which projects are getting the most
            attention, and use these insights to refine your portfolio and
            improve your professional presence. Don't wait any longer to share
            your talent with the world.
          </p>
          <div className="flex flex-col w-full sm:w-fit items-start sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-8">
            <button className="bg-white w-full sm:w-fit  text-black rounded-xl shadow-xl py-4 px-4 font-regular transition duration-300 transform hover:scale-105 hover:bg-opacity-80 focus:outline-none ring ring-light-accent">
              <a href="https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/lio.apk?alt=media&token=d215a761-c8bf-4dbc-90ba-f203001ef6c0">
                Download Lio App
              </a>
            </button>
            <button
              onClick={() => setOpenModal("initial-focus")}
              className="bg-gray-900 w-full sm:w-fit text-gray-200 rounded-xl shadow-xl py-4 px-4 font-bold transition duration-300 transform hover:scale-105  hover:ring-gray-200 focus:outline-none ring ring-light-accent"
            >
              Search For A Portfolio
            </button>
          </div>
          {/*<Button onClick={() => setOpenModal('initial-focus')}>Toggle modal</Button>*/}
          <SearchModal
            openModal={openModal}
            setOpenModal={() => setOpenModal(undefined)}
          />
        </div>
      </div>
    </div>
  );
}
