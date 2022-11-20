import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { Proficient } from "../data";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "./HeaderStyles";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Tech Stack
          </h1>
        </div>
        <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center">
          {Proficient.map((x, index) => (
            <div
              className="flex flex-col items-center"
              tabIndex="0"
              role="img"
              aria-label={x.skill}
              key={index}
            >
              <img
                src={x.logo}
                alt=""
                loading="lazy"
                className="w-16 mb-1"
                width="64px"
                height="64px"
              />
              {x.skill}
            </div>
          ))}
        </div>
        <br />
        <br />
        <div className="flex items-stretch">
          <SocialIcons href="https://github.com/StephanLaas2000">
            <AiFillGithub size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/stephan-laas-579229247/">
            <AiFillLinkedin size="2rem" />
          </SocialIcons>
        </div>
      </div>
    </section>
  );
}
