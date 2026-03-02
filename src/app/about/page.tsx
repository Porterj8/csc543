import Image from "next/image";

export default function About() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">About Me</h1>

      <p>
        This is my About page for CSC543. I am learning Next.js,
        Tailwind, and building a multi-page React application.
      </p>

      <Image
        src="/profile.jpg"
        alt="Profile"
        width={200}
        height={200}
        className="rounded-lg"
      />
    </div>
  );
}
