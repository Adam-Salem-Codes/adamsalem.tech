import React from "react";
import Navbar from "./Navbar";
import "./Samples_Home.css";
import Codeblock from "../../Components/Codeblock";
import ReCAPTCHA from "react-google-recaptcha";
import "./js";
const Contact = () => {
  return (
    <div className="bg-[#282828] dark:text-white rounded-lg">
      <div className="w-full h-[100vh] flex justify-center items-center max-sm:flex-col p-12 cursor-default text-center">
        <div className="p-6 duration-1000 hover:scale-110 hover:z-99 rounded-lg">
          <div class="max-w-sm rounded overflow-hidden shadow-lg dark:bg-neutral-700 bg-neutral-700">
            <div class="px-6 py-12">
              <div class="font-bold text-xl mb-2">Contact!</div>
              <p class="text-white  text-base text-center">Adam Salem</p>
            </div>

            <form id="form" onSubmit={() => {}}>
              <label>Email:</label>
              <br />
              <input
                type="email"
                id="email"
                className="bg-slate-100 outline-none border-b-[3px] w-[65%] focus:border-b-blue-400 mb-2 rounded-lg dark:bg-neutral-500"
                required
              />
              <br />
              <label>Message:</label>
              <br />
              <textarea
                className="bg-slate-100 outline-none border-b-[3px] h-14 w-[65%] focus:border-b-blue-400 resize-y rounded-lg dark:bg-neutral-500"
                id="message"
                required
              />
              <br />
              Do you want an email back?&nbsp;&nbsp;
              <input
                type="checkbox"
                className="focus:bg-blue-100"
                id="emailback"
              />
              <div className="flex justify-center my-4">
                <ReCAPTCHA
                  sitekey="6LfUjt0iAAAAAGrg5tJlerRnIok_vo75FBgIxnvz"
                  className=""
                  required
                />
              </div>
              <div className="p-2">
                <input
                  type="submit"
                  className="hover:translate-x-[-5px] mb-4 transition duration-200 ease-in-out w-fit p-3 px-8 h-12 border-b-4 shadow-lg border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:border-b-0"
                  id="submit"
                />
                <i
                  className="fa-solid fa-check text-green-500 hidden"
                  id="check"
                ></i>
                <i
                  className="fa-solid fa-xmark text-red-500 hidden"
                  id="fail"
                ></i>
                <br />
              </div>
              <p className="text-sm text-red-500">
                *No data will be collected*
              </p>
            </form>

            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Discord: Void#0897
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <a href="mailto:adamsalem08@outlook.com">
                  Email: adamsalem08@outlook.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SamplesHome = () => {
  return (
    <div className="HomePage w-full h-full">
      <div className="dark:bg-[#282828] ">
        <div className="text-center">
          <h1 className="my-6 text-5xl">
            <a
              className="underline font-bold text-5xl text-green-500"
              href="/code_samples"
            >
              Free
            </a>{" "}
            <a className="text-blue-500 font-bold" href="/code_samples">
              React Tailwind
            </a>{" "}
            <a className="text-orange-500 font-bold" href="/code_samples">
              Components
            </a>
          </h1>

          <h3 className="underline font-bold dark:text-white">
            By: Adam Salem
          </h3>
        </div>
        <div className="mt-48 flex justify-center items-start">
          <div className="flex justify-center items-center ">
            <div class="grid grid-cols-3 gap-16 gap-y-24 max-lg:grid-cols-1 mb-12 max-lg:gap-12 dark:text-black text-white ">
              <div className="bg-[#282828]   w-[25vw] h-[55vh] max-lg:w-[75vw] rounded-lg shadow-md dark:shadow-white hover:scale-110 hover:shadow-2xl border-[#282828] border-4 hover:border-sky-600">
                <div className="w-full h-1/2 border-2 rounded border-sky-600 flex justify-center items-center">
                  <a
                    className="hover:translate-x-[-5px] transition duration-200 ease-in-out w-fit p-3 px-8 h-12 border-b-4 shadow-2xl border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:border-b-0"
                    href="/code_samples/"
                  >
                    Button
                  </a>
                </div>
                <div className="text-center m-4 p-2 dark:text-white">
                  <h1 className="text-2xl">
                    Animated 3D Button <i class="fa-solid fa-play"></i>
                  </h1>
                  <p className="py-2">
                    This cartoony button gives a 3D effect upon hover,
                    highlights itself, and moves down to create the 3D illusion.
                    For best results put in flex container.
                  </p>
                  <div className="mt-[1vh] flex justify-center">
                    <a
                      className="hover:translate-x-[-5px] transition duration-200 ease-in-out w-fit p-3 px-8 h-12 border-b-4 shadow-2xl border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:border-b-0"
                      href="/code_samples/test"
                    >
                      Check me out!
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#282828] max-lg:w-[75vw]   w-[25vw]  h-[55vh] rounded-lg shadow-md dark:shadow-white hover:scale-110 hover:shadow-2xl border-[#282828] border-4 hover:border-sky-600">
                <div className="w-full h-1/2 border-2 rounded border-sky-600 flex justify-center items-center">
                  <div className="flex justify-center items-center scale-[85%] mr-64">
                    <Navbar />
                  </div>
                </div>
                <div className="text-center m-4 p-2 dark:text-white">
                  <h1 className="text-2xl">
                    Animated Collapsible Navigation Bar
                  </h1>
                  <p className="py-2">
                    This navigation bar collapses when you click the minus
                    button, then it animates into a menu icon. When you hover
                    over the icons they have an animated black underline.
                  </p>
                  <div className="mt-[1vh] flex justify-center">
                    <a
                      className="hover:translate-x-[-5px] transition duration-200 ease-in-out w-fit p-3 px-8 h-12 border-b-4 shadow-2xl border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:border-b-0"
                      href="/code_samples/test"
                    >
                      Check me out!
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#282828] max-lg:w-[75vw]   w-[25vw] h-[55vh] rounded-lg shadow-md dark:shadow-white hover:scale-110 hover:shadow-2xl border-[#282828] border-4 hover:border-sky-600">
                <div className="w-full h-1/2 border-2 rounded border-sky-600 flex justify-center items-center">
                  <div className="flex justify-center items-center scale-[50%] scale-x-75%">
                    <Codeblock
                      code={`
                      <!DOCTYPE html>
                      <html lang="en">
                      <head>
                        <meta charset="UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Document</title>
                      </head>
                      <body>
                        
                      </body>
                      </html>`}
                      langHeader={"HTML"}
                      lang="html"
                    />
                  </div>
                </div>

                <div className="text-center m-4 p-2 dark:text-white">
                  <h1 className="text-2xl">
                    Animated Example Code Block <i class="fa-solid fa-code"></i>
                  </h1>
                  <p className="py-2">
                    This is an example code block which tells you the language
                    and allows you to copy the code. Each component reacts to
                    hover as well as dark/light mode changes.
                  </p>
                  <div className="mt-[1vh] flex justify-center">
                    <a
                      className="hover:translate-x-[-5px] transition duration-200 ease-in-out w-fit p-3 px-8 h-12 border-b-4 shadow-2xl border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:border-b-0"
                      href="/code_samples/test"
                    >
                      Check me out!
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#282828] max-lg:w-[75vw]   w-[28vw] h-[55vh] max-sm:hidden rounded-lg shadow-md dark:shadow-white  flex hover:shadow-2xl border-[#282828] border-4 hover:border-sky-600 hover:scale-110">
                <div className="h-full w-1/2 border-sky-600 border-2 flex justify-center items-center scale-[45%]">
                  <Contact />
                </div>
                <div className="w-1/2 h-full text-center text-md p-2 dark:text-white">
                  <h1 className="text-lg">
                    Functional Contact Form
                    <i class="fa-solid fa-address-book"></i>
                  </h1>
                  <p className="p-2">
                    This contact form has a very nice user friendly design. Most
                    contact form tutorials you will find online don't have good
                    functionality but this makes it easy to setup with an
                    express email server. It also has Google's ReCaptcha to make
                    sure bots don't spam your email inbox. It also has nice
                    cards at the bottom to provide alternate forms of contact
                    like phone number or discord.
                  </p>
                  <div className="mt-[1vh] flex justify-center z-99">
                    <a
                      className="hover:translate-x-[-5px] transition duration-200 ease-in-out w-fit p-3 px-8 h-12 border-b-4 shadow-2xl border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:border-b-0"
                      href="/code_samples/test"
                    >
                      Check me out!
                    </a>
                  </div>
                </div>
              </div>
              <div className="hover:shadow-2xl shadow-[#282828] bg-[#282828] dark:shadow-white shadow-lg  w-[25vw] h-[55vh] hover:scale-110 rounded-lg border-[#282828] border-4 hover:border-sky-600">
                <div className="w-full h-1/2 border-2 border-sky-600 rounded-lg flex justify-center items-center">
                  <a
                    className="border-sky-600 border-4 w-32 h-10 flex justify-center items-center rounded-lg hover:bg-sky-400 text-center text-white hover:w-64 hover:shadow-white font-bold"
                    href="/code_samples"
                  >
                    Example
                  </a>
                </div>
                <div className="text-center m-4 p-2 dark:text-white">
                  <h1 className="text-2xl">Animated Expanding Button</h1>
                  <p className="py-2">
                    This button has cool animated hover effects. Upon hover the
                    button will expand in width and go from a transparent
                    background to a blue background matching the border.
                  </p>
                  <div className="mt-[1vh] flex justify-center">
                    <a
                      className="hover:translate-x-[-5px] transition duration-200 ease-in-out w-fit p-3 px-8 h-12 border-b-4 shadow-2xl border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:border-b-0"
                      href="/code_samples/test"
                    >
                      Check me out!
                    </a>
                  </div>
                </div>
              </div>
              <div className="hover:shadow-2xl shadow-[#282828] bg-[#282828] dark:shadow-white shadow-lg  w-[25vw] h-[55vh] hover:scale-110 rounded-lg border-[#282828] border-4 hover:border-sky-600">
                <div className="w-full h-1/2 border-2 border-sky-600 rounded-lg flex justify-center items-center">
                  <div className="text-center">
                    <svg
                      aria-hidden="true"
                      class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-center m-4 p-2 dark:text-white">
                  <h1 className="text-2xl">Animated Preloader </h1>
                  <p className="py-2">
                    This is a simple preloader/spinner that shows before your
                    site completes loading.
                  </p>
                  <div className="mt-[1vh] flex justify-center">
                    <a
                      className="hover:translate-x-[-5px] transition duration-200 ease-in-out w-fit p-3 px-8 h-12 border-b-4 shadow-2xl border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:border-b-0"
                      href="/code_samples/test"
                    >
                      Check me out!
                    </a>
                  </div>
                </div>
              </div>
              <div className="hover:shadow-2xl shadow-[#282828] bg-[#282828] dark:shadow-white shadow-lg  w-[25vw] h-[55vh] hover:scale-110 rounded-lg border-[#282828] border-4 hover:border-sky-600">
                <div className="w-full h-1/2 border-2 border-sky-600 rounded-lg flex justify-center items-center">
                  <div className="grid grid-cols-3 gap-16">
                    <i className="fa-brands fa-discord scale-150 hover:text-[#7289DA] hover:scale-[200%] text-white"></i>
                    <i className="fa-brands fa-youtube scale-150 hover:text-[#ff0000] hover:scale-[200%] rounded-full text-white"></i>
                    <i class="fa-brands fa-github scale-150 text-white hover:scale-[200%]"></i>
                  </div>
                </div>
                <div className="text-center m-4 p-2 dark:text-white">
                  <h1 className="text-2xl">
                    Social Media Links <i class="fa-solid fa-link"></i>
                  </h1>
                  <p className="py-2">
                    Just a simple collection of icons linking to social media.
                    The icons turn into the respective logos main color when
                    hovered. *Note: you will need Font-Awesome to use this
                    unless you download each svg
                  </p>
                  <div className="mt-[1vh] flex justify-center">
                    <a
                      className="hover:translate-x-[-5px] transition duration-200 ease-in-out w-fit p-3 px-8 h-12 border-b-4 shadow-2xl border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:border-b-0"
                      href="/code_samples/test"
                    >
                      Check me out!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplesHome;
