import { FaUserAlt } from "react-icons/fa";

export default function Aside() {
  return (
    <aside className="bg-teal-500 text-white w-64 p-6">
      <div className="flex items-center gap-3 mb-4">
        <FaUserAlt className="text-xl" />
        <h2 className="text-lg font-bold">Aside</h2>
      </div>

      <ul className="space-y-2 text-sm">
        <li className="hover:underline cursor-pointer">Dashboard</li>
        <li className="hover:underline cursor-pointer">Settings</li>
        <li className="hover:underline cursor-pointer">Profile</li>
      </ul>
    </aside>
  );
}