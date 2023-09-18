import { useState } from "react";
import MENU from "../assets/menu.svg";
import CLOSE from "../assets/close.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="navbar md:px-20 px-10 md:pt-16 pt-8 md:pb-7 pb-5 border-b border-b-white border-opacity-30 absolute inset-0 top-0 h-max">
        {/* Desktop navbar */}
        <div className="hidden md:flex flex-row justify-between items-center">
          {" "}
          <button className="font-head font-extrabold">
            <a className="text-2xl" href="#home">
              <span className="text-white">get</span>
              <span className="text-primary">linked</span>
            </a>
          </button>
          <div className="flex flex-row justify-between items-center gap-24">
            <div className="flex flex-row justify-between items-center gap-16 font-regular text-white font-medium text-sm">
              {" "}
              <button>
                <a href="#home">Timeline</a>
              </button>{" "}
              <button>
                <a href="#home">Overview</a>
              </button>{" "}
              <button>
                <a href="#home">FAQs</a>
              </button>{" "}
              <button>
                <a href="#home">Contact</a>
              </button>{" "}
            </div>

            <button className="font-regular font-medium text-sm bg-gradient-to-r from-primary to-secondary text-white px-10 py-3 rounded-md">
              <a href="#home">Register</a>
            </button>
          </div>
        </div>

        {/* Mobile navbar */}
        <div className="flex md:hidden flex-row justify-between items-center">
          <button className="font-head font-extrabold">
            <a className="text-lg" href="#home">
              <span className="text-white">get</span>
              <span className="text-primary">linked</span>
            </a>
          </button>
          <button onClick={toggleMobileMenu}>
            <img src={MENU} className="w-5 h-5" alt="menu" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="absolute inset-0 w-full h-screen p-10 bg-dark text-white flex flex-col gap-7">
            <button className="w-full flex flex-row justify-end items-center">
              <img src={CLOSE} className="w-7 h-7" onClick={toggleMobileMenu} />
            </button>
            <div className="font-medium text-xl flex flex-col items-start justify-center gap-5">
              {" "}
              <a href="#timeline">Timeline</a>
              <a href="#overview">Overview</a>
              <a href="#faqs">FAQs</a>
              <a href="#contact">Contact</a>
              <button className="font-regular font-medium text-lg bg-gradient-to-r from-primary to-secondary text-white px-14 py-4 rounded-md">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
