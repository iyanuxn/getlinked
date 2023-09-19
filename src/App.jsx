import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import IDEA from "./assets/bigIdea.png";
import GUIDE from "./assets/guidelines.svg";
import JUDGE from "./assets/judge.svg";

const judge = [
  {
    title: "Test",
    text: "Sum",
  },
];

const App = () => {
  return (
    <div className="bg-dark webBg">
      <Navbar />
      <Header />
      <Section
        imageSrc={IDEA}
        title="Introduction to getlinked"
        titlesub="tech Hackathon 1.0"
        direction={"md:flex-row"}
        text="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
      />
      <Section
        imageSrc={GUIDE}
        title="Rules and"
        titlesub="Guidelines"
        direction={"md:flex-row-reverse"}
        text="Our tech hackathon is a melting pot of 
        visionaries, and its purpose is as clear as day:
        to shape the future. Whether you're a coding
        genius, a design maverick, or a concept 
        wizard, you'll have the chance to transform 
        your ideas into reality. Solving real-world 
        problems, pushing the boundaries of 
        technology, and creating solutions that can 
        change the world, that's what we're all about!"
      />
      <Section
        imageSrc={JUDGE}
        title="Judging Criteria"
        titlesub="Key attributes"
        direction={"md:flex-row"}
        text={
          <div className="flex flex-col gap-4">
            {judge.map((item) => (
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">{item.title}</span>
                <span className="text-sm font-regular font-normal leading-7">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default App;
