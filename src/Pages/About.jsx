import "./css/about.css";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div className="h-full w-full text-center dark:bg-[#282828] dark:text-white">
      <div className="">
        <h1 className="projects text-8xl max-sm:text-4xl pt-16 h-[170px]">
          Experience.
        </h1>
        <div className="flex justify-center flex-center max-sm:flex-col p-12 cursor-default">
          <div className="max-sm:mb-12 p-6 duration-1000 hover:scale-125 max-sm:pb-24 hover:z-99">
            <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-black hover:border-blue-400">
              <img class="" src="assets/arduino.jpg" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Arduino!{" "}
                  <i className="fa-solid fa-microchip animate-pulse"></i>
                </div>
                <p class="text-base">
                  I love Arduino's; they were my first real introduction to the
                  world of technology. I have fallen in love with them ever
                  since. If you don't know, Arduino's are little boards with
                  programable micro controllers on them.
                </p>
              </div>
              <div>
                <p>Confidence Level 50%:</p>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  <div className="bg-slate-500 w-[100px] h-[20px] rounded-lg flex items-center border-2 border-black">
                    <div className="bg-yellow-500 w-[50px] h-[15px] rounded-lg"></div>
                  </div>
                </span>
              </div>
              <br />
              There is so much stuff to learn with arduino, I don't think anyone
              could truly master it all. There is always more to learn.
              <div class="px-6 pt-4 pb-2 dark:text-black">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Robotics
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Coding
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Electrical
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #C++
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 duration-1000 hover:scale-125 hover:z-99">
            <div class="max-sm:mb-12 max-w-sm rounded overflow-hidden shadow-lg border-2 border-black hover:border-blue-400">
              <img class="w-full" src="assets/vex.png" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Vex Robotics{" "}
                  <i className="fa-solid fa-robot animate-bounce"></i>
                </div>
                <p class="text-base">
                  Vex Robotics was the first real experience I had with
                  robotics. Vex made it so much easier to build robots. It
                  really sparked my curiosity. There is a limit to that though,
                  Vex limits the amount of freedom you have with the
                  electronics. So, whenever I heard I could code the robot in
                  C++ I coded for hours.
                </p>
              </div>
              <div>
                <p>Confidence Level 85%:</p>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  <div className="bg-slate-500 w-[100px] h-[20px] rounded-lg flex items-center border-2 border-black">
                    <div className="bg-green-500 w-[85px] h-[15px] rounded-lg"></div>
                  </div>
                </span>
              </div>
              <br />
              Still a little bit more to learn with building habits.
              <div class="px-6 pt-4 pb-2 dark:text-black">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Robotics
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Coding
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  #C++
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 duration-1000 hover:scale-125 hover:z-99">
            <div class="max-sm:mb-12 max-w-sm rounded overflow-hidden shadow-lg border-2 border-black hover:border-blue-400">
              <img class="w-full" src="assets/react.png" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  React.js <i className="fa-brands fa-react animate-spin"></i>
                </div>
                <p class=" text-base">
                  I first started learning React.js for the builderGroop S2
                  hackathon, I picked up the basics of React in two days to
                  build an app. I don't use React the most often so I would put
                  my Confidence level at a 56%. But I do know enough React to
                  build this site so that's saying something
                  <span className="font-bold"> right?</span>
                  <br />
                  <br />
                  <a
                    href="https://nitro.hop.sh/home"
                    rel="noreferrer"
                    target="_blank"
                    className="underline underline-offset-2"
                  >
                    Nitro Editor
                  </a>
                  <br />
                  <sub>App I built in two days.</sub>
                </p>
              </div>
              <div>
                <p>Confidence Level 56%:</p>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  <div className="bg-slate-500 w-[100px] h-[20px] rounded-lg flex items-center border-2 border-black">
                    <div className="bg-yellow-500 w-[56px] h-[15px] rounded-lg"></div>
                  </div>
                </span>
              </div>
              <br />

              <div class="px-6 pt-4 pb-2 dark:text-black">
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Web Development
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Coding
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center max-sm:flex-col p-12 cursor-default">
          <div className="p-6 duration-1000 hover:scale-125 max-sm:pb-24 hover:z-99 max-sm:mb-12 ">
            <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-black hover:border-blue-400">
              <img class="w-full h-[216px]" src="assets/creality.jpg" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  3D Printing with Ender 3 Pros!{" "}
                  <i class="fa-solid fa-truck animate-pulse"></i>
                </div>
                <p class=" text-base">
                  I absolute love and hate 3D printing with the ender 3 pro. I
                  love it because I get to make cool stuff but, I also hate it
                  because of the shear amount of work involved in making a good
                  product. Overall I love 3D printing a little bit more than
                  hate.
                </p>
              </div>
              <div>
                <p>Confidence Level 85%:</p>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  <div className="bg-slate-500 w-[100px] h-[20px] rounded-lg flex items-center border-2 border-black">
                    <div className="bg-green-500 w-[85px] h-[15px] rounded-lg"></div>
                  </div>
                </span>
              </div>
              <br />
              The world of 3D Printing is vast, again like Arduino virtually
              impossible to master all aspects. But I feel I have learned most
              aspect of my current printer.
              <div class="px-6 pt-4 pb-2 dark:text-black">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Robotics
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Electrical
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Manufacturing
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 duration-1000 hover:scale-125 hover:z-99">
            <div class="max-w-sm rounded overflow-hidden shadow-lg border-2 border-black hover:border-blue-400 max-sm:mb-12">
              <img class="w-full" src="assets/Java.jpg" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Java! <i className="fa-brands fa-java animate-bounce"></i>
                </div>
                <p class=" text-base">
                  I would say out of all languages I have spent the most in
                  Java, I think I know the syntax and programming practices the
                  best. I kind of regret spending so much time using Java as a
                  general purpose programming language. I don't really use it
                  anymore, I realized it wasn't very good. But I still adore
                  Java's syntax, as it was my first programming language I
                  mastered. I think it would be wise to move to C# instead.
                </p>
              </div>
              <div>
                <p>Confidence Level 90%:</p>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  <div className="bg-slate-500 w-[100px] h-[20px] rounded-lg flex items-center border-2 border-black">
                    <div className="bg-green-500 w-[90px] h-[15px] rounded-lg"></div>
                  </div>
                </span>
              </div>
              <br />
              <p>I think there is always things to improve in any subject.</p>

              <div class="px-6 pt-4 pb-2 dark:text-black">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Coding
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  <a
                    href="https://github.com/ItzVoidYT/Texting-App"
                    rel="noreferrer"
                    className="underline"
                  >
                    #Networking sometimes
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 duration-1000 hover:scale-125 hover:z-99">
            <div class="max-w-sm rounded overflow-hidden shadow-lg border-2 border-black hover:border-blue-400 max-sm:mb-12">
              <img class="w-full" src="assets/C.svg" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  <i class="fa-solid fa-c animate-bounce"></i>
                </div>
                <p class=" text-base">
                  I first started learning C in CS50, before I knew a little C++
                  and a lot of syntax I used from Java. That really helped boost
                  me when learning C. I don't really use C often but it is my
                  favorite syntactically. It also introduced me to a lot of new
                  concepts. <p className="text-red-500">Like pointers 😈.</p>
                </p>
              </div>
              <div>
                <p>Confidence Level 70%:</p>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  <div className="bg-slate-500 w-[100px] h-[20px] rounded-lg flex items-center border-2 border-black">
                    <div className="bg-orange-500 w-[70px] h-[15px] rounded-lg"></div>
                  </div>
                </span>
              </div>
              <br />
              Probably never gonna master C. Cause ain't no body got time for
              that.
              <div class="px-6 pt-4 pb-2 dark:text-black">
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Low level 💀
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Coding
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center max-sm:flex-col p-12 cursor-default">
          <div
            className="p-6 duration-1000 hover:scale-125 max-sm:pb-24 hover:z-99 max-sm:mb-12"
            id="hovertest"
          >
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-black hover:border-blue-400"
              id="test"
            >
              <img class="w-full h-[216px]" src="assets/tailwind.jfif" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Tail Wind CSS &nbsp;<i class="fa-brands fa-css3-alt"></i>
                </div>
                <p class=" text-base">
                  I literally just started learning Tail Wind CSS but I already
                  feel confident in it. It feels very natural to me, just like
                  writing normal CSS but a lot easier.
                </p>
              </div>
              <div>
                <p>Confidence Level 75%:</p>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  <div className="bg-slate-500 w-[100px] h-[20px] rounded-lg flex items-center border-2 border-black">
                    <div className="bg-green-500 w-[75px] h-[15px] rounded-lg"></div>
                  </div>
                </span>
              </div>
              <br />I haven't known TailWindCSS for long, but I have known CSS.
              <div class="px-6 pt-4 pb-2 dark:text-black">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Web Development
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #CSS
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #React.js
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 duration-1000 hover:scale-125 hover:z-99">
            <div class="max-w-sm rounded overflow-hidden shadow-lg border-2 border-black hover:border-blue-400 max-sm:mb-16">
              <img class="w-full" src="assets/htmlcssjs.png" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  HTML, CSS, JavaScript <i class="fa-brands fa-js"></i>
                </div>
                <p class=" text-base">
                  I feel pretty confident in my skills with HTML CSS and JS.
                  I've been using them for a while now and have created some
                  pretty OK looking websites.
                </p>
              </div>
              <div>
                <p>Confidence Level 95%:</p>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  <div className="bg-slate-500 w-[100px] h-[20px] rounded-lg flex items-center border-2 border-black">
                    <div className="bg-green-500 w-[90px] h-[15px] rounded-lg"></div>
                  </div>
                </span>
              </div>
              <br />
              <p>JavaScript is virtually infinite.</p>

              <div class="px-6 pt-4 pb-2 dark:text-black">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  #CSS
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  <a
                    href="https://github.com/ItzVoidYT/Texting-App"
                    className="underline"
                  >
                    <i class="fa-brands fa-js"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 duration-1000 hover:scale-125 hover:z-99">
            <div class="max-w-sm rounded overflow-hidden shadow-lg border-2 border-black hover:border-blue-400 max-sm:mb-16">
              <img class="w-full" src="assets/C++.png" alt="" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  C++ <i class="fa-solid fa-file"></i>
                </div>
                <p class=" text-base">
                  I'll be totally honest; I'm not totally confident in C++.
                  There's a lot of stuff I don't know, but despite that I have
                  been able to do a lot with it in terms of productivity.{" "}
                  <a
                    href="https://github.com/GearGrindersRobotics/Buttons-for-vexV5"
                    rel="noreferrer"
                    target="_blank"
                    className="font-bold underline"
                  >
                    Like writing a library for buttons on a touchscreen.
                  </a>
                </p>
              </div>
              <div>
                <p>Confidence Level 50%:</p>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                  <div className="bg-slate-500 w-[100px] h-[20px] rounded-lg flex items-center border-2 border-black">
                    <div className="bg-yellow-500 w-[50px] h-[15px] rounded-lg"></div>
                  </div>
                </span>
              </div>
              <br />

              <div class="px-6 pt-4 pb-2 dark:text-black">
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Low level 💀
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold  mr-2 mb-2">
                  #Coding
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
