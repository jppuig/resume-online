import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "JPP | Projects" },
    { name: "description", content: "Welcome to my resume!" },
  ];
};

export default function ProjectIndexRoute() {
  const projects = [
    {
      title: "",
      description: "",
    },
  ];

  return (
    <div>
      <div className="dark:bg-titleBG py-10 sm:py-14">
        <h2 className="max-lg:text-center lg:pl-56 text-3xl underline decoration-teal-400 decoration-3 font-medium">Projects</h2>
      </div>
      <article className="sm:my-12 max-sm:my-8 max-xl:flex max-xl:flex-col max-xl:place-items-center gap-y-4 sm:gap-y-10 xl:grid xl:grid-cols-6 xl:gap-x-10">
        {
          projects.map((project: { title: string, description: string }, index: number) => (
            <div className={`rounded-2xl px-3 py-2 border border-teal-400 max-sm:max-w-xs max-xl:max-w-xl ${
                index % 2 === 0 ? 'xl:col-start-2 xl:col-end-4' : 'xl:col-start-4 xl:col-end-6'
              }`} key={project.title}>
              <h3 className="font-medium mb-1 underline decoration-teal-400 text-lg">{ project.title }</h3>
              <div className="text-slate-300 text-sm">
                <p>{ project.description }</p>
                {/* <p>{ project.company } | { project.location }</p>
                <p>{ project.date }</p>
                <p>{ project.reference == null ? "" : "Reference: " + project.reference.name + " - " + project.reference.phone }</p> */}
              </div>
            </div>
          ))
        }
      </article>
    </div>
  );
}