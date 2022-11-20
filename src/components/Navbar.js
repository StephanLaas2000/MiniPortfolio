import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "./HeaderStyles";

export default function Navbar() {
  return (
    <header
      className=" md:sticky top-0 z-10 "
      style={{ backgroundColor: "#EC5800" }}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a style={{ fontSize: 30 }}>SL |</a>
        </a>

        <SocialIcons href="https://github.com/StephanLaas2000">
          <AiFillGithub size="2rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/stephan-laas-579229247/">
          <AiFillLinkedin size="2rem" />
        </SocialIcons>
      </div>
    </header>
  );
}
