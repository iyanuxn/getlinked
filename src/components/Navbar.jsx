import { useState, useEffect } from "react";
import MENU from "../assets/menu.svg";
import CLOSE from "../assets/close.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const offsets = {
      timeline: 0, // Offset for Timeline
      overview: -65, // Offset for Overview
      faqs: -65, // Offset for FAQs
    };

    if (location.hash) {
      const targetElement = document.getElementById(location.hash.slice(1));
      if (targetElement) {
        const targetPosition =
          targetElement.offsetTop + offsets[location.hash.slice(1)];
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div className="navbar md:px-20 px-12 md:pt-12 pt-8 md:pb-7 pb-5 border-b border-b-white border-opacity-30 absolute inset-0 top-0 h-max font-regular">
        {/* Desktop navbar */}
        <div className="hidden md:flex flex-row justify-between items-center">
          {" "}
          <button className="font-head font-extrabold">
            <Link to="/" className="text-2xl">
              <span className="text-white">get</span>
              <span className="text-primary">linked</span>
            </Link>
          </button>
          <div className="flex flex-row justify-between items-center gap-24">
            <div className="flex flex-row justify-between items-center gap-16  text-white font-medium text-[0.9em]">
              {" "}
              <button className="hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text bg-white transition-all duration-300 ease-in-out">
                <Link to="/#timeline">Timeline</Link>
              </button>
              <button className="hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text bg-white transition-all duration-300 ease-in-out">
                <Link to="/#overview">Overview</Link>
              </button>{" "}
              <button className="hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text bg-white transition-all duration-300 ease-in-out">
                <Link to="/#faqs">FAQs</Link>
              </button>{" "}
              <button className="hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text bg-white transition-all duration-300 ease-in-out">
                <Link to="/#contact">Contact</Link>
              </button>{" "}
            </div>

            <button className=" font-medium text-sm bg-gradient-to-r from-primary to-secondary text-white px-10 py-3 rounded-md transition-all duration-300 ease-in-out">
              <a href="/">Register</a>
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
          <div className="absolute z-20 inset-0 w-full h-screen p-8 bg-dark text-white flex flex-col gap-7">
            <button className="w-full flex flex-row justify-end items-center">
              <img src={CLOSE} className="w-7 h-7" onClick={toggleMobileMenu} />
            </button>
            <div className="font-medium text-xl flex flex-col items-start justify-center gap-5">
              {" "}
              <a href="#timeline">Timeline</a>
              <a href="#overview">Overview</a>
              <a href="#faqs">FAQs</a>
              <a href="#contact">Contact</a>
              <button className=" font-medium text-lg bg-gradient-to-r from-primary to-secondary text-white px-14 py-4 rounded-md">
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
