import IG from "../assets/Ig.svg";
import X from "../assets/X.svg";
import FB from "../assets/facebook.svg";
import LINKEDIN from "../assets/linkedin.svg";
import CALL from "../assets/call.svg";
import MAP from "../assets/map.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:px-36 px-12 md:py-16 py-8 border-t border-white border-opacity-30 mt-5 bg-darkAlt bg-opacity-80">
      <div className="flex flex-col justify-center items-center gap-16 md:gap-24">
        {" "}
        <div className="flex md:flex-row flex-col md:gap-52 w-full">
          <div className="flex flex-col md:w-1/2 justify-start items-start gap-2">
            {" "}
            <button className="font-head font-extrabold">
              <a className="text-2xl" href="#home">
                <span className="text-white">get</span>
                <span className="text-primary">linked</span>
              </a>
            </button>
            <span className="text-white leading-5 md:leading-7 tracking-wide text-xs md:text-[0.9em]">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </span>
            <span className="h-4 md:h-max md:mt-16 mt-8 text-white font-semibold flex gap-2 md:gap-3 items-center justify-center md:text-sm text-xs">
              <span>
                <Link>Terms of Use</Link>
              </span>{" "}
              <div className="h-full bg-primary w-[0.17em]"></div>{" "}
              <span>
                <Link>Privacy Policy</Link>
              </span>
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:w-1/2 justify-between md:items-end text-sm mt-10 md:mt-0 md:gap-20 gap-10">
            <div className="font-semibold text-white flex flex-col md:gap-5 gap-3 items-start h-full text-xs md:text-[0.9em]">
              <span className="text-primary text-sm md:text-base">
                Useful Links
              </span>
              <span>
                <Link to="/#overview">Overview</Link>
              </span>
              <span>
                <Link to="/#timeline">Timeline</Link>
              </span>
              <span>
                <Link to="/#faqs">Faqs</Link>
              </span>
              <span>
                <Link to="/register">Register</Link>
              </span>
              <div className="flex items-center gap-4 w-max">
                <span className="text-primary">Follow us</span>
                <button>
                  {" "}
                  <img src={IG} className="md:w-7 md:h-7 w-6 h-6" />
                </button>
                <button>
                  <img src={X} className="md:w-5 md:h-5 w-4 h-4" />
                </button>
                <button>
                  {" "}
                  <img src={FB} className="md:w-6 md:h-6 w-5 h-5" />
                </button>{" "}
                <button>
                  {" "}
                  <img src={LINKEDIN} className="md:w-7 md:h-7 w-6 h-6" />
                </button>{" "}
              </div>
            </div>
            <div className="font-semibold text-white flex flex-col gap-5 items-start h-full w-36 text-xs md:text-[0.9em]">
              <span className="text-primary text-sm md:text-base">
                Contact Us
              </span>
              <div className="flex gap-5">
                <img src={CALL} className="w-4 h-4" />
                <span>+234 679 81819</span>
              </div>
              <div className="flex gap-5">
                <img src={MAP} className="w-4 h-4" />
                <span>27,Alara Street Yaba 100012 Lagos State</span>
              </div>
            </div>
          </div>
        </div>
        <span className="text-xs md:text-sm text-white">
          All rights reserved. © getlinked Ltd.
        </span>
      </div>
    </div>
  );
};

export default Footer;
