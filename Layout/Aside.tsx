import { FaUserAlt } from "react-icons/fa";

export default function Aside() {
  return (
    <aside className="bg-teal-500 text-white w-64 p-6">
      <div className="flex items-center gap-3 mb-4">
        <FaUserAlt className="text-xl" />
        <h2 className="text-lg font-bold">Sidebar</h2>
      </div>

      <p className="text-sm leading-relaxed">
        Jamal Porter Resume (lorem ipsum is fine).
      </p>
    </aside>
  );
}