import React from "react";
import Patterndark from "./Pattern-Dark.png";
import Image from "next/image";
function Developers() {
  const ForDevelopers = [
    {
      title: "Boost Your Presence",
      note: "Uploading your projects on our platform amplifies your visibility among fellow developers and prospective employers. Let companies discover your work organically, giving you greater chances to be seen and to secure new opportunities.",
    },
    {
      title: "Streamlined Project Management",
      note: "Say goodbye to the hassle of maintaining a separate portfolio site. Our platform lets you manage all your projects in one centralized location, with easy updates and continuous access for potential employers and collaborators.",
    },
    {
      title: "Highlight Your Expertise",
      note: "Show your technical prowess by creating in-depth project profiles on our platform. Detail the tools, technologies, and processes you used, and link directly to live demos. After submission, you’ll get a unique link to share across your resume, social media, or any professional platforms.",
    },
  ];

  return (
    <div className="gap-40">
      <h2 className="text-[36px] md:text-[48px] text-light-accent font-bold">
        For Developers
      </h2>
      <div className="gap-30">
        <div className="flex flex-col md:flex-row space-y-6 md:gap-14 md:justify-center">
          {ForDevelopers.map((work, index) => (
            <div
              className=" flex shadow-2xl self-stretch justify-center"
              key={index}
            >
              <div className="max-w-sm  border border-gray-800 rounded-lg shadow bg-gray-800 dark:border-gray-700">
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
      <div></div>
    </div>
  );
}

export default Developers;
