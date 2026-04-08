import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="mt-4 text-gray-500">Page not found</p>
      <Link to="/" className="mt-6 text-blue-500 underline">
        Go Home
      </Link>
    </div>
  );
}
