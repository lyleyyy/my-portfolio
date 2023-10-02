import React from "react";
import Title from "../Title";
import ExperienceCard from "./ExperienceCard";
import { experiences, experienceIT } from "@/data";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-center w-full h-screen border-2 border-red-500"
    >
      <Title title="Experience"></Title>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">Web Development</h2>
        <div className="flex flex-row gap-x-4 mb-20">
          {experienceIT.map((experience) => (
            <ExperienceCard
              key={experience.company}
              logo={experience.logo}
              company={experience.company}
              position={experience.position}
              duration={experience.duration}
              location={experience.location}
            />
          ))}
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">
            Accounting, Auditing & Finance
          </h2>
          <div className="flex flex-row gap-x-4">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.company}
                logo={experience.logo}
                company={experience.company}
                position={experience.position}
                duration={experience.duration}
                location={experience.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
