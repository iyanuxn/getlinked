import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView, motion } from "framer-motion";

const Section = ({
  imageSrc,
  title,
  titlesub,
  text,
  direction,
  buttonText,
  id,
  link,
}) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  const imageAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const titleAnimation = {
    hidden: { x: "-10%" },
    visible: { x: 0, transition: { duration: 0.5 } },
    transition: { stiffness: 100, type: "spring" },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="md:px-20 px-12 md:py-16 py-8 border-t border-white border-opacity-30 mt-5">
      <section
        id={id}
        className={`flex gap-8 md:gap-20 items-center md:px-8 ${direction}`}
      >
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-full md:w-[40vw] h-auto md:mt-0 mt-5"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageAnimation}
        />

        <div className="text-lg md:text-left text-center md:text-3xl font-bold font-head flex flex-col text-white w-full md:items-start items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={titleAnimation}
            className="flex flex-col w-max"
          >
            <span>{title}</span>
            <span className="text-primary">{titlesub}</span>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textAnimation}
            className="text-sm font-regular font-normal leading-7 mt-4 md:text-left text-center flex flex-col"
          >
            {text}
          </motion.div>
          {buttonText && (
            <Link to={link}>
              <button className="font-regular font-normal md:w-44 w-28 md:text-lg bg-gradient-to-r from-primary to-secondary hover:scale-105 text-white py-2 md:py-3 rounded-md md:mt-10 mt-8 text-sm transition-all duration-300 ease-in-out">
                {buttonText}
              </button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Section;