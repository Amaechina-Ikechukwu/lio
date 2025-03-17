"use client";
import { AuthProvider, useAuth } from "@/contexts/AuthProvider";
import React, { Suspense } from "react";
import Image from "next/image";
import lio from "@/app/lio.png";
import LoginComponent from "./Authentication/LoginComponent";

function ChildrenLayout({ children }: { children: React.ReactNode }) {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Image
          src={lio}
          width={500}
          alt="Lio"
          className="w-24 h-24 animate-pulse"
        />
      </div>
    );
  }

  if (!currentUser) {
    return <LoginComponent />;
  }
  return (
    <div className=" flex items-center justify-center w-full">
      <div className="w-full">{children}</div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full ">
      <AuthProvider>
        <div>
          <div className="divider"></div>
        </div>
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
          <ChildrenLayout>{children}</ChildrenLayout>
        </Suspense>
      </AuthProvider>
    </div>
  );
}
