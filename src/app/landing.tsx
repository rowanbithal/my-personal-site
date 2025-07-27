"use client";
import Image from "next/image";
import image1 from "./assets/image1.jpg";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import MinecraftScene from "@/app/MinecraftScene"; // adjust path as needed

import React from "react";
import Background from "./background";

const projects = [
  {
    title: "NoteSpace",
    description: "A music room booking app built for universities",
    tech: [
      "Spring Boot",
      "React",
      "Java",
      "PostgreSQL",
      "Liquibase",
      "Docker",
      "GitHub Actions",
      "Ubuntu",
    ],
    link: "https://github.com/uob-team-project/team14",
  },
  {
    title: "Firewall Configuration Manager",
    description:
      "A server program to manage firewall rules and handle client requests",
    tech: ["C"],
    link: "",
  },
  {
    title: "House Price Prediction Model",
    description: "A machine learning model to predict house prices",
    tech: ["Python", "Machine Learning", "Pandas"],
    link: "",
  },
  {
    title: "Record Shop App",
    description: "A full-stack web application for a record shop",
    tech: ["Java", "Postgres", "JDBC", "JavaFX"],
    link: "",
  },
];

function Landing() {
  return (
    <section
      id="home-container"
      className="homeContainer flex-1 transition-all duration-300 text-center h-screen"
    >
      <section className="MainSection pl-3 pr-3 lg:pl-40 lg:pr-40 h-screen justify-center flex flex-col">
        <Background />
        <div className="text-left bg-third p-5 rounded-2xl shadow-sm border-secondary border-1 transition-all duration-300 hover:scale-[1.005] hover:shadow-lg">
          <div className="MainContainer z-[0] flex flex-row items-center">
            <div className="HomeLeftDiv flex flex-col text-left md:mr-10 md:w-[100%]">
              <div className="pt-[10px]">
                <h1 className="m-0 text-4xl text-title font-extrabold md:text-left pb-4">
                  Hey, I&#39;m Rowan!
                </h1>
              </div>
              <div id="HomeTextDiv" className="pb-4">
                <p className="text-font-semibold text-lg w-[100%]">
                  Hi, I&#39;m a 2nd Year Computer Science Student and I have
                  built this website to expand my skills in front-end
                  development.
                </p>
              </div>
              <div id="Icons" className="flex gap-2.5 justify-start">
                <a
                  className="group IconLink text-icons stroke-icons hover:text-primary transition duration-300"
                  href="https://www.linkedin.com/in/rowanbithal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-linkedin"
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                  <div className="bottom-[-4px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
                <a
                  className="group IconLink text-[#2d2e32] hover:text-primary transition duration-300 stroke-icons"
                  href="https://github.com/rowanbithal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* GitHub icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={29}
                    height={29}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                  <div className="bottom-[-4px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
                <a
                  href="/cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group IconLink hover:text-primary transition duration-300 text-icons"
                  aria-label="CV"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M280-280h280v-80H280zm0-160h400v-80H280zm0-160h400v-80H280zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120zm0-80h560v-560H200zm0-560v560z" />
                  </svg>
                  <div className="bottom-[-4px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
                <a
                  href="mailto:rowanb109@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-bold hover:text-primary transition duration-300 text-icons"
                  aria-label="Email"
                >
                  rowanb109@gmail.com
                  <div className="bottom-[-4px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            </div>

            <div
              id="HomeImageDiv"
              className="hidden m-0 mt-[10px] mb-[10px] w-[65%] md:flex justify-center items-center"
            >
              <Image
                src={image1}
                alt="Main"
                className="animate-liquid-border hidden md:block w-70 shadow-xl/20 rounded-[10%]"
              />
            </div>
          </div>
          <Separator className="bg-secondary w-[30%] mb-12 mt-12" />
          <div className="aboutContainer w-[90%]">
            <div className="aboutMeContainer flex md:flex-row">
              <div>
                <div>
                  <h2 className="m-0 text-4xl font-bold text-left text-title pb-4">
                    About Me
                  </h2>
                </div>
                <div>
                  <h3 className="m-0 text-2xl font-bold text-left text-primary pb-4">
                    I&#39;m a Computer Science student from England. 📍
                  </h3>
                </div>
                <div>
                  <p className="text-font-semibold text-lg text-left">
                    My name is Rowan Bithal and I am from London, England.
                    I&#39;m currently studying Computer Science at the
                    University of Birmingham. I have achieved a First in my 1st
                    and 2nd year of university and I am moving onto my 3rd year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`infoSection pl-3 pr-3 lg:pr-40 lg:pl-40 bg-background min-h-screen justify-center flex flex-col`}
        style={{
          boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.04)",
        }}
      >
        <div className="ProjectsContainer w-fit pb-10">
          <h2 className="m-0 text-4xl font-bold text-left pb-6 pt-6 text-title">
            Projects
          </h2>
          <div className="flex flex-wrap gap-6 justify-items-center">
            {projects.map((project, index) => (
              <a key={index} href={project.link}>
                <div
                  key={index}
                  className="text-left bg-third rounded-2xl w-90 md:w-90 h-55 shadow-sm border-secondary border-1 hover:bg-dark transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                >
                  <div className="cardContent p-6">
                    <h3 className="font-semibold text-2xl text-primary pb-2">
                      {project.title}
                    </h3>
                    <p className="font-semibold text-lg pb-2">
                      {project.description}
                    </p>
                    <div>{project.tech.join(" · ")}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="toolsContainer h-auto pt-12 flex flex-col ">
            <div>
              <h2 className="m-0 text-4xl font-bold text-left pb-2 text-title">
                Tools I&#39;ve Worked With
              </h2>
              <div className="pb-2">
                <h3 className="m-0 text-2xl font-semibold text-left text-primary">
                  Languages
                </h3>
                <div className="flex flex-wrap ml-2">
                  <Badge variant="secondary" className="m-1 text-title">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="m-1 text-title">
                    C
                  </Badge>
                  <Badge variant="secondary" className="m-1 text-title">
                    Java
                  </Badge>
                  <Badge variant="secondary" className="m-1 text-title">
                    JavaScript
                  </Badge>
                </div>
              </div>
              <div className="pb-2">
                <h3 className="m-0 text-2xl font-semibold text-left text-primary">
                  Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap ml-2">
                  <Badge variant="secondary" className="m-1 text-title">
                    React
                  </Badge>
                  <Badge variant="secondary" className="m-1 text-title">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="m-1 text-title">
                    Tailwindcss
                  </Badge>
                  <Badge variant="secondary" className="m-1 text-title">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="m-1 text-title">
                    Pandas
                  </Badge>
                  <Badge variant="secondary" className="m-1 text-title">
                    Shadcn/ui
                  </Badge>
                </div>
              </div>
            </div>
            <div className="pb-2">
              <h3 className="m-0 text-2xl font-semibold text-left text-primary">
                Other
              </h3>
              <div className="flex flex-wrap ml-2">
                <Badge variant="secondary" className="m-1 text-title">
                  Git
                </Badge>
                <Badge variant="secondary" className="m-1 text-title">
                  Docker
                </Badge>
                <Badge variant="secondary" className="m-1 text-title">
                  PostgreSQL
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contactSection bg-background h-auto justify-center items-center flex flex-col">
        <Separator className="bg-secondary ml-auto mr-auto mt-10 mb-5" />
        <div className="contactContent font-semibold w-[65%] flex flex-row items-center mt-5 mb-10">
          <div className="contactContainer gap-4 flex flex-row items-center">
            <a
              className="group hover:text-primary transition duration-300"
              href="https://github.com/rowanbithal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <div className="bottom-[-4px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              className="group hover:text-primary transition duration-300"
              href="https://www.linkedin.com/in/rowanbithal"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <div className="bottom-[-4px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              className="group hover:text-primary transition duration-300"
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
              <div className="bottom-[-4px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              className="group hover:text-primary transition duration-300"
              href="mailto:rowanb109@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bottom-[-4px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
          <div className="ml-auto">
            <a>© 2025</a>
          </div>
        </div>
      </section>
      <div className="p-20 h-screen w-full hidden overflow-hidden">
        <div className="w-full h-full bg-slate-800">
          <MinecraftScene />
        </div>
      </div>
    </section>
  );
}

export default Landing;
