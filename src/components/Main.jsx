import IDEA from "../assets/bigIdea.png";

const Main = () => {
  return (
    <div className="md:px-20 px-10 md:py-24 py-8 border-t border-white border-opacity-30 mt-5">
      <section className="flex md:flex-row flex-col gap-16 md:gap-32 items-center px-5">
        <img src={IDEA} alt="IDEA" className="h-1/3 w-auto"/>

        <span className="text-lg md:text-left text-center md:text-3xl font-bold font-head flex flex-col text-white gap-2">
          <span>Introduction to getlinked</span>{" "}
          <span className="text-primary">tech Hackathon 1.0</span>
          <span className="text-sm font-regular font-normal leading-7 mt-4 text-justify">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </span>
        </span>
      </section>{" "}
    </div>
  );
};

export default Main;
