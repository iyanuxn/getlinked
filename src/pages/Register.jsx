import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import REGISTER from "../assets/register.svg";
import JOURNEY from "../assets/journey.svg";

const Register = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "Select your category"
  );

  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("Select your group size");
  const [agree, setagree] = useState(false);
  const [zIndexC, setzIndexC] = useState("z-10");
  const [zIndexS, setzIndexS] = useState("z-10");

  const categoryOptions = [
    {
      name: "Option1",
      value: "Option1",
    },
    {
      name: "NOT Option1",
      value: "NOT Option1",
    },
  ];

  const sizeOptions = [
    {
      name: "Option1",
      value: "Option1",
    },
    {
      name: "NOT Option1",
      value: "NOT Option1",
    },
  ];

  const handleCategorySelect = (option) => {
    setSelectedCategory(option);
    setIsCategoryDropdownOpen(false);
  };

  const handleSizeSelect = (option) => {
    setSelectedSize(option);
    setIsSizeDropdownOpen(false);
  };

  const handleCategoryDropdownToggle = () => {
    setIsCategoryDropdownOpen((prev) => !prev);
    setzIndexC("z-50");
  };

  const handleSizeDropdownToggle = () => {
    setIsSizeDropdownOpen((prev) => !prev);
        setzIndexC("z-50");
  };

  const handleAgreeClick = () => {
    setagree(!agree);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className="text-white md:pt-60 pt-28 md:pb-32 md:px-20 px-8 py-10 regBg min-h-screen font-regular">
      <div className="flex md:flex-row-reverse flex-col items-center justify-between">
        <div className="flex justify-center items-center -left-24 w-2/3 static md:absolute">
          <img src={REGISTER} className="w-3/4 h-3/4" alt="Registration" />
        </div>
        <form
          className="md:w-[48vw] w-full flex flex-col justify-center items-center md:shadow-2xl md:border mt-6 md:mt-0 border-white border-opacity-5 rounded-md md:py-16 px-5 md:px-12"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start w-full">
            <span className="font-head text-primary font-semibold text-3xl text-left">
              Register
            </span>
            <div className="text-sm mt-5 flex items-end gap-3">
              <span>Be part of this movement!</span>
              <img src={JOURNEY} className="w-40" alt="Journey" />
            </div>
            <span className="text-xl mt-4 font-bold">CREATE YOUR ACCOUNT</span>
          </div>
          <div className="flex flex-col gap-6 mt-10 w-full">
            <div className="flex gap-8">
              <div className="w-1/2">
                <label className="text-[0.8em] leading-9 font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="text-[0.8em] h-12 w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md px-4"
                />
              </div>
              <div className="w-1/2">
                <label className="text-[0.8em] leading-9 font-semibold">
                  Project Topic
                </label>
                <input
                  type="text"
                  placeholder="What is your group project topic"
                  className="text-[0.8em] h-12 w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md px-4"
                />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-1/2">
                <label className="text-[0.8em] leading-9 font-semibold">
                  Team's Name
                </label>
                <input
                  type="text"
                  placeholder="Enter the name of your team"
                  className="text-[0.8em] h-12 w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md px-4"
                />
              </div>
              <div className="w-1/2">
                <label className="text-[0.8em] leading-9 font-semibold">
                  Team's Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="text-[0.8em] h-12 w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md px-4"
                />
              </div>
            </div>{" "}
            <div className="flex gap-8">
              <div className="w-1/2">
                <label className="text-[0.8em] leading-9 font-semibold">
                  Category
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="bg-white h-12 bg-opacity-5 text-white rounded-md border border-white py-2 w-full flex justify-center items-center px-4"
                    onClick={handleCategoryDropdownToggle}
                  >
                    <div className="flex gap-5 items-center w-full">
                      <span
                        className={`text-[0.8em] ${
                          selectedCategory === "Select your category"
                            ? "text-white text-opacity-60"
                            : "text-white"
                        }`}
                      >
                        {selectedCategory}
                      </span>
                    </div>
                    <AiOutlineCaretDown
                      className={`transition-all duration-300 ease-in-out md:text-base text-xs  ${
                        isCategoryDropdownOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isCategoryDropdownOpen && (
                    <div className="absolute z-30 right-0 overflow-hidden mt-2 w-full bg-dark text-white rounded-md  border border-white shadow-lg fade-in">
                      {categoryOptions.map((option, index) => (
                        <div
                          key={index}
                          className={`hover:bg-darkAlt px-4 py-3 cursor-pointer flex gap-5 items-center transition-all duration-300 ease-in-out ${zIndexC}`}
                          onClick={() => {
                            handleCategorySelect(option.name);
                          }}
                        >
                          <span className="text-sm md:text-md">
                            {option.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-1/2">
                <label className="text-[0.8em] leading-9 font-semibold">
                  Group Size
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="bg-white h-12 bg-opacity-5 text-white rounded-md border border-white py-2 w-full flex justify-center items-center px-4"
                    onClick={handleSizeDropdownToggle}
                  >
                    <div className="flex gap-5 items-center w-full">
                      <span
                        className={`text-[0.8em] ${
                          selectedSize === "Select your group size"
                            ? "text-white text-opacity-60"
                            : "text-white"
                        }`}
                      >
                        {selectedSize}
                      </span>
                    </div>
                    <AiOutlineCaretDown
                      className={`transition-all duration-300 ease-in-out md:text-base text-xs  ${
                        isSizeDropdownOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isSizeDropdownOpen && (
                    <div className="absolute z-30 right-0 overflow-hidden mt-2 w-full bg-dark text-white rounded-md  border border-white shadow-lg fade-in">
                      {sizeOptions.map((option, index) => (
                        <div
                          key={index}
                          className={`hover:bg-darkAlt px-4 py-3 cursor-pointer flex gap-5 items-center transition-all duration-300 ease-in-out ${zIndexC}`}
                          onClick={() => {
                            handleSizeSelect(option.name);
                          }}
                        >
                          <span className="text-sm md:text-md">
                            {option.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-start mt-8">
            {" "}
            <span className="text-primary italic text-[0.8em]">
              Please review your registration details before submitting
            </span>
          </div>
          <div className="w-full flex justify-start items-center gap-2 mt-8">
            <button
              onClick={handleAgreeClick}
              className={`z-20 w-4 h-4 border rounded-sm border-white flex justify-center items-center first-letter transition-all duration-300 ease-in-out
            ${
              agree
                ? "bg-gradient-to-r from-primary to-secondary"
                : "bg-transparent"
            }`}
            >
              {
                <BsCheckLg
                  className={`transition-all duration-300 ease-in-out ${
                    agree ? "text-white" : "text-transparent"
                  } text-xs`}
                />
              }
            </button>{" "}
            <span className="text-white font-semibold text-[0.8em]">
              I agreed with the event terms and conditions and privacy policy{" "}
            </span>
          </div>{" "}
          <button className="md:w-full w-28 text-sm md:text-base bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md md:mt-10 mt-8">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
