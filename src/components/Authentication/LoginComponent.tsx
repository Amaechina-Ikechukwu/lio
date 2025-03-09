"use client";
import Image from "next/image";
import lio from "@/app/lio.png";
import { useAuth } from "@/contexts/AuthProvider";

export default function LoginComponent() {
  const { login } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="shadow-xl space-y-3 p-4 flex flex-col items-center justify-center rounded-lg w-full">
        <div className=" flex items-center justify-center">
          <Image src={lio} width={500} alt="Lio" className="w-24 h-24 " />
        </div>

        <div
          className="bg-white w-full sm:w-fit  text-xl font-bold rounded-xl shadow-xl py-4 px-4 font-regular transition duration-300 transform hover:scale-105 hover:bg-opacity-80 focus:outline-none ring ring-light-accent"
          onClick={login}
        >
          <p>Sign in to continue</p>
        </div>

        {/* This container is where Firebase UI will render */}
        <div id="firebaseui-auth-container" />
      </div>
    </div>
  );
}
