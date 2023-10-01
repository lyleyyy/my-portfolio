import React from "react";
import Title from "../Title";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Title title="Experience"></Title>
      <div>
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
