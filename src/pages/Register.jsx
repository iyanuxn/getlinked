import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios"; // Import Axios
import REGISTER from "../assets/register.svg";
import JOURNEY from "../assets/journey.svg";
import CONGRATS from "../assets/congrats.svg";
import { motion } from "framer-motion";

const Register = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "Select your category"
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("Select");
  const [agree, setAgree] = useState(false);
  const [zIndexC, setzIndexC] = useState("z-10");
  const [zIndexS, setzIndexS] = useState("z-10");
  const [categoryOptions, setCategoryOptions] = useState([]); // State for category options

  useEffect(() => {
    // Define the API endpoint URL for categories
    const apiUrl = "https://backend.getlinked.ai/hackathon/categories-list";

    // Make a GET request to the API to fetch categories
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response by setting the category options
        setCategoryOptions(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching categories:", error);
      });
  }, []); // Empty dependency array to fetch categories once on component mount

  const sizeOptions = [
    {
      id: 1,
      name: "1",
      value: 1,
    },
    {
      id: 2,
      name: "2",
      value: 2,
    },
    {
      id: 3,
      name: "3",
      value: 3,
    },
    {
      id: 4,
      name: "4",
      value: 4,
    },
    {
      id: 5,
      name: "5",
      value: 5,
    },
    {
      id: 6,
      name: "6",
      value: 6,
    },
    {
      id: 7,
      name: "7",
      value: 7,
    },
    {
      id: 8,
      name: "8",
      value: 8,
    },
    {
      id: 9,
      name: "9",
      value: 9,
    },
    {
      id: 10,
      name: "10",
      value: 10,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleCategorySelect = (option, id) => {
    setSelectedCategory(option);
    setSelectedCategoryId(id);
    setIsCategoryDropdownOpen(false);
  };

  const handleSizeSelect = (option) => {
    setSelectedSize(parseInt(option, 10)); // Parse as base 10
    setIsSizeDropdownOpen(false);
  };

  const handleCategoryDropdownToggle = () => {
    setIsCategoryDropdownOpen((prev) => !prev);
    setzIndexC("z-50");
  };

  const handleSizeDropdownToggle = () => {
    setIsSizeDropdownOpen((prev) => !prev);
    setzIndexS("z-50");
  };

  const handleAgreeClick = () => {
    setAgree(!agree);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form input values
    const teamName = e.target.elements.teamName.value.trim();
    const phone = e.target.elements.phone.value.trim();
    const email = e.target.elements.email.value.trim();
    const projectTopic = e.target.elements.projectTopic.value.trim();
    const category = selectedCategoryId;
    const groupSize = selectedSize;
    const privacyPolicyAccepted = agree;

    // Check if any of the required fields are empty
    if (
      !teamName ||
      !phone ||
      !email ||
      !projectTopic ||
      category == null ||
      groupSize == "Select" ||
      !privacyPolicyAccepted
    ) {
      alert("Please fill in all required fields.");
      return false;
    }

    const formData = {
      email: email,
      team_name: teamName,
      phone_number: phone,
      project_topic: projectTopic,
      group_size: groupSize,
      privacy_poclicy_accepted: privacyPolicyAccepted,
      category: category,
    };

    console.log("Form Data Submitted:", formData);

    axios
      .post(
        "https://backend.getlinked.ai/hackathon/registration",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          console.log("Registration successful:", response.data);
          openModal();
        } else {
          alert("Failed to submit");
          console.log(
            "Registration failed. HTTP Status Code:",
            response.status
          );
          console.log("Response data:", response.data);
        }
      })

      .catch((error) => {
        console.log(formData.type);
        console.log("Error response:", error.response);
        console.log("Error request:", error.request);
        console.log("Error message:", error.message);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white md:pt-60 pt-28 md:pb-32 md:px-20 px-6 py-10 regBg min-h-screen font-regular"
    >
      <div className="flex md:flex-row-reverse flex-col items-center justify-between">
        <div className="flex flex-col justify-center gap-5 items-center -left-24 md:w-2/3 static md:absolute">
          <div className="flex flex-col items-start w-full px-5">
            {" "}
            <span className="font-head text-primary font-semibold text-xl text-left flex md:hidden">
              Register
            </span>
          </div>
          <img src={REGISTER} className="w-3/4 h-3/4" alt="Registration" />
        </div>
        <form
          className="md:w-[48vw] z-50 w-full flex flex-col justify-center items-center md:shadow-2xl md:border mt-6 md:mt-0 border-white border-opacity-5 rounded-md md:py-16 px-5 md:px-12"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start w-full">
            <span className="font-head text-primary font-semibold text-3xl text-left md:flex hidden">
              Register
            </span>
            <div className="text-[0.8em] md:mt-5 flex items-end gap-2 md:gap-3">
              <span>Be part of this movement!</span>
              <img
                src={JOURNEY}
                className="md:w-40 w-20 h-auto"
                alt="Journey"
              />
            </div>
            <span className="text-xl mt-4 font-semibold">
              CREATE YOUR ACCOUNT
            </span>
          </div>
          <div className="flex flex-col md:gap-6 gap-3 mt-10 w-full">
            <div className="flex md:flex-row flex-col md:gap-8 gap-3">
              <div className="md:w-1/2">
                <label className="text-[0.8em] leading-9 font-semibold">
                  Team's Name
                </label>
                <input
                  name="teamName"
                  type="text"
                  placeholder="Enter the name of your team"
                  className="focus:outline-0 text-[0.8em] h-12 w-full border border-white bg-white bg-opacity-5 rounded-md px-4 focus:bg-transparent"
                  autoComplete="off"
                />
              </div>
              <div className="md:w-1/2">
                <label className="text-[0.8em] leading-9 font-semibold">
                  Phone
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                  className="focus:outline-0 text-[0.8em] h-12 w-full border border-white bg-white bg-opacity-5 rounded-md px-4 focus:bg-transparent"
                  autoComplete="off"
                />
              </div>
            </div>{" "}
            <div className="flex md:flex-row flex-col md:gap-8 gap-3">
              <div className="md:w-1/2">
                <label className="text-[0.8em] leading-9 font-semibold">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="focus:outline-0 text-[0.8em] h-12 w-full border border-white bg-white bg-opacity-5 rounded-md px-4 focus:bg-transparent"
                  autoComplete="off"
                />
              </div>
              <div className="md:w-1/2">
                <label className="text-[0.8em] leading-9 font-semibold">
                  Project Topic
                </label>
                <input
                  name="projectTopic"
                  type="text"
                  placeholder="What is your group project topic"
                  className="focus:outline-0 text-[0.8em] h-12 w-full border border-white bg-white bg-opacity-5 rounded-md px-4 focus:bg-transparent"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="flex md:gap-8 justify-between">
              <div className="md:w-1/2 w-max">
                <label className="text-[0.8em] leading-9 font-semibold">
                  Category
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="bg-white h-12 bg-opacity-5 text-white rounded-md border border-white py-2 w-[48vw] md:w-full flex justify-center items-center px-4"
                    onClick={handleCategoryDropdownToggle}
                  >
                    <div className="flex gap-5 items-center w-full">
                      <span
                        className={`text-xs md:text-[0.8em] mr-3 ${
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
                            handleCategorySelect(option.name, option.id);
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
              <div className="md:w-1/2">
                <label className="text-[0.8em] leading-9 font-semibold">
                  Group Size
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="bg-white h-12 bg-opacity-5 text-white rounded-md border border-white py-2 w-[25vw] md:w-full flex justify-center items-center px-4"
                    onClick={handleSizeDropdownToggle}
                  >
                    <div className="flex gap-5 items-center w-full">
                      <span
                        className={`text-xs md:text-[0.8em] mr-3 ${
                          selectedSize === "Select"
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
                    <div className="absolute z-30 right-0 md:h-44 h-32 overflow-auto mt-2 w-full bg-dark text-white rounded-md  border border-white shadow-lg fade-in">
                      {sizeOptions.map((option, index) => (
                        <div
                          key={index}
                          className={`hover:bg-darkAlt px-4 py-3 cursor-pointer flex gap-5 items-center transition-all duration-300 ease-in-out ${zIndexS}`}
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
          <div className="w-full flex justify-start md:items-start items-center mt-8">
            {" "}
            <span className="text-primary italic text-[0.578em] md:text-[0.8em]">
              Please review your registration details before submitting
            </span>
          </div>
          <div className="w-full flex justify-start md:items-center gap-2 md:mt-8 mt-5">
            <button
              type="button"
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
            <span className="text-white font-semibold text-[0.65em] md:text-[0.8em]">
              I agreed with the event terms and conditions and privacy policy{" "}
            </span>
          </div>{" "}
          <button className="md:w-full w-36 text-xs md:text-base bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md md:mt-10 mt-8">
            Register Now
          </button>
        </form>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={CONGRATS}
        title="Congratulations"
        message="you have successfully Registered!"
        subText="Yes, it was easy and you did it!
        check your mail box for the next steps"
      />
    </motion.div>
  );
};

export default Register;
