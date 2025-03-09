import Image from "next/image";
import lio from "../../../../public/lio.png";
import Link from "next/link";

import type { Metadata, ResolvingMetadata } from "next";

export default async function Page({
  params,
}: {
  params: { user: string; project: string };
}) {
  return (
    <div className="space-y-20 pt-14 flex h-screen">
      <h1 className="text-5xl font-bold text-white">Hello</h1>
    </div>
  );
}
