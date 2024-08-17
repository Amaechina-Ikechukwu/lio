import ExploreAll from "@/components/Explore/ExploreAll";
import { Metadata } from "next";
import React from "react";
async function getProjectByClicks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LIOSERVER}/explore`, {
    next: { revalidate: 5 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getQuery(nick: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_LIOSERVER}/searchproject?search=${nick}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
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
async function Page() {
  const result = await getProjectByClicks();
  return (
    <div className="h-screen md:h-full">
      <ExploreAll portfolio={result} />
    </div>
  );
}

export default Page;
