import DatedSection from "./dated_section";

export default function Achievements() {
  return (
    <section className="mx-auto flex gap-x-10 py-7">
      <h2>Achievements</h2>

      <div className="flex flex-col gap-y-6">
        <ul className="list-inside list-disc">
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
        </ul>
      </div>
    </section>
  );
}
