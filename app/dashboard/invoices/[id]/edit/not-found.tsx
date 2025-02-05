import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="h-full flex justify-center items-center flex-col gap-4">
      <FaceFrownIcon className="w-12 h-12" />
      <h2 className="text-3xl">404 Not Found</h2>
      <p className="text-2xl">Could not find the requested invoice</p>
      <Link href="/dashboard" className="text-xl">
        Go Back
      </Link>
    </main>
  );
}
