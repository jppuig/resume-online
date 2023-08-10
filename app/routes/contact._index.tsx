import type { V2_MetaFunction } from "@remix-run/node";

import Nav from "./nav";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "JPP | Contact" },
    { name: "description", content: "Welcome to my resume!" },
  ];
};

export default function ResumeIndexRoute() {
  return (
    <div>
      <Nav />
      <div className="dark:bg-titleBG py-14">
        <h2 className="pl-60 text-3xl underline decoration-teal-400 decoration-3 font-medium">Contact</h2>
      </div>
      <section>
        <form>
            <input />
            <input />
            <input />
            <textarea />
        </form>
      </section>
    </div>
  );
}