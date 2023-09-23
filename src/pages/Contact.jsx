import React, { useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import IG from "../assets/Ig.svg";
import X from "../assets/X.svg";
import FB from "../assets/facebook.svg";
import LINKEDIN from "../assets/linkedin.svg";
import CONGRATS from "../assets/congrats.svg";
import ERROR from "../assets/error.svg";
import { motion } from "framer-motion";

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isMessageNotSent, setIsMessageNotSent] = useState(false);
  const [isTeamNameEmpty, setIsTeamNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);
  const [isFieldsIncomplete, setIsFieldsIncomplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Add state for form submission in progress

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    window.location.reload();
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const teamName = e.target.elements.teamName.value.trim();
    const email = e.target.elements.email.value.trim();
    const message = e.target.elements.message.value.trim();

    // Check if any of the input fields is empty
    if (!teamName) {
      setIsTeamNameEmpty(true);
    } else {
      setIsTeamNameEmpty(false);
    }

    if (!email) {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }

    if (!message) {
      setIsMessageEmpty(true);
    } else {
      setIsMessageEmpty(false);
    }

    if (!teamName || !email || !message) {
      setIsFieldsIncomplete(true);
      setIsSubmitting(false); // Set form submission in progress to false
      return false;
    }

    setIsFieldsIncomplete(false);

    const formData = {
      first_name: teamName,
      email: email,
      message: message,
    };

    setIsSubmitting(true); // Set form submission in progress to true

    axios
      .post(
        "https://backend.getlinked.ai/hackathon/contact-form",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          console.log("formData:", formData);
          setIsMessageSent(true);
          openModal();
        } else {
          setIsMessageNotSent(true);
          openModal();
        }
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.message);
        console.log(error.request);
        setIsMessageNotSent(true);
        openModal();
      })
      .finally(() => {
        setIsSubmitting(false); // Set form submission in progress to false
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white md:pt-60 pt-28 md:pb-32 md:px-20 px-8 py-10 regBg min-h-screen font-regular"
    >
      <div className="flex justify-between md:px-12">
        <div className="w-1/3 hidden md:flex flex-col font-semibold text-base justify-center gap-10">
          <span className="font-head text-primary text-3xl">Get in touch</span>
          <span>
            Contact <br />
            Information
          </span>
          <span>
            27, Alara Street <br /> Yaba 100012 <br /> Lagos State
          </span>
          <span>Call Us: 07067981819</span>
          <span>
            We are open from Monday-Friday <br /> 08:00am - 05:00pm
          </span>
          <div className="flex flex-col gap-3">
            <span className="text-primary">Share on</span>
            <div className="flex items-center gap-4 w-max">
              <button>
                <img src={IG} className="w-5 h-5" alt="Instagram" />
              </button>
              <button>
                <img src={X} className="w-4 h-4" alt="X" />
              </button>
              <button>
                <img src={FB} className="w-4 h-4" alt="Facebook" />
              </button>
              <button>
                <img src={LINKEDIN} className="w-5 h-5" alt="LinkedIn" />
              </button>
            </div>
          </div>
        </div>
        <motion.form
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="md:w-1/2 w-full flex flex-col justify-center items-center md:shadow-2xl md:border mt-6 md:mt-0 border-white border-opacity-5 rounded-md md:py-16 px-5 md:px-20"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start w-full">
            <span className="font-head text-primary font-semibold text-xl text-left">
              Questions or need assistance? <br />
              Let us know about it!
            </span>
            <span className="text-sm mt-5">
              Email us below with any questions related to our event
            </span>
          </div>

          <div className="flex flex-col gap-10 mt-8 w-full">
            {isFieldsIncomplete && (
              <span className="text-red-500 text-sm -mb-7">
                Please fill in all fields.
              </span>
            )}
            <input
              name="teamName"
              type="text"
              autoComplete="off"
              placeholder="Team's Name"
              className={`w-full focus:outline-none focus:bg-transparent border bg-white bg-opacity-5 rounded-md py-2 px-4 transition-all duration-300 ease-in-out  ${
                isTeamNameEmpty ? "border-red-500" : ""
              }`}
              onChange={() => setIsTeamNameEmpty(false)}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
              className={`w-full focus:outline-none focus:bg-transparent border bg-white bg-opacity-5 rounded-md py-2 px-4  transition-all duration-300 ease-in-out ${
                isEmailEmpty ? "border-red-500" : ""
              }`}
              onChange={() => setIsEmailEmpty(false)}
            />
            <textarea
              name="message"
              placeholder="Message"
              className={`w-full focus:outline-none focus:bg-transparent border bg-white bg-opacity-5 rounded-md py-2 px-4  transition-all duration-300 ease-in-out ${
                isMessageEmpty ? "border-red-500" : ""
              }`}
              onChange={() => setIsMessageEmpty(false)}
            />
          </div>

          <button
            className="md:w-44 w-28 text-sm md:text-base hover:scale-105 transition-all ease-in-out duration-300 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md md:mt-10 mt-8"
            type="submit"
          >
            {isSubmitting ? (
              <div
                className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
            ) : (
              "Submit"
            )}{" "}
          </button>

          <div className="flex flex-col gap-3 md:hidden justify-center items-center mt-16">
            <span className="text-primary text-xs">Share on</span>
            <div className="flex items-center gap-4 w-max">
              <button>
                <img src={IG} className="w-5 h-5" alt="Instagram" />
              </button>
              <button>
                <img src={X} className="w-4 h-4" alt="X" />{" "}
                <button>
                  <img src={IG} className="w-5 h-5" alt="Instagram" />
                </button>
                <button>
                  <img src={X} className="w-4 h-4" alt="X" />
                </button>
                <button>
                  <img src={FB} className="w-4 h-4" alt="Facebook" />
                </button>
                <button>
                  <img src={LINKEDIN} className="w-5 h-5" alt="LinkedIn" />
                </button>
              </button>
              <button>
                <img src={FB} className="w-4 h-4" alt="Facebook" />
              </button>
              <button>
                <img src={LINKEDIN} className="w-5 h-5" alt="LinkedIn" />
              </button>
            </div>
          </div>
        </motion.form>
      </div>
      {/* Success Modal */}
      <Modal
        isOpen={isModalOpen && isMessageSent}
        onClose={closeModal}
        image={CONGRATS}
        title="Successfull"
        message="Message sent successfully."
      />
      {/* Failed Modal */}
      <Modal
        isOpen={isModalOpen && isMessageNotSent}
        onClose={closeModal}
        image={ERROR}
        title="Failed"
        message="Message not sent."
        subText="Please try again later"
      />
    </motion.div>
  );
};

export default Contact;
