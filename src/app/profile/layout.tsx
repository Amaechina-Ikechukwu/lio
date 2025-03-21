import Image from "next/image";
import lio from "@/app/lio.png";
import { Suspense } from "react";
import Layout from "@/components/Layout";

export default function FunctionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center justify-center  ">
      <div className="w-full  p-4">
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              <Image
                src={lio}
                width={500}
                alt="Lio"
                className="w-24 h-24 animate-pulse"
              />
            </div>
          }
        >
          <Layout>
            <div className=" w-full">{children}</div>
          </Layout>
        </Suspense>
      </div>
    </main>
  );
}
