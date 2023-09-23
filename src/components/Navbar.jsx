import { useState, useEffect } from "react";
import MENU from "../assets/menu.svg";
import CLOSE from "../assets/close.svg";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollThreshold = 50;

      setVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < scrollThreshold
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const offsets = {
      timeline: 0,
      overview: -65,
      faqs: -65,
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

  const menuAnimation = useAnimation();
  const closeButtonAnimation = useAnimation();
  const menuItemAnimation = useAnimation();
  const menuItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const menuExitAnimation = {
    x: "-100%",
    opacity: 0,
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      menuAnimation.start({ x: 0, opacity: 1 });
      closeButtonAnimation.start({ opacity: 1 });
      menuItemAnimation.start("visible");
    } else {
      menuAnimation.start({ x: "-100%", opacity: 0 });
      closeButtonAnimation.start({ opacity: 0 });
      menuItemAnimation.start("hidden");
    }
  }, [isMobileMenuOpen, menuAnimation, closeButtonAnimation, menuItemAnimation]);

  return (
    <>
      <div
        className={`navbar backdrop-blur-md md:px-20 px-12 md:pt-12 pt-8 md:pb-7 pb-5 border-b border-b-white border-opacity-30 fixed bg-dark bg-opacity-90 z-[100] transition-all duration-300 ease-in-out inset-0 top-0 h-max font-regular ${
          visible ? "top-0" : "-top-60"
        }`}
      >
        <div className="hidden md:flex flex-row justify-between items-center">
          <button className="font-head font-extrabold">
            <Link to="/" className="text-2xl">
              <span className="text-white">get</span>
              <span className="text-primary">linked</span>
            </Link>
          </button>
          <div className="flex flex-row justify-between items-center gap-20">
            <div className="flex flex-row justify-between items-center gap-16  text-white font-medium text-[0.9em]">
              <button className="hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text bg-white transition-all duration-300 ease-in-out">
                <Link to="/#timeline">Timeline</Link>
              </button>
              <button className="hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text bg-white transition-all duration-300 ease-in-out">
                <Link to="/#overview">Overview</Link>
              </button>
              <button className="hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text bg-white transition-all duration-300 ease-in-out">
                <Link to="/#faqs">FAQs</Link>
              </button>
              <button className="hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text bg-white transition-all duration-300 ease-in-out">
                <Link to="/contact">Contact</Link>
              </button>
            </div>
            <Link to="/register">
              <button className="font-medium text-sm bg-gradient-to-r px-[0.2vw] py-[0.2vw] from-primary to-secondary text-white rounded-md">
                <div className="bg-transparent w-full h-full px-10 py-3  transition-all duration-300 ease-in-out hover:bg-dark rounded-md">
                  Register
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`flex transition-all ease-in-out duration-300 md:hidden flex-row justify-between items-center ${
            visible ? "top-0" : "-top-40"
          }`}
        >
          <button className="font-head font-extrabold">
            <Link className="text-lg" to="/">
              <span className="text-white">get</span>
              <span className="text-primary">linked</span>
            </Link>
          </button>
          <button onClick={toggleMobileMenu}>
            <img src={MENU} className="w-5 h-5" alt="menu" />
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute z-[100] inset-0 w-full h-screen p-8 bg-dark text-white flex flex-col gap-7"
              initial={{ x: "-100%", opacity: 0 }}
              animate={menuAnimation}
              exit={menuExitAnimation}
            >
              <motion.button
                className="w-full flex flex-row justify-end items-center"
                onClick={toggleMobileMenu}
                initial={{ opacity: 0 }}
                animate={closeButtonAnimation}
              >
                <img src={CLOSE} className="w-7 h-7" alt="menu" />
              </motion.button>
              <motion.div
                className="font-medium text-xl flex flex-col items-start justify-center gap-5"
                initial="hidden"
                animate={menuItemAnimation}
                variants={menuItemVariants}
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              >
                <Link to="/#timeline" onClick={toggleMobileMenu}>
                  Timeline
                </Link>
                <Link to="/#overview" onClick={toggleMobileMenu}>
                  Overview
                </Link>
                <Link to="/#faqs" onClick={toggleMobileMenu}>
                  FAQs
                </Link>
                <Link to="/contact" onClick={toggleMobileMenu}>
                  Contact
                </Link>
                <Link to="/register" onClick={toggleMobileMenu}>
                  <motion.button
                    className="font-medium text-lg bg-gradient-to-r px-[0.2vw] py-[0.2vw] from-primary to-secondary text-white rounded-md"
                    variants={menuItemVariants}
                  >
                    <div className="bg-transparent w-full h-full px-10 py-3  transition-all duration-300 ease-in-out hover:bg-dark rounded-md">
                      Register
                    </div>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;