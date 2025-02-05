"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    // <div>
    //     <h2>An error occurred:</h2>
    //     <p>{error.message}</p>
    //     {error.digest && <p>Error Digest: {error.digest}</p>}
    //     <button onClick={reset}>Reset</button>
    // </div>
    <main className="flex h-full flex-col items-center justify-center">
      {" "}
      <h2 className="text-center">Something went wrong!</h2>{" "}
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => reset()}
      >
        {" "}
        Try again{" "}
      </button>{" "}
    </main>
  );
}
