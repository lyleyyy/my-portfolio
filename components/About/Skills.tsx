import React from "react";
import Title from "../Title";
import SkillCard from "./SkillCard";
import {
  language,
  frontend,
  backend,
  database,
  framework,
  tools,
} from "@/data";

const Skills = () => {
  return (
    <div className="flex flex-col w-6/12 justify-center items-start pl-28 max-md:w-full max-md:pl-10">
      <Title title="Skills" />
      <div className="flex flex-col gap-y-3">
        <SkillCard title="Languages" skills={language} color="green" />
        <SkillCard title="Front-End" skills={frontend} color="yellow" />
        <SkillCard title="Back-End" skills={backend} color="yellow" />
        <SkillCard title="Databases" skills={database} color="blue" />
        <SkillCard title="Frameworks" skills={framework} color="red" />
        <SkillCard title="Tools" skills={tools} color="orange" />
      </div>
    </div>
  );
};

export default Skills;
