import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import SkillItem from "./SkillItem";

interface SkillCardProps {
  title: string;
  skills: string[];
  color: string;
}

const SkillCard = ({ title, skills, color }: SkillCardProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-center mr-1">
        <BiSolidRightArrow
          size={20}
          className="text-purple-800 translate-y-1/4"
        />
      </div>

      <div className="w-8/12">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex gap-2 mb-2 flex-wrap">
          {skills.map((skill) => (
            <SkillItem key={skill} children={skill} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
