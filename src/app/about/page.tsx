import Image from "next/image";

export default function About() {
  return (
    <div className="p-8 flex flex-col items-center gap-6">

      <h1 className="text-3xl font-bold">About Me</h1>

      <Image
        src="/Image/Logo.jpg"
        alt="My Logo"
        width={200}
        height={200}
      />

      <p>This is my CSC543 About page.</p>

    </div>
  );
}