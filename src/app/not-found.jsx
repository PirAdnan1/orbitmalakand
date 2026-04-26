// app/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-8xl font-black text-primary font-heading">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary px-8 py-4 text-base">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
