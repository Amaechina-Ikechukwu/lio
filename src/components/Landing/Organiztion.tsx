import React from "react";
import Patterndark from "./Pattern-Dark.png";
import Image from "next/image";
function Organiztion() {
  return (
    <div>
      <div className="opacity-95">
        <Image
          src={Patterndark}
          alt={"lio pattern"}
          className="rounded-t-xl w-full h-[300px] object-cover "
        />
        <div className="bg-light-accent rounded-b-xl py-9 px-4">
          <h2 className="font-bold text-2xl">We help Organizations too...</h2>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-xl leading-loose text-gray-200 md:w-11/12">
          Lio is a dynamic hub where developers of all levels can easily upload
          and showcase their projects. It’s more than just a portfolio—it's a
          space for innovation, connection, and growth. For companies, it’s a
          seamless solution to integrate project details into their digital
          presence without the need for manual coding.
        </h2>
      </div>
    </div>
  );
}

export default Organiztion;
