import React from "react";
import Title from "../Title";
import { commercialProjects, practiceProjects } from "@/data";
import ProjectPart from "./ProjectPart";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center w-full h-full p-20"
    >
      <Title title="Projects" />
      <div className="flex flex-col justify-center items-start gap-y-5">
        <ProjectPart
          partTitle="Commercial Projects"
          projects={commercialProjects}
        />
        <ProjectPart
          partTitle="Practice Projects"
          projects={practiceProjects}
        />
      </div>
    </div>
  );
};

export default Projects;
