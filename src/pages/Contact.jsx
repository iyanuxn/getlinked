import axios from "axios";
import IG from "../assets/Ig.svg";
import X from "../assets/X.svg";
import FB from "../assets/facebook.svg";
import LINKEDIN from "../assets/linkedin.svg";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("I was clicked");

    const teamName = e.target.elements.teamName.value.trim();
    const email = e.target.elements.email.value.trim();
    const message = e.target.elements.message.value.trim();

    if (!teamName || !email || !message) {
      alert("Please fill in all fields");
      return false;
    }

    const formData = {
      first_name: teamName,
      email: email,
      message: message,
    };

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
          alert("Message sent successfully");
        } else {
          alert("Message not sent");
        }
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.message);
        console.log(error.request);
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
              <img src={IG} className="w-6 h-6" />
              <img src={X} className="w-4 h-4" />
              <img src={FB} className="w-5 h-5" />
              <img src={LINKEDIN} className="w-6 h-6" />
            </div>
          </div>
        </div>
        <form
          className="md:w-1/2 w-full flex flex-col justify-center items-center md:shadow-2xl md:border mt-6 md:mt-0 border-white border-opacity-5 rounded-md md:py-16 px-5 md:px-20"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start w-full">
            {" "}
            <span className="font-head text-primary font-semibold text-xl text-left">
              Questions or need assistance? <br />
              Let us know about it!
            </span>
            <span className="text-sm mt-5">
              Email us below to any question related to our event
            </span>
          </div>
          <div className="flex flex-col gap-10 mt-8 w-full">
            <input
              name="teamName"
              type="text"
              autoComplete="off"
              placeholder="Team's Name"
              className="w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md py-2 px-4"
            />{" "}
            <input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
              className="w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md py-2 px-4"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full bg-transparent border border-white bg-white bg-opacity-5 rounded-md py-2 px-4"
            />
          </div>
          <button
            className="md:w-44 w-28 text-sm md:text-base bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-md md:mt-10 mt-8"
            type="submit"
          >
            Submit
          </button>

          <div className="flex flex-col gap-3 md:hidden justify-center items-center mt-16">
            {" "}
            <span className="text-primary text-xs">Share on</span>
            <div className="flex items-center gap-4 w-max">
              <img src={IG} className="w-5 h-5" />
              <img src={X} className="w-4 h-4" />
              <img src={FB} className="w-4 h-4" />
              <img src={LINKEDIN} className="w-5 h-5" />
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
