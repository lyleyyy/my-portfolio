"use client";
import React, { useRef } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
// import Link from "next/link";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { GoArrowRight } from "react-icons/go";

const IntroDescription = () => {
  return (
    <div className="m-5">
      <p className="text-xl mb-3">Hi! I am</p>
      <h1 className="text-5xl mb-3 font-semibold">Lyle Yang</h1>
      <p className="text-xl font-medium">
        I am a web developer with a strong enthusiasm for programming.
      </p>
      <p className="text-xl mb-3 font-medium">
        I delivery SOLID code with{" "}
        <span className="text-orange-500">
          <Typewriter
            words={["Readability.", "Reusability.", "Maintainability."]}
            typeSpeed={50}
            deleteSpeed={50}
            loop={false}
            cursor
            cursorStyle="_"
            cursorBlinking
          ></Typewriter>
        </span>
      </p>

      <div className="flex flex-row gap-x-6">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="flex flex-row items-center"
        >
          <Button
            colorScheme="purple"
            variant="solid"
            className="flex flex-row gap-x-2"
          >
            About
            <GoArrowRight size={20} />
          </Button>
        </Link>

        <Link
          to="experience"
          spy={true}
          smooth={true}
          duration={500}
          className="flex flex-row items-center"
        >
          <Button
            colorScheme="purple"
            variant="solid"
            className="flex flex-row gap-x-2"
          >
            Experience
            <GoArrowRight size={20} />
          </Button>
        </Link>

        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="flex flex-row items-center"
        >
          <Button
            colorScheme="purple"
            variant="solid"
            className="flex flex-row gap-x-2"
          >
            Projects
            <GoArrowRight size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default IntroDescription;
