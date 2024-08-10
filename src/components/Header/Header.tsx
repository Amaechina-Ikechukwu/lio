"use client";
import Image from "next/image";
import lio from "./lio.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LioButton from "./LioButton";
export default function Header() {
  const pathName = usePathname();
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

      {pathName.split("/").length == 2 && (
        <div>
          <a href={`${pathName}#work`}>
            <LioButton text="View my works" style="shadow-lg" />
          </a>
        </div>
      )}
    </div>
  );
}
