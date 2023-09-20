import PRIVACY from "../assets/privacy.svg";
import CHECK from "../assets/check.svg";

const Privacy = () => {
  return (
    <div className="md:px-20 px-9 md:py-16 py-8 border-t border-white border-opacity-30 mt-5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:w-1/2">
          <span className="text-center md:text-left text-white font-head md:text-3xl text-lg font-bold">
            Privacy Policy and
          </span>
          <span className="text-primary text-center md:text-left font-head md:text-3xl text-lg font-bold">
            Terms
          </span>
          <span className="text-center  md:text-left text-white font-normal leading-4 md:leading-7 font-regular text-xs md:text-base w-full md:mt-4">
            Last updated on September 12, 2023{" "}
          </span>{" "}
          <span className="text-center  md:text-left text-white font-semibold leading-6 md:leading-7 font-regular text-xs md:text-[1.1rem] w-full md:w-3/4 mt-6 md:mt-10">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </span>
          <div className="border border-primary rounded-md md:mt-10 mt-8 text-white px-5 py-10 md:px-16 md:py-16">
            <div className="justify-center flex">
              {" "}
              <span className="md:text-sm text-[0.7em] font-semibold text-center md:text-left leading-7 md:leading-9 tracking-wide">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </span>
            </div>

            <div className="mt-10 flex flex-col">
              <span className="text-primary font-bold text-sm md:text-xl">
                Licensing Policy
              </span>
              <span className="text-white font-bold text-[0.78em] md:mt-0 mt-2 md:text-base">
                Here are terms of our Standard License:
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3 mt-5">
                <img src={CHECK} alt="check" className="w-4 h-4 mt-1" />
                <span className="text-[0.8em] tracking-wide leading-5 md:text-[0.9em]">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </span>
              </div>{" "}
              <div className="flex gap-3 mt-5">
                <img src={CHECK} alt="check" className="w-4 h-4 mt-1" />
                <span className="text-[0.8em] tracking-wide leading-5 md:text-[0.9em]">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </span>
              </div>
              <div className="flex justify-center">
                {" "}
                <button className="md:w-44 w-28 text-sm  md:text-lg bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md md:mt-10 mt-5">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={PRIVACY}
            alt="Privacy"
            className="w-full md:w-[40vw] h-auto md:mt-0 mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Privacy;
