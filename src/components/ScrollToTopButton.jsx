import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          key="scrollToTopButton"
          className="fixed md:bottom-10 bottom-5 right-7 md:right-10 text-4xl md:text-5xl text-darkAlt bg-white rounded-full"
          onClick={scrollToTop}
          title="Scroll to Top"
        >
          <BsFillArrowUpCircleFill />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
