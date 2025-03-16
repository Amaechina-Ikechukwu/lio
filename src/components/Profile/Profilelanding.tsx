"use client";
import Image from "next/image";
import lio from "./lio.png";
import { useEffect, useState } from "react";
import {
  Portfolio,
  Project,
  ProjectsResponse,
  UserProfile,
} from "@/interfaces";
import LoadingComponent from "../Constants/LoadingComponent";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import UserProjects from "../../components/Profile/UserProjects";
import { Link } from "next-view-transitions";
import { useAuth } from "@/contexts/AuthProvider";
import UserProjectsGrid from "./UserProjectsGrid";
export default function ProfileLanding() {
  const [projects, setProjects] = useState<any>([]);
  const [userData, setUserData] = useState<UserProfile>();
  const { lioToken } = useAuth();
  async function getData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LIOSERVER}/userprofile`,
      {
        next: { revalidate: 5 },
        headers: { Authorization: `Bearer ${lioToken}` },
      }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const { userprofile } = await res.json();
    setUserData(userprofile);
  }

  async function getProjects() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LIOSERVER}/getuserprojects`,
      {
        next: { revalidate: 5 },
        headers: { Authorization: `Bearer ${lioToken}` },
      }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const { userportfolio } = await res.json();
    setProjects(userportfolio);
  }
  useEffect(() => {
    getData();
    getProjects();
  }, []);
  const socials = [
    {
      social: "github",
      icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      social: "twitter",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png",
    },
    {
      social: "linkedin",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
      social: "instagram",
      icon: "https://cdn.sanity.io/images/kts928pd/production/0debd6925122aa7cd6c1bf9f3bc2e5a948314c9a-1024x1024.png",
    },
    {
      social: "facebook",
      icon: "https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg",
    },
    {
      social: "tiktok",
      icon: "https://img.freepik.com/premium-vector/tik-tok-logo_578229-290.jpg",
    },
  ];
  if (!userData) {
    return (
      <div className=" w-full md:flex justify-center md:justify-between items-center space-y-5 md:space-y-0">
        <LoadingComponent />
      </div>
    );
  }
  return (
    <div className=" space-y-28 w-full mt-20">
      <div className=" w-full md:flex justify-center md:justify-between items-center space-y-5 md:space-y-0">
        <div className="space-y-5 md:w-3/6 items-center">
          <h2 className="text-5xl font-bold font-open-sans text-gray-200">
            {userData.displayName}
          </h2>
          <p className="text-sm text-gray-200 leading-7">{userData.bio}</p>
          {userData.email && (
            <a href={`mailto:${userData.email}`}>
              <button className="p-2 flex space-x-3 transition duration-300 transform hover:scale-105 bg-light-accent w-2/4 rounded-full items-center justify-center mt-4">
                <h3 className="underline-offset-1 font-bold text-xl font-open-sans">
                  Contact Me
                </h3>
                <EnvelopeIcon className="h-6 w-6 text-gray-400" />
              </button>
            </a>
          )}
          <div className="flex space-x-4 drop-shadow-md">
            {socials.map((soc: any) => {
              const socialKey = soc.social as keyof UserProfile;
              const socialLink = userData[socialKey];

              // Ensure it's a string before checking length or using it as an href
              if (typeof socialLink === "string" && socialLink.length > 0) {
                return (
                  <button
                    className="py-2 flex space-x-2 transition duration-300 transform hover:scale-150"
                    key={soc.social}
                  >
                    <Link href={socialLink}>
                      <Image
                        height={20}
                        width={20}
                        src={soc.icon}
                        alt={`${userData.displayName} ${soc.social}`}
                        className="opacity-50"
                      />
                    </Link>
                  </button>
                );
              }

              return null; // Return nothing if it's not a valid string
            })}
          </div>
          <div></div>
        </div>
        <div className="p-5 bg-gray-900 rounded-lg">
          <Image
            src={userData.photoURL}
            alt={userData.displayName}
            width={400}
            height={200}
          />
        </div>
      </div>

      <div className="space-y-2">
        {projects && (
          <p className="text-gray-300  text-md md:text-2xl">Projects</p>
        )}
        <UserProjectsGrid user={userData.username} data={projects} />
      </div>
    </div>
  );
}
