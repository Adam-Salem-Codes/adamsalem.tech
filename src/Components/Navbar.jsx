import React from "react";
import "./css/Navbar.css";
const Navbar = () => {
  if (window.location.href.includes("Documents")) {
    return <div></div>;
  }
  return (
    <div className="nav w-full h-[90px] fixed text-center">
      <div className="text-right max-sm:text-center p-4 text-sky-600 w-full max-sm:text-[1.85vh]">
        <div className="nav w-full h-[90px] fixed dark:bg-transparent">
          <div className="text-right max-sm:text-center p-4 text-sky-600 w-full ">
            <i className="moon fa-solid fa-moon p-4 hover:scale-125 duration-500"></i>
            <i className="sun fa-regular fa-lightbulb p-4 hover:scale-125 duration-500"></i>
            <a
              href="/#home"
              className="p-4 hover:text-5xl max-sm:hover:text-[1.85vh] duration-500"
            >
              Home
            </a>
            <a
              href="/#about"
              className="p-2 max-sm:hover:text-[1.85vh] hover:text-5xl duration-500"
            >
              About
            </a>
            <a
              href="/about"
              className="p-2 max-sm:hover:text-[1.85vh] hover:text-5xl duration-500"
            >
              Experience
            </a>
            <a
              href="/Code_samples"
              className="p-2 max-sm:hover:text-[1.85vh] hover:text-5xl duration-500"
            >
              Code
            </a>
            <a
              href="/Contact"
              className="p-2 max-sm:hover:text-[1.85vh] hover:text-5xl duration-500"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
