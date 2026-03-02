import Intro from "./intro";

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <section className="bg-green-700 p-6 rounded">
        <h1 className="text-xl font-bold">Jamal Porter</h1>
        <p>Still playing and trying to figure this thing out.</p>
        <ul className="list-disc ml-6">
          <li>Resume build site</li>
          <li>going to use this to build my resume</li>
          <li>making progress</li>
        </ul>
        <Intro />
      </section>

      <section className="bg-green-700 p-6 rounded">
        <Intro />
      </section>
    </div>
  );
}