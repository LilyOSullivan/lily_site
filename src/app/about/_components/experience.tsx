import DatedSection from "./dated_section";

export default function Experience() {
  return (
    <section className="mx-auto flex gap-x-10 py-7">
      <h2>Experience</h2>

      <div className="flex flex-col gap-y-6">
        <DatedSection
          date="2018 - Present"
          title="IT Management"
          subtitle="WineLab"
        >
          <p className="text-sm">
            Oversaw system setup, maintenance, tech upgrades, cybersecurity,
            website administration, and support services.
          </p>
        </DatedSection>
        <DatedSection
          date="2017 - 2021"
          title="Software Development Internship"
          subtitle="Netwatch Ireland Ltd"
        >
          <p className="text-sm">
            Software Development Intern involved in crafting and advancing
            software solutions within the company{"'"}s portfolio. Developed
            applications using technologies such as C#, ASP.NET, SQL Server,
            MongoDB, JavaScript, WebSockets, and Azure. Collaborated in an Agile
            Scrum team, utilising CI/CD tools to design and implement software
            that is hosted across multiple regions, which is then localised for
            different markets.
          </p>
        </DatedSection>
        <DatedSection
          date="2019"
          title="Office Administration"
          subtitle="Crawshaw"
        >
          <p className="text-sm">
            Office Administrator specialising in data entry using Sage and
            Microsoft Office
          </p>
        </DatedSection>
        <DatedSection
          date="2012 - 2017"
          title="IT Management"
          subtitle="Cribbin family Butchers Ltd"
        >
          <p className="text-sm">
            Provided IT and office administration, offering support in both
            Irish and UK branches. Managed on-site and remote assistance, along
            with creating network connections and secure virtual networks
          </p>
        </DatedSection>

        <DatedSection
          date="2013"
          title="Sales Assistant"
          subtitle="The Butchers Block Ltd"
        >
          <p className="text-sm">
            Assisted in new store opening, serving customers and supporting
            management.
          </p>
        </DatedSection>
      </div>
    </section>
  );
}
