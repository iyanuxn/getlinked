import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex flex-row justify-between items-center px-24 pt-16 pb-7 border-b border-b-gray-300">
        <button className="font-head font-extrabold">
          <a className="text-2xl" href="#home">
            <span className="text-white">get</span>
            <span className="text-primary">linked</span>
          </a>
        </button>
        <div className="flex flex-row justify-between items-center gap-28">
          <div className="flex flex-row justify-between items-center gap-14 font-regular text-white font-medium text-sm">
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

          <button className="font-regular font-medium bg-gradient-to-r from-primary to-secondary text-white px-10 py-3 rounded-md">
            <a href="#home">Register</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
