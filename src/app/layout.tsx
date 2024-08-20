import "./globals.css";
import lio from "./lio.png";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
const inter = Inter({ subsets: ["latin"] });
const image =
  "https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/images%2FXRcZM4rs7DaSCStCCIvgkuVrlxh2%2FFrame%209.png?alt=media&token=f8e11522-c3c3-4c09-917b-353e837c90e5";
import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";
import { Link, ViewTransitions } from "next-view-transitions";
import InputProvider from "@/components/Constants/InputContext";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={` bg-gradient-to-t from-gray-900 to-black h-screen  flex flex-col h-full  ${inter.className}`}
        >
          <Suspense fallback={<Loading />}>
            <div className="bg-gradient-to-b from-gray-900 to-black w-full ">
              <Header />
            </div>
            <div className="container mx-auto p-4 px-10 sm:px-20 overflow-y-auto">
              {children}
            </div>
            <div className="absolute bottom-0">
              <Footer />
            </div>
          </Suspense>
        </body>
      </html>
    </ViewTransitions>
  );
}
