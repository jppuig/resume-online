import { Link, Outlet } from "@remix-run/react";

export default function Nav() {
  return (
    <div>
      <header className="text-white py-6">
        <nav className="flex justify-between items-center">
          <Link to="/">
            <h1 className="ml-6 text-4xl subpixel-antialiased shadow-2xl bg-gradient-to-r from-blue-500 from-10% via-cyan-500 via-30% to-emerald-500 to-95%">Juan Pedro <span className="font-medium">Puig</span></h1>
          </Link>
          <div className="inline-flex">
            <ul className="flex space-x-14 items-center">
              <li>
                <Link to="/" className="hover:underline hover:decoration-solid hover:decoration-2 hover:decoration-teal-400">Home</Link>
              </li>
              <li>
                <Link to="/resume" className="hover:underline hover:decoration-solid hover:decoration-2 hover:decoration-teal-400">Resume</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:underline hover:decoration-solid hover:decoration-2 hover:decoration-teal-400">Experience</Link>
              </li>
            </ul>
            <Link to="/contact" className="ml-28 mr-16 rounded-md px-3 py-2 shadow-2xl bg-gradient-to-r from-green-500 to-cyan-500 hover:from-yellow-500 hover:to-pink-500">Contact</Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
  // No lo estoy usando el outlet
}
