import { useRef, useEffect } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

const timeline = [
  {
    number: "1",
    title: "Hackathon Announcement",
    text: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    date: "November 18, 2023",
  },
  {
    number: "2",
    title: "Teams Registration begins",
    text: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
  },
  {
    number: "3",
    title: "Teams Registration ends",
    text: "Interested Participants are no longer Allowed to register",
    date: "November 18, 2023",
  },
  {
    number: "4",
    title: "Announcement of the accepted teams and ideas",
    text: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023",
  },
  {
    number: "5",
    title: "Getlinked Hackathon 1.0 Offically Begins",
    text: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    date: "November 18, 2023",
  },
  {
    number: "6",
    title: "Demo Day",
    text: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023",
  },
];

const Timeline = () => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  // Animation controls for the mobile timeline
  const mobileTimelineControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mobileTimelineControls.start({ opacity: 1, y: 0 });
    } else {
      mobileTimelineControls.start({ opacity: 0, y: "20%" });
    }
  }, [inView, mobileTimelineControls]);
  return (
    <div
      ref={ref}
      id="timeline"
      className="md:px-20 px-12 md:py-16 py-8 border-t border-white border-opacity-30 mt-5 text-white"
    >
      <div className="flex flex-col justify-center items-center gap-1 md:gap-2">
        <span className="font-bold font-head text-lg md:text-3xl">
          Timeline
        </span>
        <span className="font-normal text-xs md:text-lg tracking-wider md:leading-6 md:w-1/3 text-center">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </span>
        {/* Desktop */}
        <div className="hidden md:block mt-36 w-full relative px-16">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center w-full ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <motion.div
                initial={{ y: "50%" }}
                animate={inView ? { y: 0 } : { y: "50%" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3 * index,
                }}
                className={`flex flex-col w-1/3 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                {" "}
                <span className="font-bold font-head text-xs md:text-xl mt-2 text-primary">
                  {item.title}
                </span>
                <span className="text-[0.8em]">{item.text}</span>
              </motion.div>

              <div className="flex justify-center items-center w-1/3 relative h-32">
                <div className="z-50 flex justify-center items-center p-4 w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full border-8 border-dark transition-all duration-300 ease-in-out">
                  <span className="text-sm md:text-lg">{item.number}</span>
                </div>

                <div className="bg-primary h-full w-1 absolute -top-20"></div>
              </div>

              <motion.span
                initial={{ y: "50%" }}
                animate={inView ? { y: 0 } : { y: "50%" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.4 * index,
                }}
                className={`font-bold text-xs md:text-xl text-primary w-1/3  ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
              >
                {item.date}
              </motion.span>
            </div>
          ))}
        </div>
        {/* Mobile */}
        <div className="md:hidden w-full relative">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: "20%" }}
              animate={mobileTimelineControls}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2 * index,
              }}
              className="flex flex-col mt-6"
            >
              <div className="flex border-l-[0.9vw] border-primary ml-[2.9vw] mb-2 pl-6 h-20">
                <div className="flex flex-col">
                  <span className="font-bold font-head text-[0.8em] md:text-xl text-primary">
                    {item.title}
                  </span>
                  <span className="text-xs">{item.text}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center p-3 w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full">
                  <span className="text-xs">{item.number}</span>
                </div>
                <span className="font-bold text-xs text-primary">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
