import LINE from "../assets/line.svg";
import POW from "../assets/pow.png";
import CHAIN from "../assets/chain.png";
import BULB from "../assets/bulb.png";
import HERO from "../assets/heroImg.png";

const Header = () => {
  return (
    <div className="text-white bg-dark md:pt-52 pt-28 md:pb-32 heroBg md:px-20 px-10">
      <div className="w-full flex flex-col items-end">
        {" "}
        <span className="font-bold font-regular text-sm md:text-3xl italic">
          {" "}
          Igniting a Revolution in HR Innovation
        </span>
        <img src={LINE} alt="line" className="md:w-56 w-28" />
      </div>{" "}
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start md:pt-20">
        <div className="md:text-6xl text-3xl font-bold font-head flex flex-col md:items-start items-center md:gap-2 md:pt-4 pt-8">
          <div className="flex flex-col gap-2 w-max">
            {" "}
            <div className="flex justify-end items-center">
              {" "}
              <img
                src={BULB}
                alt="bulb"
                className="md:w-10 w-5 md:mr-5 mr-2 absolute md:mb-7"
              />
            </div>
            <span>getlinked Tech</span>
          </div>
          <div className="flex gap-2 items-center">
            {" "}
            <span>
              <span>Hackathon</span>
              <span className="text-primary"> 1.0</span>
            </span>
            <div className="flex justify-center items-center">
              <img src={CHAIN} alt="chain" className="w-auto md:h-20 h-8" />
              <img src={POW} alt="pow" className="w-auto md:h-14 h-6" />
            </div>
          </div>
        </div>
        <span className="text-xs leading-loose md:text-lg font-medium font-regular text-center md:text-start md:w-3/4 mt-3 md:px-0 px-10">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </span>
        <button className="font-regular w-44 text-lg bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md md:mt-10 mt-5">
          Register
        </button>
        <div className="flex gap-5 md:mt-16 mt-8 font-time text-5xl md:px-0 px-10">
          <span>
            {" "}
            <span>00</span>
            <span className="text-base">H</span>
          </span>{" "}
          <span>
            {" "}
            <span>00</span>
            <span className="text-base">M</span>
          </span>{" "}
          <span>
            {" "}
            <span>00</span>
            <span className="text-base">S</span>
          </span>{" "}
        </div>
        <img src={HERO} alt="hero" className="flex md:hidden w-full mt-10" />
      </div>
    </div>
  );
};

export default Header;
