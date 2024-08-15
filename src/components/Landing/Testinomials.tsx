import { url } from "inspector";
import React from "react";
import patternlight from "./Pattern-Light.png";
function Testinomials() {
  const Testinomial = [
    {
      title: "Stefanie Chucks",
      note: "This platform has been a game-changer for me. It’s so easy to showcase my work, and I’ve already received job offers thanks to the visibility it provides.",
    },
    {
      title: "Robinson March",
      note: "Integrating our projects into our website was a breeze. We saved hours of manual work, and the end result looks great.",
    },
    {
      title: "Oluwaseun Adesanya",
      note: "By sharing our project links through the platform, we ensure our site remains current. It's a simple yet effective way to keep everything up-to-date.",
    },
    {
      title: "Ngozi Eze",
      note: "This platform offers a perfect blend of simplicity and functionality. It's made it so much easier for me to manage and share my projects with potential clients.",
    },
    {
      title: "Ibrahim Yusuf",
      note: "Our team loves the flexibility this platform offers. We can customize project pages to match our brand, and the integration process was smooth and quick.",
    },
    {
      title: "Amina Abubakar",
      note: "The API provided by this platform is incredibly robust and easy to integrate. It has allowed us to seamlessly pull project data into our own systems, enhancing our workflow and saving us a significant amount of development time.",
    },
  ];
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${patternlight})` }}
        className="bg-local bg-center bg-no-repeat bg-cover"
      >
        <div className="backdrop-opacity-10 backdrop-invert bg-white/30 p-4 rounded-lg">
          <h2 className="text-lg font-bold text-center text-gray-900">
            Try Lio Now
          </h2>
        </div>
      </div>

      <div className="bg-dark-accent p-5 rounded-lg gap-30 w-full ">
        <h2 className="text-[36px] md:text-[48px] text-gray-700 font-bold mb-5">
          Testinomials
        </h2>
        <div className="grid grid-col-1 md:grid-cols-3 gap-4 place-items-center">
          {Testinomial.map((test, index) => (
            <div className="flex self-stretch shadow-2xl" key={index}>
              <div className="flex flex-col justify-between max-w-sm w-full border border-gray-800 rounded-lg shadow bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                      {test.title.split(" ")[0][0]}
                      {test.title.split(" ")[1][0]}
                    </span>
                  </div>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
                      {test.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-300 dark:text-gray-700">
                    {test.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testinomials;
