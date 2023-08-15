import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "JPP | Experience" },
    { name: "description", content: "Welcome to my resume!" },
  ];
};

export default function ExperienceIndexRoute() {
  return (
    <div>
      <div className="dark:bg-titleBG py-14">
        <h2 className="pl-56 text-3xl underline decoration-teal-400 decoration-3 font-medium">Experience</h2>
      </div>
      <article className="grid grid-cols-2 gap-x-20 gap-y-8 mx-48 my-12">
        <div className="bg-titleBG rounded-2xl px-3 py-2 border border-teal-400">
          <h3 className="font-medium mb-1 underline decoration-teal-400">Associate Professor</h3>
          <div className="text-sm text-slate-400">
            <p>ORT University | Montevideo, UY</p>
            <p>August 2023 - today</p>
          </div>
        </div>
        <div className="bg-titleBG rounded-2xl px-3 py-2 border border-teal-400">
          <h3 className="font-medium mb-1 underline decoration-teal-400">Assistant Professor</h3>
          <div className="text-sm text-slate-400">
            <p>ORT University | Montevideo, UY</p>
            <p>March 2023 - July 2023</p>
            <ul className="list-disc ml-4">
              <li>In charge of lecturing study spaces in the afternoon.</li>
            </ul>
          </div>
        </div>
        <div className="bg-titleBG rounded-2xl px-3 py-2 border border-teal-400">
          <h3 className="font-medium mb-1 underline decoration-teal-400">Paid Media Specialist</h3>
          <div className="text-sm text-slate-400">
            <p>Wasabi Digital | Montevideo, UY</p>
            <p>March 2021 - September 2022</p>
            <p>Reference: Martín Gargiulo - 095012876</p>
            <ul className="list-disc ml-4">
              <li>In charge of media planning and budgets for more than 10 account.</li>
              <li>Brainstorm and application of creative solutions to achieve results.</li>
              <li>Knowledge and application of tracking tools to achieve better results.</li>
            </ul>
          </div>
        </div>
        <div className="bg-titleBG rounded-2xl px-3 py-2 border border-teal-400">
          <h3 className="font-medium mb-1 underline decoration-teal-400">Reprogramming Team Member</h3>
          <div className="text-sm text-slate-400">
            <p>Sarea | Montevideo, UY</p>
            <p>Reference: Luís Labadie - 094445907</p>
            <ul className="list-disc ml-4">
              <li>Tracking and contacting customers to guide them in the reprogramming process of their POS device.</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}