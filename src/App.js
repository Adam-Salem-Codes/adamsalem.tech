import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import React from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Preloader from "./Components/Preloader";
import Blog from "./Pages/Blog";
import Website from "./Pages/Blog/Website";
import NavbarCodeSample from "./Pages/Code_Samples/Navbar";
import SamplesHome from "./Pages/Code_Samples/SamplesHome.jsx";
import SamplePage from "./Pages/Code_Samples/Template/SamplePage";
import PID from "./Pages/Documents/PID";
import PIDMath from "./Pages/Documents/PIDMath.jsx";
import ErrorVideo from "./Pages/Documents/ErrorVideo";
function App() {
  return (
    <div className="App scroll-smooth overflow-x-hidden dark:bg-[#282828] bg-white">
      <Preloader />

      {window.location.href.includes("/Code_Samples") ? <> </> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="Blog/website" element={<Website />} />
        <Route path="Code_Samples/Navbar" element={<NavbarCodeSample />} />
        <Route path="/code_samples" element={<SamplesHome />} />
        <Route path="/code_samples/test" element={<SamplePage />} />
        <Route path="/Documents/pid" element={<PID />} />
        <Route path="/Documents/pid_math" element={<PIDMath />} />
        <Route path="/Documents/videos/error_video" element={<ErrorVideo />} />

      </Routes>
    </div>
  );
}
window.onload = (event) => {
  document.getElementById("preloader").style.display = "none";

  console.log("Loaded");
  const sunIcon = document.querySelector(".sun");
  const moonIcon = document.querySelector(".moon");

  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const IconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
  };

  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      moonIcon.classList.add("display-none");
      return;
    }
    sunIcon.classList.add("display-none");
  };

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      IconToggle();
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    IconToggle();
  };

  sunIcon.addEventListener("click", () => {
    console.log("switch");
    themeSwitch();
  });

  moonIcon.addEventListener("click", () => {
    console.log("switch");
    themeSwitch();
  });
  themeCheck();
};
document.getElementById("root").classList += "w-full";
export default App;
