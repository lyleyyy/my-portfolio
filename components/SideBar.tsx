"use client";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const SideBar = () => {
  return (
    <div className="fixed right-0 h-full">
      <div className="flex flex-col justify-center items-center m-5 h-full gap-y-2">
        <Link
          href="https://www.linkedin.com/in/weizhi-yang-b694211b7/"
          className="hover:text-blue-500"
        >
          <BsLinkedin size={35} />
        </Link>
        <Link
          href="https://github.com/lyleyyy?tab=repositories"
          className="hover:text-blue-500"
        >
          <BsGithub size={35} />
        </Link>
        <Link href="mailto:lyletwro@gmail.com" className="hover:text-blue-500">
          <AiOutlineMail size={35} />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
