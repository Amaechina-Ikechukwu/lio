import React, { useEffect, useState } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Use useState to hold the error message
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);

    // Set the error message in the state
    setErrorMessage(error.message || 'An error occurred');
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      {/* Display the error message from the state */}
      <p>{errorMessage}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
