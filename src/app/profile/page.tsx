import Image from "next/image";
import lio from "../../../../public/lio.png";
import Link from "next/link";

import type { Metadata, ResolvingMetadata } from "next";
import ProfileLanding from "@/components/Profile/Profilelanding";
import { permanentRedirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { user: string; project: string };
}) {
  permanentRedirect(`/profile/${params.user}`);
}
