import React from "react";
import LINE from "../assets/line.svg";
import POW from "../assets/pow.png";
import CHAIN from "../assets/chain.png";
import BULB from "../assets/bulb.png";
import HERO from "../assets/heroImg.png";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="text-white md:pt-48 pt-28 md:pb-40 md:px-20 px-8">
      <div className="w-full flex flex-col items-end">
        <span className="font-bold text-sm md:text-3xl italic">
          <Typewriter
            options={{
              strings: ["Igniting a Revolution in HR Innovation"],
              autoStart: true,
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .deleteAll()
                .typeString("Igniting a Revolution in HR Innovation");
            }}
          />
        </span>
        <img src={LINE} alt="line" className="md:w-56 w-28" />
      </div>
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start md:pt-20">
        <div className="md:text-6xl text-3xl font-bold font-head flex flex-col md:items-start items-center md:gap-2 md:pt-4 pt-8">
          <div className="flex flex-col gap-2 w-max">
            <div className="flex justify-end items-center">
              <img
                src={BULB}
                alt="bulb"
                className="md:w-10 w-5 md:mr-5 mr-2 absolute md:mb-7"
              />
            </div>
            <span>getlinked Tech</span>
          </div>
          <div className="flex gap-2 items-center">
            <span>
              <span>Hackathon</span>
              <span className="text-primary"> 1.0</span>
            </span>
            <div className="flex justify-center items-center">
              <img src={CHAIN} alt="chain" className="w-auto md:h-20 h-8" />
              <img src={POW} alt="pow" className="w-auto md:h-14 h-6" />
            </div>
          </div>
        </div>
        <span className="text-xs leading-loose md:text-lg font-medium  text-center md:text-start md:w-3/4 mt-3">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </span>
        <Link to="/register">
          <button className="w-44 text-lg bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md md:mt-10 mt-5">
            Register
          </button>
        </Link>
        <CountdownTimer />
        <img src={HERO} alt="hero" className="flex md:hidden w-full mt-10" />
      </div>
    </div>
  );
};

export default Header;
