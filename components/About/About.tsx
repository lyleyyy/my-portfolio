import React from "react";
import Summary from "./Summary";
import Skills from "./Skills";

const About = () => {
  return (
    <div
      className="flex flex-row justify-center items-start w-full h-screen
     border-2 border-red-600 py-24"
    >
      <Summary />
      <Skills />
    </div>
  );
};

export default About;
