import Image from "next/image";
import HeroBody from "@/components/Landing/HeroBody";
import Experience from "@/components/Landing/Experience";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import Organiztion from "@/components/Landing/Organiztion";
import FadeInSection from "@/components/Constants/FadeInSection";
import Developers from "@/components/Landing/Developers";
import Testinomials from "@/components/Landing/Testinomials";

export const metadata: Metadata = {
  title: "lio",
  description: "Easy platform of compile your portfolio",
  openGraph: {
    title: "lio",
    description: "Easy platform of compile your portfolio",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/images%2FXRcZM4rs7DaSCStCCIvgkuVrlxh2%2FFrame%209.png?alt=media&token=f8e11522-c3c3-4c09-917b-353e837c90e5",
    ],
  },
  icons: {
    icon: "https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/images%2FXRcZM4rs7DaSCStCCIvgkuVrlxh2%2FFrame%209.png?alt=media&token=f8e11522-c3c3-4c09-917b-353e837c90e5",
  },
};
export default function Page() {
  return (
    <main>
      <div>
        <div>
          <div className="space-y-40 md:space-y-40">
            <FadeInSection>
              <HeroBody />
            </FadeInSection>
            <FadeInSection>
              <Experience />
            </FadeInSection>
            <FadeInSection>
              <Developers />
            </FadeInSection>
            <FadeInSection>
              <Organiztion />
            </FadeInSection>
            <div
              style={{
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/Pattern%20Light.png?alt=media&token=0db7bb49-9c78-435b-91d5-d1721e9fdcea)`,
              }}
              className=" bg-center bg-no-repeat bg-cover md:h-[200px]  rounded-lg"
            >
              <div className="bg-[rgba(0,0,0,0.8)] p-4 w-full h-full flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="gap-20 md:w-2/5 ">
                  <h2 className="text-[32px] font-bold  text-gray-100">
                    Ready to take your projects or company to the next level?
                  </h2>
                  {/* <h2 className="text-[38px] font-bold  text-gray-100">
                      Try Lio Now
                    </h2> */}
                </div>

                <button className="bg-light-accent w-full sm:w-3/6  text-gray-900 font-bold rounded-xl shadow-xl h-fit p-4 font-regular transition duration-300 transform hover:scale-105 hover:bg-opacity-80 focus:outline-none ring ring-light-accent">
                  <a href="https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/lio.apk?alt=media&token=d215a761-c8bf-4dbc-90ba-f203001ef6c0">
                    Get the app now
                  </a>
                </button>
              </div>
            </div>
            <FadeInSection>
              <Testinomials />
            </FadeInSection>
          </div>
        </div>
      </div>
    </main>
  );
}
