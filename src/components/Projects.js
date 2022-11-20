import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { AiFillGithub } from "react-icons/ai";
import { SocialIcons } from "./ProjectsStyles";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a key={project.title} className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <div
                  className="px-8 py-10 relative w-full border-2"
                  style={{ borderColor: "#EC5800", borderRadius: 10 }}
                >
                  <h2
                    className="title-font text-lg font-medium text-white mb-3"
                    style={{ fontSize: 30 }}
                  >
                    {project.title}
                  </h2>
                  <h1
                    className="tracking-widest text-sm title-font font-medium text-green-400 mb-1"
                    style={{ color: "#EC5800" }}
                  >
                    {project.subtitle}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <a className="inline-block">
                    <SocialIcons href={project.link}>
                      <AiFillGithub size="2rem" />
                    </SocialIcons>
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
