import React from "react";

const Section = ({ imageSrc, title, titlesub, text, direction, buttonText }) => {
  return (
    <div className="md:px-20 px-12 md:py-16 py-8 border-t border-white border-opacity-30 mt-5">
      <section
        className={`flex gap-8 md:gap-20 items-center md:px-8 ${direction}`}
      >
        <img src={imageSrc} alt={title} className="w-full md:w-[40vw] h-auto md:mt-0 mt-5" />

        <div className="text-lg md:text-left text-center md:text-3xl font-bold font-head flex flex-col text-white w-full md:items-start items-center">
          <span>{title}</span>
          <span className="text-primary">{titlesub}</span>
          <div className="text-sm font-regular font-normal leading-7 mt-4 md:text-left text-center flex flex-col">
            {text}
          </div>
          {buttonText && (
            <button className="font-regular font-normal md:w-44 w-28 md:text-lg bg-gradient-to-r from-primary to-secondary text-white py-2 md:py-3 rounded-md md:mt-10 mt-8 text-sm">
              {buttonText}
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Section;
