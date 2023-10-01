"use client";
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Link from "next/link";

const IntroDescription = () => {
  return (
    <div className="m-5">
      <p className="text-xl mb-3">Hi! I am</p>
      <h1 className="text-5xl mb-3 font-semibold">Lyle Yang</h1>
      <p className="text-xl mb-3 font-medium">
        I am a self-taught programmer with a strong enthusiasm for programming.
      </p>
      <div className="flex flex-row gap-x-6">
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="purple"
          variant="solid"
        >
          <Link href="#About">About</Link>
        </Button>

        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="purple"
          variant="solid"
        >
          <Link href="#Experience">Experience</Link>
        </Button>

        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="purple"
          variant="solid"
        >
          <Link href="#Projects">Projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default IntroDescription;
