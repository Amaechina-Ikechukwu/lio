import Image from "next/image";
import HeroBody from "@/components/Landing/HeroBody";
import Experience from "@/components/Landing/Experience";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import Organiztion from "@/components/Landing/Organiztion";
import FadeInSection from "@/components/Constants/FadeInSection";
import Developers from "@/components/Landing/Developers";
import Testinomials from "@/components/Landing/Testinomials";

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
            <div className="space-y-40 md:space-y-40">
              <FadeInSection>
                <HeroBody />
              </FadeInSection>
              <FadeInSection>
                <Experience />
              </FadeInSection>
              <FadeInSection>
                <Developers />
              </FadeInSection>
              <FadeInSection>
                <Organiztion />
              </FadeInSection>
              <FadeInSection>
                <Testinomials />
              </FadeInSection>
            </div>
          </Suspense>
        </div>
      </div>
    </main>
  );
}
