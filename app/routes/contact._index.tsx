import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "JPP | Contact" },
    { name: "description", content: "Welcome to my resume!" },
  ];
};

export default function ContactIndexRoute() {

  return (
    <div>
      <div className="dark:bg-titleBG py-10 sm:py-14">
        <h2 className="max-lg:text-center lg:pl-60 text-3xl underline decoration-teal-400 decoration-3 font-medium">Contact</h2>
      </div>
      <section className="max-xl:grid max-xl:grid-rows-[auto, auto] max-xl:auto-rows-min xl:inline-flex xl:space-x-10 place-content-center place-items-center min-w-full max-sm:mt-8 max-xl:mt-14 xl:mt-24">
        {/* <article className="max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-8 my-8"> */}
        <article className="flex flex-col space-y-7 max-xl:row-start-2 max-sm:my-6 max-xl:my-10">
        {/* flex flex-col space-y-7 my-12 */}
          <div className="inline-flex space-x-2 items-center max-xl:place-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-8 h-8 stroke-teal-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <p>(+598)098600681</p>
          </div>
          <a href="mailto:jppuigpesce@gmail.com" className="inline-flex space-x-2 items-center max-xl:place-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-8 h-8 stroke-teal-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <p className="select-all">jppuigpesce@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/juan-pedro-puig/" className="inline-flex space-x-2 items-center max-xl:place-content-center">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.000000 120.000000"  preserveAspectRatio="xMidYMid meet" className="w-8 h-8">
              <g transform="translate(0.000000,120.000000) scale(0.100000,-0.100000)" className="fill-teal-400" stroke="none">
                <path d="M33 1166 l-28 -24 0 -547 0 -547 28 -24 28 -24 540 0 540 0 24 25 25 24 0 550 0 550 -26 20 c-26 21 -36 21 -565 21 l-538 0 -28 -24z m287 -153 c110 -65 15 -238 -98 -179 -70 36 -75 136 -9 177 39 23 70 24 107 2z m585 -272 c55 -25 91 -70 104 -131 6 -28 11 -136 11 -240 l0 -190 -90 0 -90 0 0 175 c0 225 -8 245 -100 245 -30 0 -44 -6 -64 -31 -26 -30 -26 -32 -26 -210 l0 -179 -90 0 -90 0 0 285 0 285 85 0 85 0 0 -37 0 -37 28 27 c59 57 160 73 237 38z m-545 -276 l0 -285 -90 0 -90 0 0 285 0 285 90 0 90 0 0 -285z"/>
              </g>
            </svg>
            <p>Juan Pedro Puig</p>
          </a>
          <a href="https://github.com/jppuig" className="inline-flex space-x-2 items-center max-xl:place-content-center">
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <path d="M20.0002 0C9.01496 0 0 9.01496 0 20.0002C0 29.3743 6.57781 37.8897 15.3126 40.0003V33.3834C14.4471 33.5729 13.6506 33.5784 12.7696 33.3187C11.5876 32.9699 10.6272 32.1826 9.91432 30.982C9.45991 30.2154 8.65455 29.3841 7.81439 29.4451L7.6084 27.1105C9.42512 26.9549 10.9968 28.2174 11.9297 29.7848C12.3441 30.4818 12.8211 30.8904 13.4333 31.0711C14.0251 31.2454 14.6605 31.1617 15.4008 30.9002C15.5867 29.4179 16.2657 28.8631 16.7787 28.0819V28.0807C11.5693 27.3037 9.49318 24.54 8.66919 22.3586C7.57727 19.4621 8.16321 15.8436 10.0941 13.5569C10.1316 13.5124 10.1994 13.3958 10.1731 13.3143C9.28779 10.64 10.3666 8.4278 10.4063 8.19312C11.428 8.49524 11.594 7.88916 14.8445 9.86397L15.4063 10.2015C15.6413 10.3416 15.5674 10.2616 15.8024 10.2439C17.1596 9.87526 18.5902 9.6717 19.9998 9.65339C21.4201 9.6717 22.8417 9.87526 24.2549 10.2589L24.4368 10.2772C24.421 10.2747 24.4863 10.2656 24.5958 10.2003C28.6562 7.74084 28.5103 8.54468 29.5992 8.19068C29.6386 8.42566 30.7031 10.6739 29.8272 13.3143C29.7091 13.6781 33.3474 17.0097 31.3308 22.3577C30.5068 24.54 28.431 27.3037 23.2216 28.0807V28.0819C23.8893 29.0996 24.6917 29.641 24.6874 31.7407V40.0003C33.4225 37.8897 40 29.3743 40 20.0002C40.0003 9.01496 30.9853 0 20.0002 0V0Z" className="fill-teal-400"></path>
            </svg>
            <p>jppuig</p>
          </a>
        </article>
        <form action="https://formsubmit.co/698a7f1092c6e2e356d5d295647715ec" method="POST" className="flex flex-col space-y-7 mt-1 items-center max-xl:place-content-center">
          <div className="xl:inline-flex max-xl:space-y-4">
            <div className="flex flex-col space-y-5 w-64 md:max-xl:w-96 xl:mr-4">
              <input type="text" name="name" placeholder="Full Name" className="rounded-md px-2 py-0 bg-darkBG border-borderBG border-2 focus:border-white" />
              <input type="email" name="email" placeholder="Email Address" className="rounded-md px-2 py-0 bg-darkBG border-borderBG border-2 focus:border-white" />
              <input type="text" name="_subject" placeholder="Subject" className="rounded-md px-2 py-0 bg-darkBG border-borderBG border-2 focus:border-white" />
            </div>
            <textarea name="message" placeholder="Message" className="rounded-md px-2 bg-darkBG border-borderBG border-2 max-md:h-28 md:max-xl:h-36 max-md:w-64 md:w-96 focus:border-white" />
          </div>
          <input type="hidden" name="_next" value="https://jppuig.netlify.app/" />
          <button type="submit" className="hover:bg-teal-400 w-20 py-2 border-2 rounded-xl border-teal-400 place-self-center">
            Send
          </button>
        </form>
      </section>
    </div>
  );
}