import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5 w-full h-full">
      <p className="flex flex-row justify-center items-center">
        <AiOutlineCopyrightCircle size={18} />
        <p>2023 Lyle Yang. All Rights Reserved.</p>
      </p>
      <p>Made with ❤️ by Lyle Yang.</p>
    </div>
  );
};

export default Footer;
