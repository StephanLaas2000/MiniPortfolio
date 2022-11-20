import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-18 md:mb-0 items-center text-center">
          <h1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium hover:text-white-300 transition-colo duration-200"
            style={{ color: "#EC5800", fontSize: 45 }}
          >
            Hi, I'm Stephan.
            <br className="hidden lg:inline-block" />
            An aspiring software developer.
          </h1>
          <br />
          <p className="mb-8 leading-relaxed">
            I'm a Third year student studying at Varsity College. I have worked
            with Java, C#, and SQL, created applications in Android studio ,
            Visual Studio Code and Visual Studio 2022/2019. I built full stack
            application with Java and C#, including deployed apps to Azure SQL
            Database.
          </p>
          <p className="mb-8 leading-relaxed">
            I want to become a software developer as I've worked hard to gain
            skills that are relevant to this industry and this field of work
            brings me personal satisfaction. I've become intimately familiar
            with several coding languages and worked on many coding projects.
            I'm excited to begin a career as a software developer and learn more
            about this line of work from industry professionals. I'm currently
            looking for a graduate programme with the objective of utilizing my
            knowledge and skills in a real-world environment.
          </p>
          <p className="mb-8 leading-relaxed">
            I'm impressed by SovTech's commitment to the growth and development
            of its employees, I've also found that you have invested a lot of
            your time and effort into creating outstanding applications, these
            been the "RENTAL APP FOR AGRICULTURAL EQUIPMENT" , " PROJECT
            MANAGEMENT SOFTWARE" and much more ! Thus I would love to earn a
            place at SovTech, knowing I would become a valuable, enthusiastic
            part of your team for the 2023 Graduate programme.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./man-developing-website-on-desk.svg"
          />
        </div>
      </div>
    </section>
  );
}
