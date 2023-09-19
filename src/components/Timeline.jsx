import React from "react";

const Timeline = () => {
  return (
    <div className="md:px-20 px-12 md:py-16 py-8 border-t border-white border-opacity-30 mt-5 text-white">
      <div className="flex flex-col justify-center md:items-center gap-2">
        <span className="font-bold font-head text-sm md:text-3xl">
          Timeline
        </span>
        <span className="font-normal text-lg tracking-wider md:leading-6 w-1/3 text-center">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </span>
      </div>
    </div>
  );
};

export default Timeline;
