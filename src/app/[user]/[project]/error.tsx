"use client";
import React, { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      {/* Display the error message from the state */}
      <p>Couldn't get this project</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
