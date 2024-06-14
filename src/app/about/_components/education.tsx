import DatedSection from "./dated_section";

export default function Education() {
  return (
    <section className="mx-auto flex gap-x-10 py-7">
      <h2>Education</h2>

      <div className="flex flex-col gap-y-6">
        <DatedSection
          date="2022 - 2023"
          belowDate="Not Completed"
          title="PhD in Computer Science"
          subtitle="SETU - South East Technological University"
        >
          <p className="text-sm">
            Undertook two years of doctoral-research in test-case generation for
            embedded C via Symbolic Execution
          </p>
        </DatedSection>
        <DatedSection
          date="2017 - 2021"
          belowDate="1.1 - First Class Honours"
          title="Bachelor of Science (Honours) in Software Development"
        >
          <p className="text-sm">
            A four year undergraduate degree in Software Development.
          </p>
        </DatedSection>
      </div>
    </section>
  );
}
