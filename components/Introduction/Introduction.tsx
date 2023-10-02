import React from "react";
import IntroDescription from "./IntroDescription";
import IntroImage from "./IntroImage";

const Introduction = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full h-screen max-md:flex-col">
      <IntroDescription />
      <IntroImage />
    </div>
  );
};

export default Introduction;
