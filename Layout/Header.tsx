import { FaCode } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-purple-700 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo/Icon + Title */}
        <div className="flex items-center gap-3">
          <FaCode className="text-2xl" />
          <h1 className="text-xl font-bold">Jamal’s App</h1>
        </div>

        {/* Right: Nav */}
        <nav>
          <ul className="flex gap-6 font-medium">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
