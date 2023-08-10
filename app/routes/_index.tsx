import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Nav from "./nav";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "JPP | Home" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

export default function IndexRoute() {
    return (
      <div className="min-h-full">
        <Nav />
        <div className="inline-flex space-x-10 place-content-center place-items-center min-w-full mt-28">
          <div className="rounded-full max-w-xs border-8 border-borderBG shadow-2xl ml-4">
            <img src="pictures/picCV.png" alt="profile" className="rounded-full" />
          </div>
          <section className="space-y-4">
            <h1 className="text-6xl">Juan Pedro <span className="font-medium">Puig</span></h1>
            <article className="text-slate-400 text-sm max-w-xl">
              I am a Software Engineer student, currently on my 3rd year of studies. First two years approved with an average of 95/100.  
            </article>
            <div className="inline-flex space-x-5 justify-items-center min-w-full">
              <a href="pdfs/JuanPedroPuigResume.pdf" className="border border-teal-400 rounded-3xl px-3 py-2 hover:bg-teal-400" download>Download CV</a>
              <Link to="/contact" className="border border-teal-400 rounded-3xl px-3 py-2 hover:bg-teal-400">Contact</Link>
            </div>
          </section>
        </div>
      </div>
    );
}