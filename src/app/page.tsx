import { FaCode } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      
      <h1 className="text-3xl font-bold mb-4">
        Jamal Porter <FaCode className="inline ml-2 text-blue-500" />
      </h1>

      <p className="mb-4 text-center max-w-md">
        Still playing and trying to figure this thing out.
        I think I got this working now.
      </p>

      <ul className="list-disc text-left">
        <li>Resume biuld site</li>
        <li>going to use this to build my resume</li>
        <li>making progress</li>
      </ul>

    </main>
  );
}
