"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="w-fit ">Something went wrong!</h2>
      <p className="w-fit text-md font-bold ">
        Please ensure the user name is correct
      </p>
      <button
        className="bg-light-accent p-4 rounded-md"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
