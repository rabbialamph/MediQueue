import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] dark:bg-[#0B0F19] px-4 text-center">
      
      <h1 className="text-7xl font-black text-red-500">404</h1>

      <h2 className="text-2xl text-neutral-900 dark:text-white font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-neutral-400 mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
      >
        Go Home
      </Link>

    </div>
  );
}