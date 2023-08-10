import type { V2_MetaFunction } from "@remix-run/node";

import Nav from "./nav";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "JPP | Experience" },
    { name: "description", content: "Welcome to my resume!" },
  ];
};

export default function ResumeIndexRoute() {
  return (
    <div>
      <Nav />
      <div className="dark:bg-titleBG py-14">
        <h2 className="pl-56 text-3xl underline decoration-teal-400 decoration-3 font-medium">Experience</h2>
      </div>
      <article>
        <ul>
            <li>Hola</li>
        </ul>
      </article>
    </div>
  );
}