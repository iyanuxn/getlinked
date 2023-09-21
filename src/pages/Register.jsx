import IG from "../assets/Ig.svg";
import X from "../assets/X.svg";
import FB from "../assets/facebook.svg";
import LINKEDIN from "../assets/linkedin.svg";

const Register = () => {
  return (
    <div className="text-white md:pt-60 pt-28 md:pb-32 md:px-20 px-8 regBg min-h-screen font-regular">
      <div className="flex justify-between md:px-12">
        <div className="w-1/3 hidden md:flex flex-col font-semibold text-base justify-center gap-10">
          <span className="font-head text-primary text-3xl">Get in touch</span>
          <span>
            Contact <br />
            Information
          </span>
          <span>
            27,Alara Street <br /> Yaba 100012 <br /> Lagos State
          </span>
          <span>Call Us : 07067981819</span>
          <span>
            We are open from Monday-Friday <br /> 08:00am - 05:00pm
          </span>
          <div className="flex flex-col gap-3">
            {" "}
            <span className="text-primary">Share on</span>
            <div className="flex items-center gap-4 w-max">
              <img src={IG} className="md:w-6 md:h-6 w-6 h-6" />
              <img src={X} className="md:w-4 md:h-4 w-4 h-4" />
              <img src={FB} className="md:w-5 md:h-5 w-5 h-5" />
              <img src={LINKEDIN} className="md:w-6 md:h-6 w-6 h-6" />
            </div>
          </div>
        </div>
        <form className="md:w-1/2 w-full flex flex-col justify-center items-center shadow-2xl border border-white border-opacity-5 rounded-md md:py-16 md:px-20">
          <div className="flex items-start w-full">
            {" "}
            <span className="font-head text-primary font-semibold text-xl text-left">
              Questions or need assistance? <br />
              Let us know about it!
            </span>
          </div>
          <div className="flex flex-col gap-10 mt-8 w-full">
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md py-2 px-4"
            />
            <input
              type="email"
              placeholder="Mail"
              className="w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md py-2 px-4"
            />
            <textarea
              placeholder="Message"
              className="w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md py-2 px-4"
            />
          </div>
          <button className="md:w-44 w-28 text-sm md:text-base bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md md:mt-10">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
