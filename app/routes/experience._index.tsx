import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "JPP | Experience" },
    { name: "description", content: "Welcome to my resume!" },
  ];
};

export default function ExperienceIndexRoute() {
  const experiences = [
    {
      title: "Associate Professor",
      company: "ORT University",
      location: "Montevideo, UY",
      date: "August 2023 - current",
      reference: null,
      description: [
        "Lecturing and helping students regarding Haskell projects for the subject Computer Fundamentals over many groups.",
        "Grading those projects along the semester.",
      ],
    },
    {
      title: "Assistant Professor",
      company: "ORT University",
      location: "Montevideo, UY",
      date: "March 2023 - July 2023",
      reference: null,
      description: [
        "In charge of lecturing study spaces for C++ subjects.",
      ],
    },
    {
      title: "Paid Media Specialist",
      company: "Wasabi Digital",
      location: "Montevideo, UY",
      date: "March 2021 - September 2022",
      reference: {
        name: "Martín Gargiulo",
        phone: "095012876",
      },
      description: [
        "In charge of media planning and budgets for more than 10 account.",
        "Brainstorm and application of creative solutions to achieve results.",
        "Knowledge and application of tracking tools to achieve better results.",
      ],
    },
    {
      title: "Reprogramming Team Member",
      company: "Sarea",
      location: "Montevideo, UY",
      date: "2019",
      reference: {
        name: "Luís Labadie",
        phone: "094445907",
      },
      description: [
        "Tracking and contacting customers to guide them in the reprogramming process of their POS device.",
      ],
    },
  ];

  return (
    <div>
      <div className="dark:bg-titleBG py-10 sm:py-14">
        <h2 className="max-lg:text-center lg:pl-56 text-3xl underline decoration-teal-400 decoration-3 font-medium">Experience</h2>
      </div>
      <article className="sm:my-12 max-sm:my-8 max-xl:flex max-xl:flex-col max-xl:place-items-center gap-y-4 sm:gap-y-10 xl:grid xl:grid-cols-6 xl:gap-x-10">
        {
          experiences.map((exp: { title: string, company: string, location: string, date: string, reference: { name: string, phone: string } | null, description: string[] }, index: number) => (
            <div className={`rounded-2xl px-3 py-2 border border-teal-400 max-sm:max-w-xs max-xl:max-w-xl ${
                index % 2 === 0 ? 'xl:col-start-2 xl:col-end-4' : 'xl:col-start-4 xl:col-end-6'
              }`} key={exp.title}>
              <h3 className="font-medium mb-1 underline decoration-teal-400">{ exp.title }</h3>
              <div className="text-sm text-slate-100">
                <p>{ exp.company } | { exp.location }</p>
                <p>{ exp.date }</p>
                <p>{ exp.reference == null ? "" : "Reference: " + exp.reference.name + " - " + exp.reference.phone }</p>
                <ul className="list-disc ml-4">
                  {
                    exp.description.map((desc: string) => (
                      <li key={desc}>{ desc }</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </article>
    </div>
  );
}