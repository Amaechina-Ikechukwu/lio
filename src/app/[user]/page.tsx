import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import lio from "../../../../public/lio.png";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import UserProjects from "../../components/Profile/UserProjects";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
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
      next: { revalidate: 3000 },
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
const socials = [
  {
    social: "github",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    social: "twitter",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
  },
  {
    social: "linkedin",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
  },
  {
    social: "instagram",
    icon: "https://cdn.sanity.io/images/kts928pd/production/0debd6925122aa7cd6c1bf9f3bc2e5a948314c9a-1024x1024.png"
  },
  {
    social: "facebook",
    icon: "https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg"  },
  {
    social: "tiktok",
    icon:"https://img.freepik.com/premium-vector/tik-tok-logo_578229-290.jpg"
  }
];

  return (
    <div className=" space-y-28  ">
      <div className=" w-full md:flex justify-center md:justify-between items-center space-y-5 md:space-y-0">
        <div className="space-y-5 md:w-3/6 items-center">
          <h2 className="text-5xl font-bold font-open-sans">
            {userData.displayName}
          </h2>
          <p className="leading-7">{userData.bio}</p>
          <a
  className="py-2 flex space-x-2 transition duration-300 transform hover:scale-105"
  href={`mailto:${userData.email}`}
>
  <h3 className="underline-offset-1 font-light font-open-sans">
    {userData.email}
  </h3>
  <EnvelopeIcon className="h-6 w-6 text-gray-500" />
</a>
<div className='flex space-x-4 drop-shadow-md'>
  {socials.map((soc) =>
    userData[soc.social] && userData[soc.social].length > 0 && (
      <button
        className="py-2 flex space-x-2 transition duration-300 transform hover:scale-150"
        key={soc.social}
      >
        <Link href={userData[soc.social]}>
         <Image height={20} width={20} src={soc.icon} alt={`${userData.displayName} ${soc.social}`} className='opacity-50' />
        </Link>
      </button>
    )
  )}
</div>
<div>


</div>

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
