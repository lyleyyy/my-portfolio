import Image from "next/image";
import React from "react";

const IntroImage = () => {
  return (
    <div className="rounded m-5">
      <Image
        src="/images/coding.gif"
        // src="/images/intro_image.avif"
        alt="intro_image"
        width={600}
        height={600}
        className="rounded"
      ></Image>
    </div>
  );
};

export default IntroImage;
