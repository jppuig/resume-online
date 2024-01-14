import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "JPP | Home" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

export default function IndexRoute() {
    return (
      <div className="max-sm:mt-4 max-lg:mt-16 max-lg:flex max-lg:flex-col place-content-center place-items-center min-w-full lg:inline-flex lg:space-x-10 lg:mt-28">
        <div className="rounded-full max-w-xs border-8 border-borderBG shadow-2xl max-md:w-64 lg:ml-4">
          <img src="pictures/picCV.png" alt="profile" className="rounded-full" />
        </div>
        <section className="max-lg:mt-4">
          <h3 className="text-slate-400 max-lg:text-center lg:text-xl">Universidad ORT Professor</h3>
          <h1 className="text-4xl max-lg:text-center lg:text-6xl mt-1">Juan Pedro <span className="font-medium">Puig</span></h1>
          <article className="text-slate-400 text-sm max-w-xl mt-6">
            <p className="max-sm:mx-4">I am a Software Engineer associate professor and student, currently on my 3rd year of studies. Two and a half years approved with an average of 95/100.</p>  
          </article>
          <div className="inline-flex space-x-5 justify-items-center min-w-full max-lg:place-content-center mt-6">
            <a href="pdfs/JuanPedroPuigResume.pdf" className="border border-teal-400 rounded-3xl px-3 py-2 hover:bg-teal-400" download>Download CV</a>
            <Link to="/contact" className="border border-teal-400 rounded-3xl px-3 py-2 hover:bg-teal-400">Contact</Link>
          </div>
        </section>
      </div>
    );
}