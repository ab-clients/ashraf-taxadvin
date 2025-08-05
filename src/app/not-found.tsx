// /app/not-found.tsx

import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { BsExclamationTriangle } from "react-icons/bs";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-[50vh] items-center justify-center px-4">
      <div className="flex items-center gap-3 mb-6">
        <BsExclamationTriangle className="text-blue-600 dark:text-blue-400 text-4xl" />
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400">
          404
        </h1>
      </div>
      <p className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        Page Not Found
      </p>
      <p className="text-center max-w-md mb-8 text-gray-600 dark:text-gray-400">
        Oops! The page you are looking for doesn’t exist, was moved, or is
        temporarily unavailable.
        <br />
        Need help with taxes or financial services? Let’s get you back on track.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium shadow transition focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <HiOutlineHome className="text-xl" />
        Back to Home
      </Link>
    </main>
  );
}
