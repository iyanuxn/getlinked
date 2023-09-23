import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import PRIZES from "../assets/prizes.svg";
import BADGES from "../assets/badges.png";

const Prizes = () => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <div className="md:px-20 px-12 md:py-16 py-16 border-t border-white border-opacity-30 mt-5 opaqueBg">
      <div className="flex flex-col justify-center items-end gap-1 md:gap-2">
        <div className="w-full md:w-1/2 md:text-3xl text-lg font-bold font-head flex text-white justify-center items-center">
          <div className="flex flex-col">
            <span className="text-center md:text-left">Prizes and</span>
            <span className="text-primary text-center md:text-left">
              Rewards
            </span>
            <span className="text-center  md:text-left text-white font-semibold leading-4 md:leading-7 font-regular text-xs md:text-base w-full md:w-4/5 mt-1 md:mt-4">
              Highlight of the prizes or rewards for winners and for
              participants.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:mt-24 mt-10 md:gap-0 gap-32">
        <motion.div
          animate={inView ? { scale: 1 } : { scale: 0.8 }} // Adjust the scale values as needed
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          ref={ref}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <img src={PRIZES} alt="prizes" />
        </motion.div>
        <div className="w-full md:w-1/2 flex justify-center items-center gap-2 md:gap-6 relative">
          <img
            src={BADGES}
            alt="badges"
            className="absolute w-full h-auto -top-16 md:-top-36"
          />
          <div className="flex flex-col bg-primary bg-opacity-10 px-[2.5vw] md:px-5 pt-16 md:pt-32 md:pb-10 pb-6 rounded-md justify-center items-center text-white font-semibold border border-primary">
            <span className="text-sm md:text-4xl">2nd</span>
            <span className="text-sm md:text-2xl">Runner</span>
            <span className="text-[0.9em] md:text-3xl mt-1 md:mt-5 text-primary font-bold">
              N300,000
            </span>
          </div>
          <div className="flex flex-col bg-secondary bg-opacity-10 px-[2.5vw] md:px-5 pt-20 md:pt-40 md:pb-10 pb-6 rounded-md justify-center items-center text-white font-semibold border border-secondary">
            <span className="text-sm md:text-4xl">1st</span>
            <span className="text-sm md:text-2xl">Runner</span>
            <span className="text-[0.9em] md:text-3xl mt-[2.5vw] md:mt-5 text-secondary font-bold">
              N400,000
            </span>
          </div>{" "}
          <div className="flex flex-col bg-primary bg-opacity-10 px-[2.5vw] md:px-5 pt-16 md:pt-32 md:pb-10 pb-6 rounded-md justify-center items-center text-white font-semibold border border-primary">
            <span className="text-sm md:text-4xl">3rd</span>
            <span className="text-sm md:text-2xl">Runner</span>
            <span className="text-[0.9em] md:text-3xl mt-1 md:mt-5 text-primary font-bold">
              N150,000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
