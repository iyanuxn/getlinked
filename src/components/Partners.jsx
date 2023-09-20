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
        <span className="font-head font-bold text-2xl">
          Partners and Sponsors
        </span>
        <span className="font-regular font-normal text-sm leading-5 text-center w-1/3">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </span>
      </div>
      <div className="flex flex-col py-28 md:mt-10 mt-6 md:gap-10 gap-6 border border-primary">
        <div className="flex">
          <div className="w-1/3 flex justify-center items-center">
            <img src={LIBERTY} alt="LIBERTY" />
          </div>
          <div className="w-1/3 flex justify-center items-center border-l-[0.2em] border-r-[0.2em] border-primary">
            <img src={LIBERTYPAY} alt="LIBERTYPAY" />
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <img src={WINWISE} alt="WINWISE" />
          </div>
        </div>
        <div>
            <div className="w-1/3">
                <div></div>
            </div>
        </div>
        <div className="flex">
          <div className="w-1/3 flex justify-center items-center">
            <img src={LIBERTY} alt="LIBERTY" />
          </div>
          <div className="w-1/3 flex justify-center items-center border-l-[0.2em] border-r-[0.2em] border-primary">
            <img src={LIBERTYPAY} alt="LIBERTYPAY" />
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <img src={WINWISE} alt="WINWISE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
