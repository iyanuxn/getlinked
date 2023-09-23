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
        <motion.div
          initial={{ x: "100%" }} // Initial position, fully to the right
          animate={{ x: 0 }} // Animate to x: 0, which is the normal position
          transition={{ duration: 1 }} // Animation duration
        >
          <img src={LINE} alt="line" className="md:w-56 w-28" />
        </motion.div>
      </div>
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start md:pt-20">
        <div className="md:text-6xl text-3xl font-bold font-head flex flex-col md:items-start items-center md:gap-2 md:pt-4 pt-8">
          <div className="flex flex-col gap-2 w-max">
            <motion.div
              initial={{ x: "10%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="flex justify-end items-center"
            >
              <img
                src={BULB}
                alt="bulb"
                className="md:w-10 w-5 md:mr-5 mr-2 absolute md:mb-7"
              />
            </motion.div>
            <motion.div
              initial={{ x: "-100%" }} // Initial position, fully to the left
              animate={{ x: 0 }} // Animate to x: 0, which is the normal position
              transition={{ duration: 1 }} // Animation duration
              className="flex flex-col gap-2 w-max"
            >
              getlinked Tech
            </motion.div>
          </div>
          <div className="flex gap-2 items-center">
            <motion.div
              initial={{ x: "-100%" }} // Initial position, fully to the left
              animate={{ x: 0 }} // Animate to x: 0, which is the normal position
              transition={{ duration: 1 }} // Animation duration
            >
              <span>Hackathon</span>
              <span className="text-primary"> 1.0</span>
            </motion.div>
            <motion.div
              initial={{ x: "50%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="flex justify-center items-center"
            >
              <img src={CHAIN} alt="chain" className="w-auto md:h-20 h-8" />
              <img src={POW} alt="pow" className="w-auto md:h-14 h-6" />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ x: "-100%" }} // Initial position, fully to the left
          animate={{ x: 0 }} // Animate to x: 0, which is the normal position
          transition={{ duration: 1 }} // Animation duration
          className="text-xs leading-loose md:text-lg font-medium  text-center md:text-start md:w-3/4 mt-3"
        >
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </motion.div>
        <Link to="/register">
          <button className="w-44 text-lg bg-gradient-to-r from-primary to-secondary hover:scale-105 text-white py-3 rounded-md md:mt-10 mt-5 transition-all duration-300 ease-in-out">
            Register
          </button>
        </Link>
        <CountdownTimer />
        <motion.div
          initial={{ x: "100%" }} // Initial position, fully to the left
          animate={{ x: 0 }} // Animate to x: 0, which is the normal position
          transition={{ duration: 1 }} // Animation duration
        >
          <img src={HERO} alt="hero" className="flex md:hidden w-full mt-10" />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
