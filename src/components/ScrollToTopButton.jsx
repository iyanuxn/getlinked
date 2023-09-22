import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls down 200 pixels
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed md:bottom-10 bottom-5 right-7 md:right-10 text-4xl md:text-5xl text-darkAlt bg-white rounded-full"
          onClick={scrollToTop}
          title="Scroll to Top"
        >
          <BsFillArrowUpCircleFill />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
