import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <Link to="/" className="text-xl font-bold">
        React Starter Kit
      </Link>
      <nav className="flex gap-4">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-600">
          About
        </Link>
      </nav>
    </header>
  );
}
