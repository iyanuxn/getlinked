import React, { useState } from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import Prizes from "../components/Prizes";
import Partners from "../components/Partners";
import Privacy from "../components/Privacy";
import Footer from "../components/Footer";
import IDEA from "../assets/bigIdea.png";
import GUIDE from "../assets/guidelines.svg";
import JUDGE from "../assets/judge.svg";
import FAQs from "../assets/FAQs.svg";
import { motion, AnimatePresence } from "framer-motion";

const judge = [
  {
    title: "Innovation and Creativity: ",
    text: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
  },
  {
    title: "Functionality: ",
    text: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
  },
  {
    title: "Impact and Relevance: ",
    text: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
  },
  {
    title: "Technical Complexity: ",
    text: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
  },
  {
    title: "Adherence to Hackathon Rules: ",
    text: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
  },
];

const faqs = [
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "The registration deadline for the hackathon is [date].",
  },
  {
    question: "What happens if I need help during the hackathon?",
    answer:
      "You can find team members through our official Discord channel or during the networking session on the first day of the event.",
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer:
      "You can find team members through our official Discord channel or during the networking session on the first day of the event.",
  },
  {
    question: "Can I join a team or do I have to come with one?",
    answer:
      "You can find team members through our official Discord channel or during the networking session on the first day of the event.",
  },
  {
    question: "What happens after the hackathon ends",
    answer:
      "You can find team members through our official Discord channel or during the networking session on the first day of the event.",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer:
      "You can find team members through our official Discord channel or during the networking session on the first day of the event.",
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-dark webBg font-regular"
    >
      <Header />
      <Section
        id="overview"
        imageSrc={IDEA}
        title="Introduction to getlinked"
        titlesub="tech Hackathon 1.0"
        direction={"md:flex-row flex-col"}
        text="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
      />
      <Section
        id=""
        imageSrc={GUIDE}
        title="Rules and"
        titlesub="Guidelines"
        direction={"md:flex-row-reverse flex-col"}
        text="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
      />
      <Section
        imageSrc={JUDGE}
        title="Judging Criteria"
        titlesub="Key attributes"
        direction={"md:flex-row flex-col"}
        link="/comingsoon"
        text={
          <div className="flex flex-col gap-6 md:mt-7">
            {judge.map((item) => (
              <span key={item.title}>
                <span className="font-bold text-primary md:text-[1.2em]">
                  {item.title}
                </span>
                <span className="font-regular font-normal leading-7">
                  {item.text}
                </span>
              </span>
            ))}
          </div>
        }
        buttonText={"Read More"}
      />
      <Section
        id="faqs"
        imageSrc={FAQs}
        title="Frequently Asked"
        titlesub="Questions"
        direction={"md:flex-row-reverse flex-col-reverse"}
        text={
          <div className="flex flex-col gap-6 md:mt-4">
            <span className="font-semibold text-xs md:text-base leading-7 md:leading-normal">
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </span>
            {faqs.map((faq, index) => (
              <div className="md:mt-6" key={index}>
                <div
                  className="cursor-pointer"
                  onClick={() => handleAccordionClick(index)}
                >
                  <motion.div
                    layout
                    className={`font-medium text-white border-b border-primary pb-2 transition-all duration-300 ease-in-out ${
                      activeIndex === index ? "h-fit" : "h-10"
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="text-xs text-left md:text-base">
                        {" "}
                        {faq.question}
                      </span>{" "}
                      <span className="text-lg md:text-2xl text-primary">
                        +
                      </span>
                    </div>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="font-regular font-normal md:leading-7 md:mt-5 mt-2 md:text-base text-xs text-left"
                        >
                          <span>{faq.answer}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        }
      />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </motion.div>
  );
};

export default App;
