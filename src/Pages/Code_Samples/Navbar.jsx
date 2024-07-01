import { useState } from "react";
const NavbarCodeSample = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleClick = (event) => {
    // 👇️ toggle visibility
    setIsCollapsed((current) => !current);
  };

  return (
    <div className="w-full h-[8vh] fixed" id="Navbar">
      <div
        className="p-6 max-sm:p-2 bg-opacity-20 backdrop-blur-lg rounded text-center"
        style={{
          width: isCollapsed ? "100%" : "0%",
          height: isCollapsed ? "100%" : "100%",
        }}
      >
        <div className="flex">
          <div className="text-left fixed flex justify-center items-center">
            <button id="menu" onClick={handleClick}>
              {isCollapsed ? (
                <i class="fa-solid fa-minus w-4 h-4 hover:rotate-180 duration-200 dark:text-white"></i>
              ) : (
                <i class="fa-solid fa-bars w-4 h-4 hover:rotate-180 duration-200 dark:text-white"></i>
              )}
            </button>
          </div>
          {isCollapsed && (
            <div className="flex items-center justify-center duration-200">
              <a
                className="group transition-all duration-300 ease-in-out mx-8"
                href="#home"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  <i className="fa-solid fa-home dark:text-white" />
                </span>
              </a>
              <a
                className="group transition-all duration-300 ease-in-out mx-6"
                href="#about"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  <i className="fa-solid fa-question dark:text-white" />
                </span>
              </a>
              <a
                className="group transition-all duration-300 ease-in-out mx-6"
                href="#shop"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  <i className="fa-solid fa-shop dark:text-white" />
                </span>
              </a>
              <a
                className="group transition-all duration-300 ease-in-out mx-6"
                href="#contact"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  <i class="fa-solid fa-address-card dark:text-white"></i>
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarCodeSample;
