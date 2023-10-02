import React from "react";
import Title from "../Title";
import ProjectCard from "./ProjectCard";
import { commercialProjects, practiceProjects } from "@/data";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center w-full h-screen border-2 border-red-500"
    >
      <Title title="Projects" />
      <div>
        <h2>Comercial Projects</h2>
        <ProjectCard />
      </div>

      <div>
        <h2>Practice Projects</h2>
      </div>
    </div>
  );
};

export default Projects;
