import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import lio from "../../../../public/lio.png";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import UserProjects from "../../components/Profile/UserProjects";
async function getData(user: string) {
  const username = user.toLowerCase();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_LIOSERVER}/searchuser?search=${username}`,
    { next: { revalidate: 5 } }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function AddClicks(user: string) {
  try {
    const username = user.toLowerCase();
    const url = `${process.env.NEXT_PUBLIC_LIOSERVER}/addtoclicks`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid: user }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json;
  } catch (error: any) {
    throw new Error(`Error adding clicks: ${error.message}`);
  }
}

async function getProjects(user: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_LIOSERVER}/userprojectsbyusername?username=${user}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function generateMetadata({
  params,
}: {
  params: { user: string };
}): Promise<Metadata> {
  // read route params

  const result = await getData(params.user);
  const { userData } = result;
  await AddClicks(userData.uid);
  // optionally access and extend (rather than replace) parent metadata

  return {
    title: userData.displayName,
    description: userData.bio,
    icons: {
      icon: userData.photoURL,
    },
    openGraph: {
      title: userData.displayName,
      description: userData.bio,
      images: [userData.photoURL],
    },
  };
}
export default async function Page({ params }: { params: { user: string } }) {
  const result = await getData(params.user);
  const projects = await getProjects(params.user);
  const { userData } = result;

  return (
    <div className=" space-y-28  ">
      <div className=" w-full md:flex justify-center md:justify-between items-center space-y-5 md:space-y-0">
        <div className="space-y-5 md:w-3/6 items-center">
          <h2 className="text-5xl font-bold font-open-sans">
            {userData.displayName}
          </h2>
          <p className="leading-7">{userData.bio}</p>
          <button className=" py-2 flex space-x-2 transition duration-300 transform hover:scale-105 ">
            <h3 className=" underline-offset-1 font-light font-open-sans">
              {userData.email}
            </h3>
            <EnvelopeIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <Image
          src={userData.photoURL}
          alt={userData.displayName}
          width={500}
          height={200}
        />
      </div>

      <div className="space-y-2">
        {projects.userportfolio && (
          <p className="text-gray-500  text-md md:text-2xl">Projects</p>
        )}
        <UserProjects
          user={result.userData.username}
          data={projects.userportfolio}
        />
      </div>
    </div>
  );
}
