import homesm from "./home-sm.png";
import homelg from "./home-lg.png";

import LioH from "../lio-home.jpg";
import LioInput from "../lio-input.jpg";
import LioProfile from "../lio-profile.jpg";

import Image from "next/image";
export default function Experience() {
  const data = [
    {
      title: "Excellently built.",
      use: "Lio provides a platform with a wonderful interface and presentation for upcoming developers to share even the most little or basic of projects until they have their portfolio site.",
      image: homelg,
    },
    {
      title: "Discoverability on your behalf.",
      use: "Visitors can search and discover developers with ease, exposing thousands of projects to the world.",
      image: homesm,
    },
    {
      title: "Exposure gain.",
      use: "Lio helps developers gain exposure by showcasing their projects to a broader audience, improving their chances of being noticed.",
      image:
        "https://images.pexels.com/photos/4050216/pexels-photo-4050216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with the correct image variable
    },
  ];
  const HowItWorks = [
    {
      title: "Getting started",
      note: "Our simple onboarding process gets you up and running in no time. See at a glance your projects and visits to your link. Your information out at a glance",
      image: LioH,
    },
    {
      title: "Add Project",
      note: "Developers can start adding their projects immediately, while companies can begin integrating existing project information into their site",
      image: LioInput,
    },
    {
      title: "Share and Connect",
      note: "Start sharing your unique project links. Companies can connect their site to our platform, ensuring their projects are always up-to-date.",
      image: LioProfile,
    },
  ];
  return (
    <div className="space-y-24 w-full">
      {data.map((data, index) => (
        <div
          key={data.title}
          className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 "
        >
          <div className="md:w-3/6 space-y-6">
            <h2 className="text-4xl text-gray-100 sm:leading-loose  text-start font-bold">
              {data.title}
            </h2>
            <p className="text-xl font-regular text-start text-gray-200 leading-lg">
              {data.use}
            </p>
          </div>
          <div className="p-5 rounded-xl bg-gray-800 w-full md:w-3/6 flex item-center">
            <Image
              src={data.image}
              width={300}
              height={300}
              alt={data.title}
              className={`w-full sm:w-auto aspect-square object-${
                index == 1 ? "contain" : "cover"
              }  rounded-md w-full md:w-full object-top`}
            />
          </div>
        </div>
      ))}
      <div>
        <h2 className="mb-2 text-[36px] md:text-[48px] font-bold tracking-tight text-gray-100 dark:text-white">
          How Lio Works
        </h2>
        <div className="flex flex-col-reverse md:flex-col-reverse items-center justify-between gap-10 bg-gradient-to-t from-transparent via-gray-900 to-light-accent w-full rounded-lg ">
          <button className="bg-gray-900 w-full  md:w-3/6  text-gray-200 rounded-xl shadow-xl py-3 px-4 font-bold text-md transition duration-300 transform hover:scale-105 hover:bg-opacity-80 focus:outline-none ring ring-light-accent">
            <a href="https://expo.dev/artifacts/eas/vHTyT34NvDbrXDjiNcvpTS.apk">
              Get Started With Lio App
            </a>
          </button>
          <div className="flex flex-col md:flex-row space-y-6 md:gap-14 md:justify-center md:relative md:w-screen">
            {HowItWorks.map((work, index) => (
              <div className=" self-end" key={index}>
                <div className="max-w-sm  border border-gray-800 rounded-lg shadow bg-gray-800 dark:border-gray-700">
                  <Image
                    src={work.image}
                    width={300}
                    alt={"lio-input"}
                    className="w-full sm:w-auto aspect-square object-contain rounded-t-md w-[500px] md:w-auto "
                  />

                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
                        {work.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-300 dark:text-gray-700">
                      {work.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
