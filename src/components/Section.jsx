const Section = ({ imageSrc, title, titlesub, text, direction }) => {
  return (
    <div className="md:px-20 px-10 md:py-20 py-8 border-t border-white border-opacity-30 mt-5">
      <section className={`flex flex-col gap-8 md:gap-32 items-center md:px-12 justify-between ${direction}`}>
        <img src={imageSrc} alt={title} className="w-full md:w-[35vw] h-auto" />

        <div className="text-lg md:text-left text-center md:text-3xl font-bold font-head flex flex-col text-white w-full">
          <span>{title}</span>
          <span className="text-primary">{titlesub}</span>
          <div className="text-sm font-regular font-normal leading-7 mt-4 md:text-left text-center flex flex-col">
            {text}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
