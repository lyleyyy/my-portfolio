import React from "react";
import Summary from "./Summary";
import Skills from "./Skills";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-row justify-center items-start w-full h-screen py-24 max-md:flex-col max-md:h-full"
    >
      <Summary />
      <Skills />
    </div>
  );
};

export default About;
