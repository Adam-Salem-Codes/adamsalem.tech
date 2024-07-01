import React from "react";
import Footer from "../Components/Footer";
import "./css/home.css";
import "./css/texteffect.css";

function Home() {
  return (
    <div className="HomePage w-full h-fit">
      <div className="dark:bg-[#282828] dark:text-white">
        <div
          className="flex justify-center items-center h-screen w-screen max-sm:flex-col"
          id="home"
        >
          <div className="max-sm:flex-col flex justify-center items-center">
            <img
              src="assets/Adam.jpg"
              alt=""
              className="w-64 h-64 rounded-full shadow-2xl"
            />
            <div className="px-12 text-center m-auto">
              <h1 className="text-4xl py-4">
                <i className="font-bold	">Welcome</i>, my name is{" "}
                <i className="font-font-font-semibold">Adam Salem</i>{" "}
                <span className="wave">👋</span>
              </h1>
              <p>
                Hi, I'm Adam I'm 13 years old and I love everything relating to
                tech and coding.
              </p>
              <div className="flex justify-center items-center">
                <a
                  className=" block transition duration-200 ease-in-out w-fit p-3 mt-6 px-6 h-fit border-b-4 shadow-lg border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:translate-x-[-5px] hover:border-b-0"
                  href="#about"
                >
                  Wanna hear more about me?{" "}
                  <i class="fa-solid fa-arrow-down animate-bounce ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="h-screen flex w-screen items-center text-center pb-12 max-sm:my-36 my-12"
        >
          <div className="h-full w-[100vw] flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <img
                src="assets/Adam.jpg"
                alt=""
                className="w-64 h-64 rounded-full m-6 max-sm:w-32 max-sm:h-32"
              />
              <h1 className="text-4xl font-bold">About me! 🧠</h1>
              <p className="p-12">
                Hello, I'm Adam and I'm 13 and love technology and gaming.{" "}
                <br />
                I like to code, play games, talk to people, build and tinker
                with stuff, and 3D print. <br />
                I'm also the team captain of my robotics team,
                <a
                  href="https://geargrinders.tech"
                  rel="noreferrer"
                  target="_blank"
                  className="underline underline-offset-1"
                >
                  {" "}
                  Gear Grinders Robotics
                </a>
                . <br />
              </p>

              <div className="hwrap mb-12">
                <div className="hmove">
                  <div className="hslide text-4xl hover:text-6xl">
                    <p>Gaming 🎮</p>
                  </div>
                  <div className="hslide text-4xl hover:text-6xl">
                    <p>Robotics 🤖</p>
                  </div>
                  <div className="hslide text-4xl hover:text-6xl">
                    <p>Coding 👨‍💻</p>
                  </div>
                  <div className="hslide text-4xl hover:text-6xl">
                    <p>Electronics 💡</p>
                  </div>
                </div>
              </div>
              <a
                className="hover:translate-x-[-5px] transition duration-200 ease-in-out w-fit p-3 px-8 h-12 border-b-4 shadow-2xl border-b-blue-500 bg-blue-400 rounded-lg hover:bg-blue-300 font-bold text-white hover:translate-y-1 hover:border-b-0"
                href="/about"
              >
                Experience
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
