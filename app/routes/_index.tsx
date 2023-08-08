import type { V2_MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <header className="text-white py-6">
        <nav className="flex justify-between items-center">
          <h1 className="ml-6 text-4xl subpixel-antialiased bg-gradient-to-r from-blue-500 from-10% via-cyan-500 via-30% to-emerald-500 to-95%">Juan Pedro <strong>Puig</strong></h1>
          <div className="inline-flex">
            <ul className="flex space-x-14 items-center">
              <li>
                <Link to="/home" className="hover:underline hover:decoration-solid hover:decoration-2 hover:decoration-emerald-400">Home</Link>
              </li>
              <li>
                <Link to="/resume" className="hover:underline hover:decoration-solid hover:decoration-2 hover:decoration-emerald-400">Resume</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:underline hover:decoration-solid hover:decoration-2 hover:decoration-emerald-400">Experience</Link>
              </li>
            </ul>
            <span className="ml-28 mr-16 rounded-md px-3 py-2 bg-gradient-to-r from-green-400 to-cyan-500">
              <Link to="/contact">Contact</Link>
            </span>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
