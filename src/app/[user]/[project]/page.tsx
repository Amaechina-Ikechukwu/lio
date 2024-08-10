import Image from "next/image";
import lio from "../../../../public/lio.png";
import Link from "next/link";
import ImageModal from "../../../components/Constants/ImageModal";
import type { Metadata, ResolvingMetadata } from "next";
// Fixed a typo in the function parameters, changed 'project' to 'projectId'
async function getUser(user: string) {
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
async function getData(nick: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_LIOSERVER}/searchproject?search=${nick}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// async function AddClicks(user:string, projectId:string) {
//   try {
//     const url = `${process.env.NEXT_PUBLIC_LIOSERVER}/projectclicks`;

//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ uid: user, projectId: projectId }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     return response.json();
//   } catch (error:any) {
//     throw new Error(`Error adding clicks: ${error.message}`);
//   }
// }
export async function generateMetadata({
  params,
}: {
  params: { user: string; project: string };
}): Promise<Metadata> {
  // read route params
  const { user, project } = params;
  const result = await getData(project.toLowerCase());
  const { projectData } = result;
  const { userData } = await getUser(user);

  return {
    title: projectData.name,
    description: projectData.description,
    icons: {
      icon: projectData.heroimage,
    },
    openGraph: {
      title: projectData.name,
      description: projectData.description,
      images: [projectData.heroimage],
    },
  };
}
const StatusComponent = ({ result }: any) => {
  let textColorClass = "";

  if (result.status === "in progress") {
    textColorClass = "text-emerald-300 text-sm bg-teal-200 p-2 rounded-full";
  } else if (result.status === "done") {
    textColorClass = "text-blue-900 text-sm bg-blue-200 p-2 rounded-full";
  } else if (result.status === "to do") {
    textColorClass = "text-yellow-500 text-sm bg-yellow-100 p-2 rounded-full";
  }

  return <p className={`${textColorClass}`}>{result.status}</p>;
};
export default async function Page({
  params,
}: {
  params: { user: string; project: string };
}) {
  const { user, project } = params;
  const result = await getData(project.toLowerCase());
  const { projectData } = result;
  const { userData } = await getUser(user);
  async function AddClicks(user: string, projectId: string) {
    const url = `${process.env.NEXT_PUBLIC_LIOSERVER}/projectclicks`;

    const response = await fetch(url, {
      next: { revalidate: 3000 },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid: user, projectId: projectId }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return null;
  }
  await AddClicks(userData.uid, projectData.nickname);
  // optionally access and extend (rather than replace) parent metadata

  if (!result) {
    return <p className="font-semibold text-gray-500">Fetching project</p>;
  }

  return (
    <div className="space-y-20 pt-14">
      <div className="w-full sm:flex justify-center sm:justify-between md:flex-row-reverse items-center space-y-5 sm:space-y-0">
        <Image
          src={projectData.heroimage}
          alt={`${projectData.name}-image`}
          width={300}
          height={200}
          className="w-full sm:w-auto aspect-square object-contain border border-gray-300 rounded-md p-5"
        />
        <div className="space-y-8 md:w-3/6">
          <div className="flex w-fit items-end space-x-3">
            <h2 className="text-3xl sm:text-5xl font-bold font-open-sans">
              {projectData.name}
            </h2>
            <div>
              <StatusComponent result={projectData} />
            </div>
          </div>
          <Link className="mt-14" href={`/${userData.username}`}>
            <button className=" flex w-fit  space-x-2 p-1 items-center rounded-full mt-4">
              <p className=" text-sm text-gray-600 font-semibold">
                created by:
              </p>
              <h1 className="text-sm text-underline">{userData.displayName}</h1>
              <Image
                src={userData.photoURL}
                alt={`${userData.displayName}-image`}
                width={30}
                height={30}
                className="rounded-full aspect-square object-cover "
              />
            </button>
          </Link>

          <p className="leading-7 font-bold text-md">
            {projectData.description}
          </p>
          <div className="space-y-1">
            <p className=" text-gray-600 font-semibold">Built with:</p>
            <p className="font-semibold text-md">
              {projectData.technologyStack}
            </p>
          </div>
          {projectData?.category && (
            <div className="space-y-1">
              <p className=" text-gray-600 font-semibold">For:</p>
              <div className="space-x-5 flex">
                {projectData.category
                  ?.split(",")
                  .map((cat: string, index: number) => (
                    // Check if the value is empty and replace it with a space
                    <div
                      className="w-fit p-2 rounded-full border-2"
                      key={index}
                    >
                      <p className="font-semibold text-md">
                        {cat.trim() || " "}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}
          <div>
            <button
              type="button"
              className=" bg-light-accent focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-md px-5 py-2 text-center inline-flex items-center transition duration-300 transform hover:scale-105 hover:bg-opacity-80 focus:outline-none ring ring-light-accent text-gray-600"
            >
              View live demo
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 p-5 rounded-md space-y-4">
        {projectData.collectionOfImages.length > 0 && (
          <>
            <p>
              <span className="text-gray-900">Project Images:</span>{" "}
              {projectData.albumName}
            </p>
            <ImageModal
              name={projectData.name}
              images={projectData.collectionOfImages}
            />
          </>
        )}
      </div>

      <div className="space-y-8">
        {projectData.challenges?.length > 0 && (
          <div className="space-y-1">
            <p className=" text-gray-600 font-semibold">Challenges:</p>
            <p className="">{projectData.challenges}</p>
          </div>
        )}
        {projectData.overcome?.length > 0 && (
          <div className="space-y-1">
            <p className=" text-gray-600 font-semibold">How I overcame:</p>
            <p className="">{projectData.overcome}</p>
          </div>
        )}
      </div>
    </div>
  );
}
