import REGISTER from "../assets/register.svg";
import JOURNEY from "../assets/journey.svg";

const Register = () => {
  return (
    <div className="text-white md:pt-60 pt-28 md:pb-32 md:px-20 px-8 py-10 regBg min-h-screen font-regular">
      <div className="flex md:flex-row flex-col items-center justify-between">
        <div className="flex justify-center items-center w-2/3">
          <img src={REGISTER} />
        </div>
        <form className="md:w-2/3 w-full flex flex-col justify-center items-center md:shadow-2xl md:border mt-6 md:mt-0 border-white border-opacity-5 rounded-md md:py-16 px-5 md:px-20">
          <div className="flex flex-col items-start w-full">
            {" "}
            <span className="font-head text-primary font-semibold text-3xl text-left">
              Register
            </span>
            <div className="text-sm mt-5 flex items-end gap-3">
              <span>Be part of this movement!</span>
              <img src={JOURNEY} className="w-40" />
            </div>
            <span className="text-xl mt-4 font-bold">
                CREATE YOUR ACCOUNT
            </span>
          </div>
          <div className="flex flex-col gap-10 mt-8 w-full">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md py-2 px-4"
            />{" "}
            <input
              type="text"
              placeholder="Topic"
              className="w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md py-2 px-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md py-2 px-4"
            />
            <textarea
              placeholder="Message"
              className="w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md py-2 px-4"
            />
          </div>
          <button className="md:w-full w-28 text-sm md:text-base bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md md:mt-10 mt-8">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
