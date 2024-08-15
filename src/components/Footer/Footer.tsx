import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-screen bg-light-accent flex items-center">
      <footer className="w-full">
        <p className="text-gray-600 text-center">
          &copy; {currentYear} Your Platform Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
