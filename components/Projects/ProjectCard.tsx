import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { RxExternalLink } from "react-icons/Rx";
import SkillItem from "../About/SkillItem";

interface ProjectCardProps {
  title: string;
  img: string;
  techStacks: string[];
  github?: string;
  link?: string;
}

const ProjectCard = ({
  title,
  img,
  techStacks,
  github,
  link,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col justify-start items-center  w-[400px] h-[400px] rounded-lg shadow-xl">
      <h2 className="text-xl font-medium">{title}</h2>
      <div className="relative w-[300px] h-[300px] rounded-lg">
        <Image
          src={img}
          alt={title}
          fill
          object-fit="container"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-row justify-start gap-2 w-[300px] my-3">
        {techStacks.map((tech) => (
          <SkillItem key={tech} color="teal">
            {tech}
          </SkillItem>
        ))}
      </div>
      <div className="flex flex-row justify-start w-[300px] mb-2">
        {github && (
          <Link href={github} target="_blank" className="hover:text-blue-500">
            <DiGithubBadge size={30} />
          </Link>
        )}
        {link && (
          <Link href={link} target="_blank" className="hover:text-blue-500">
            <RxExternalLink size={30} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
