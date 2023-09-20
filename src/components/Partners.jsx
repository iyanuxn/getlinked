import LIBERTY from "../assets/liberty.png";
import LIBERTYPAY from "../assets/libertyPay.png";
import WINWISE from "../assets/winwise.png";
import WISPER from "../assets/wisper.png";
import PAYBOX from "../assets/paybox.png";
import VIZUAL from "../assets/vizualPlus.png";

const Partners = () => {
  return (
    <div className="md:px-20 px-12 md:py-16 py-8 border-t border-white border-opacity-30">
      <div className="flex flex-col gap-1 md:mt-4 justify-center items-center text-white">
        <span className="font-head font-bold text-lg md:text-3xl">
          Partners and Sponsors
        </span>
        <span className="font-regular font-semibold text-[0.7em] leading-6 md:text-sm md:leading-7 text-center md:w-2/5">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </span>
      </div>
      <div className="flex flex-col md:py-28 py-5 md:mt-10 mt-7 md:gap-10 gap-3 border border-primary rounded-md px-5 md:px-16">
        <div className="flex">
          <div className="w-1/3 flex justify-center items-center">
            <img
              src={LIBERTY}
              alt="LIBERTY"
              className="md:w-max w-1/2 h-auto"
            />
          </div>
          <div className="w-1/3 flex justify-center items-center border-l-[0.1em] border-r-[0.1em] md:border-l-[0.2em] md:border-r-[0.2em] border-primary">
            <img
              src={LIBERTYPAY}
              alt="LIBERTYPAY"
              className="md:w-max w-1/2 h-auto"
            />
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <img
              src={WINWISE}
              alt="WINWISE"
              className="md:w-max w-1/2 h-auto"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3 flex justify-center">
            <div className="w-4/5 bg-primary h-[0.1em] md:h-[0.2em]"></div>
          </div>
          <div className="w-1/3 flex justify-center">
            <div className="w-4/5 bg-primary h-[0.1em] md:h-[0.2em]"></div>
          </div>{" "}
          <div className="w-1/3 flex justify-center">
            <div className="w-4/5 bg-primary h-[0.1em] md:h-[0.2em]"></div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3 flex justify-center items-center">
            <img src={WISPER} alt="LIBERTY" className="md:w-max w-1/2 h-auto" />
          </div>
          <div className="w-1/3 flex justify-center items-center border-l-[0.1em] border-r-[0.1em] md:border-l-[0.2em] md:border-r-[0.2em] border-primary">
            <img
              src={PAYBOX}
              alt="LIBERTYPAY"
              className="md:w-max w-1/2 h-auto"
            />
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <img src={VIZUAL} alt="WINWISE" className="md:w-max w-1/2 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
