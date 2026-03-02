import Link from "next/link";
import { FaCode } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-purple-700 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaCode className="text-2xl" />
          <h1 className="text-xl font-bold">CSC543</h1>
        </div>

       <nav>
  <ul className="flex gap-6 font-medium">
    <li>
      <Link href="/" className="hover:underline">
        Home
      </Link>
    </li>
    <li>
      <Link href="/about" className="hover:underline">
        About
      </Link>
    </li>
  </ul>
</nav>
      </div>
    </header>
  );
}