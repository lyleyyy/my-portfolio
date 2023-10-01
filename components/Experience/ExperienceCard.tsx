import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
  logo: string;
  company: string;
  position: string;
  duration: string;
}

const ExperienceCard = ({
  logo,
  company,
  position,
  duration,
}: ExperienceCardProps) => {
  return (
    <div className="flex flex-row justify-between items-center shadow-xl rounded-xl w-[350px] h-[150px] p-5">
      <div className="flex rounded-lg">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>
      <div className="flex w-6/12 h-full">
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-lg font-semibold">{company}</h3>
          <p className="text-lg">{position}</p>
          <p className="text-sm text-gray-600">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
