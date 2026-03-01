import Intro from "./intro";

export default function Home() {
  return (
    <div className="p-6">
      <section>
        <h1>Jamal Porter</h1>
        <p>Still playing and trying to figure this thing out.</p>
        <ul>
          <li>Resume build site</li>
          <li>going to use this to build my resume</li>
          <li>making progress</li>
        </ul>
        <Intro />
      </section>

      <section>
        <Intro />
      </section>
    </div>
  );
}