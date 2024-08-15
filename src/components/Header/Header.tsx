"use client";
import Image from "next/image";
import lio from "./lio.png";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import LioButton from "./LioButton";
import { useState } from "react";

export default function Header() {
  const pathName = usePathname();

  const filteredPath = pathName.split("/").filter((str) => str.trim() !== "");
  return (
    <div className="bg-transparent container mx-auto px-10 sm:px-20 py-4 flex justify-between items-center">
      <Link href="/">
        <button>
          <Image
            src={lio}
            alt="lio"
            width={50}
            height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </button>
      </Link>

      {filteredPath.length === 2 && (
        <div>
          <a href={`${pathName}#work`}>
            <LioButton text={"View my works"} style="shadow-lg text-white" />
          </a>
        </div>
      )}

      {pathName === "/" && (
        <div>
          <Link href="/explore">
            <LioButton
              text="Explore Portfolios"
              style="shadow-lg text-gray-200 text-lg"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
