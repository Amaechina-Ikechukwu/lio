import React from "react";
import Patterndark from "./Pattern-Dark.png";
import Image from "next/image";
function Organiztion() {
  const ForOrganization = [
    {
      title: "Easy Project Management",
      note: "Forget about building and maintaining a portfolio site. With our platform, you can manage all your projects in one place, update them easily, and ensure they are always accessible to potential employers or collaborators.",
    },
    {
      title: "Showcase Your Skills",
      note: "Our platform allows you to create detailed project profiles, complete with descriptions, technologies used, and live demos. Once submitted, you receive a unique, shareable link that you can add to your resume, social media, or anywhere you need to showcase your work.",
    },

    {
      title: "Visibility and Exposure",
      note: "By uploading your projects here, you increase your visibility within the developer community and among potential employers. Companies browsing the platform can discover your work, making it easier for you to get noticed and land opportunities.",
    },
  ];
  return (
    <div className="gap-40">
      <h2 className="text-[36px] md:text-[48px] text-light-accent font-bold mb-5">
        For Organizations
      </h2>
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
      <div className="space-y-6">
        <h2 className="font-semibold text-xl leading-loose text-gray-200 md:w-11/12">
          Lio is a dynamic hub where developers of all levels can easily upload
          and showcase their projects. It’s more than just a portfolio—it's a
          space for innovation, connection, and growth. For companies, it’s a
          seamless solution to integrate project details into their digital
          presence without the need for manual coding.
        </h2>
        <div className="flex flex-col md:flex-row space-y-6 md:gap-14 md:justify-center ">
          {ForOrganization.map((work, index) => (
            <div className=" self-end shadow-2xl" key={index}>
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

export default Organiztion;
