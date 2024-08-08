import Image from "next/image";
import HeroBody from "@/components/Landing/HeroBody";
import Experience from "@/components/Landing/Experience";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

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
export default function Page() {
  return (
    <main>
      <div>
        <div>
          <Suspense fallback={<Loading />}>
            <HeroBody />
            <Experience />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
