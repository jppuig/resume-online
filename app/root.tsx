import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" },
];

export default function App() {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white font-light dark:bg-darkBG font-body dark:text-white min-h-screen flex flex-col">
        <header className="text-white py-3 lg:py-6 max-sm:place-items-center">
          <nav className="sm:flex sm:justify-between items-center">
            <Link to="/" className="max-sm:hidden">
              <h1 className="text-2xl ml-2 lg:ml-6 max-sm:max-w-fit subpixel-antialiased shadow-2xl bg-gradient-to-r from-blue-500 from-10% via-cyan-500 via-30% to-emerald-500 to-95%  hover:from-pink-500 hover:to-yellow-500 lg:text-4xl">Juan Pedro <span className="font-medium">Puig</span></h1>
            </Link>
            <div className="inline-flex max-sm:w-full max-sm:place-content-center">
              <ul className="flex space-x-6 lg:space-x-14 items-center">
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
              <Link to="/contact" className="ml-4 sm:mr-4 sm:ml-6 lg:ml-28 lg:mr-16 rounded-md px-3 py-2 shadow-2xl bg-gradient-to-r from-green-500 to-cyan-500 hover:from-yellow-500 hover:to-pink-500">Contact</Link>
            </div>
          </nav>
        </header>
        <main>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </main>
        <footer className="inline-flex w-full place-content-end pb-2 mt-auto">
          <div className="text-[0.6rem] inline-flex space-x-1 mr-6">
            <p>Made with</p>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 31" className="w-20">
              <path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38BDF8"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="#FFFFFF"></path>
            </svg>
            <p>&</p>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" x-comp="Wordmark" viewBox="0 0 659 165" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Remix logo" role="img" className="w-8">
              <path fillRule="evenodd" clipRule="evenodd" d="M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z" fill="#FFFFFF"></path>
              <path d="M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z" fill="#FFFFFF"></path>
              <path d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z" fill="#FFFFFF"></path>
              <path d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z" fill="#FFFFFF"></path>
              <path d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z" fill="url(&quot;#paint2_linear&quot;)"></path><path d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z" fill="#FFFFFF"></path>
              <path d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z" fill="#FFFFFF"></path>
              <defs><linearGradient id="paint0_linear" x1="591.052" y1="47.1035" x2="591.052" y2="161.28" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop></linearGradient><linearGradient id="paint1_linear" x1="203.19" y1="44.0317" x2="203.19" y2="164.352" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop></linearGradient><linearGradient id="paint2_linear" x1="368.744" y1="44.0317" x2="368.744" y2="161.28" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop></linearGradient><linearGradient id="paint3_linear" x1="499.172" y1="0" x2="499.172" y2="161.28" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop></linearGradient><linearGradient id="paint0_linear" x1="591.052" y1="47.1035" x2="591.052" y2="161.28" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop></linearGradient><linearGradient id="paint1_linear" x1="203.19" y1="44.0317" x2="203.19" y2="164.352" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop></linearGradient><linearGradient id="paint2_linear" x1="368.744" y1="44.0317" x2="368.744" y2="161.28" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop></linearGradient><linearGradient id="paint3_linear" x1="499.172" y1="0" x2="499.172" y2="161.28" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop></linearGradient></defs>
            </svg>
          </div>
        </footer>
      </body>
    </html>
  );
}
