import type { V2_MetaFunction } from "@remix-run/node";

import Nav from "./nav";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "JPP | Resume" },
    { name: "description", content: "Welcome to my resume!" },
  ];
};

export default function ResumeIndexRoute() {
  return (
    <div>
      <Nav />
      <div className="dark:bg-titleBG py-14">
        <h2 className="pl-60 text-3xl underline decoration-teal-400 decoration-3 font-medium">Resume</h2>
      </div>
      <section className="grid grid-cols-2 gap-20 mx-32 my-4">
        <article className="col-span-1 mt-4 ">
          <h3 className="font-medium">Education</h3>
          <article>

          </article>
        </article>
        <article className="col-span-1 mt-4 ">
          <h3 className="font-medium">Technologies</h3>
          <article>
            
          </article>
        </article>
      </section>
    </div>
  );
}