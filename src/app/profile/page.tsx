import Image from "next/image";
import lio from "../../../../public/lio.png";
import Link from "next/link";

import type { Metadata, ResolvingMetadata } from "next";
import ProfileLanding from "@/components/Profile/Profilelanding";

export default async function Page({
  params,
}: {
  params: { user: string; project: string };
}) {
  return (
    <div className="space-y-20 pt-14 flex h-screen w-full">
      <ProfileLanding />
    </div>
  );
}
