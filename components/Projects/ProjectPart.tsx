import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

interface ProjectPartProps {
  partTitle: string;
  projects: Project[];
}

const ProjectPart = ({ partTitle, projects }: ProjectPartProps) => {
  return (
    <div className="flex flex-col max-md:items-center">
      <h2 className="text-xl font-semibold mb-2">{partTitle}</h2>
      <div className="flex flex-row justify-center items-center gap-8 my-2 max-md:flex-col">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            img={project.img}
            techStacks={project.techStacks}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPart;
