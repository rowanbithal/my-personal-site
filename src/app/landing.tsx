"use client";
import Image from "next/image";
import image1 from "./assets/image1.jpg";
import AboutImage from "./assets/image2.jpg";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState, useRef, useEffect } from "react";
import Background from "./background";

const SECTION_HEIGHT = 170;
const SNAP_POINTS = [0, -170];
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
      "GHCR",
      "Ubuntu",
    ],
    link: "https://github.com/uob-team-project/team14",
  },
  {
    title: "Firewall Configuration Manager",
    description:
      "A server program to manage firewall rules and handle client requests, ensuring robust and concurrent operations",
    tech: ["C"],
    link: "",
  },
  {
    title: "House Price Prediction Model",
    description:
      "A machine learning model to predict house prices using Random Forest Regression, optimizing model performance through cross-validation",
    tech: ["Python", "Machine Learning", "Pandas"],
    link: "",
  },
  {
    title: "Record Shop App",
    description:
      "A full-stack web application for a record shop, featuring a RESTful API, PostgreSQL database, and a JavaFX frontend",
    tech: ["Java", "Postgres", "JDBC", "JavaFX"],
    link: "",
  },
];

function Landing() {
  const [y, setY] = useState(0);
  const yRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const [shouldSnap, setShouldSnap] = useState(false);

  useEffect(() => {
    const updateHeight = () => setWindowHeight(window.innerHeight);
    updateHeight(); // Set initially
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY;

      // Clear existing timeout to debounce scroll end
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      const newY = Math.max(Math.min(yRef.current - delta, 0), -SECTION_HEIGHT);
      setY(() => {
        yRef.current = newY;
        return newY;
      });

      if (yRef.current > -SECTION_HEIGHT) {
        if (newY === -SECTION_HEIGHT) {
          setTimeout(() => {
            container.removeEventListener("wheel", handleWheel);
          }, 800);
        }
        setY(() => {
          yRef.current = newY;
          return newY;
        });
      }

      // After 150ms of no wheel movement, snap to nearest point
      scrollTimeout.current = setTimeout(() => {
        setY((prev) => {
          // Snap to nearest defined point (0 or -SECTION_HEIGHT)
          const closest = SNAP_POINTS.reduce((a, b) =>
            Math.abs(prev - a) < Math.abs(prev - b) ? a : b
          );
          return closest;
        });
      }, 150);
    };
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (y <= -SECTION_HEIGHT) {
      const timeout = setTimeout(() => {
        setShouldSnap(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [y]);

  return (
    <section
      id="home-container"
      ref={containerRef}
      className={`homeContainer text-center snap-y h-screen overflow-y-scroll scroll-smooth ${
        shouldSnap ? "snap-mandatory" : "snap-none"
      }`}
    >
      <Background />
      <section
        style={{
          transform: `translateY(${y * (windowHeight / 800)}px)`,
        }}
        className="MainSection snap-start h-screen items-center justify-center flex transition-transform duration-175 ease-linear"
      >
        <div className="MainContainer flex flex-col md:flex-row items-center w-[100%] md:w-[65%]">
          <div className="HomeLeftDiv w-[90%] flex flex-col md:text-left md:pr-4">
            <div className="pt-[10px]">
              <h1 className="m-0 text-4xl font-extrabold md:text-left">
                Software Engineer and 2nd Year Computer Science Student
              </h1>
            </div>
            <div id="HomeTextDiv" className="py-[10px]">
              <p className="text-font-semibold text-lg">
                Hi, I&#39;m Rowan and I am studying for my degree in Computer
                Science. I have built this website to expand my skills in
                front-end development.
              </p>
            </div>
            <div
              id="Icons"
              className="py-[10px] flex gap-2.5 justify-center md:justify-start"
            >
              <a
                className="group IconLink text-[#2d2e32] hover:text-[#3a8cff] transition duration-300"
                href="https://www.linkedin.com/in/rowanbithal"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* LinkedIn icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-linkedin"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
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
                <div className="bottom-[-4px] h-[2px] w-0 bg-[#3a8cff] transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                className="group IconLink text-[#2d2e32] hover:text-[#3a8cff] transition duration-300"
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
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
                <div className="bottom-[-4px] h-[2px] w-0 bg-[#3a8cff] transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="group IconLink text-[#2d2e32] hover:text-[#3a8cff] transition duration-300"
                aria-label="CV"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 -960 960 960"
                  strokeWidth={2}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M280-280h280v-80H280zm0-160h400v-80H280zm0-160h400v-80H280zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120zm0-80h560v-560H200zm0-560v560z"
                    fill="currentColor"
                  />
                </svg>
                <div className="bottom-[-4px] h-[2px] w-0 bg-[#3a8cff] transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="mailto:rowanb109@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-bold text-[#2d2e32]  hover:text-[#3a8cff] transition duration-300"
                aria-label="Email"
              >
                  rowanb109@gmail.com
                <div className="bottom-[-4px] h-[2px] w-0 bg-[#3a8cff] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          <div
            id="HomeImageDiv"
            className="flex justify-center items-center m-0 mt-[10px] mb-[10px] w-[65%]"
          >
            <Image
              src={image1}
              alt="Main"
              className="animate-liquid-border hidden md:block w-[70%] md:w-[90%] shadow-xl/20 rounded-[10%]"
            />
          </div>
        </div>
      </section>
      <Separator
        style={{
          transform: `translateY(${y * (windowHeight / 370)}px)`,
        }}
        className="bg-gray-300 max-w-[60%] ml-auto mr-auto md:transition-transform duration-175 ease-linear mb-12"
      />
      <section
        style={{
          transform: `translateY(${y * (windowHeight / 370)}px)`,
        }}
        className="aboutSection transition-transform duration-175 ease-linear h-auto justify-center items-center flex"
      >
        <div className="aboutContainer items-center w-[90%] md:w-[65%]">
          <div className="aboutMeContainer flex flex-col md:flex-row justify-center">
            <div className="flex justify-center items-center m-0 mt-[10px] mb-[10px]">
              <Image
                src={AboutImage}
                alt="Main"
                className="w-[100%] hidden md:block shadow-xl/20 rounded-[10%]"
              />
            </div>

            <div className="md:pl-4">
              <div>
                <h2 className="m-0 text-4xl font-bold md:text-left text-[#3a8cff]">
                  About Me
                </h2>
              </div>
              <div>
                <h3 className="m-0 text-2xl font-bold md:text-left">
                  I&#39;m a Computer Science Student from England. 📍
                </h3>
              </div>
              <div>
                <p className="text-font-semibold text-lg md:text-left">
                  My name is Rowan Bithal and I am from London, England. I&#39;m
                  currently studying Computer Science at the University of
                  Birmingham.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`infoSection bg-white min-h-screen snap-start justify-center items-center flex flex-col`}
        style={{
          marginTop: `${y * (windowHeight / 550)}px`,
          boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.04)",
        }}
      >
        <div className="ProjectsContainer w-fit pb-10">
          <h2 className="m-0 text-4xl font-bold md:text-left pb-6 pt-6 text-[#3a8cff]">
            Projects
          </h2>
          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {projects.map((project, index) => (
              <a key={index} href={project.link}>
                <Card
                  key={index}
                  className="w-90 md:w-90 h-55 shadow-sm border-zinc-100 hover:bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-zinc-900/20"
                >
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    Built and deployed using:
                    <br />
                    {project.tech.join(" · ")}
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
          <div className="toolsContainer h-auto pt-10 flex flex-col ">
            <div>
              <h2 className="m-0 text-4xl font-bold md:text-left pb-2 text-[#3a8cff]">
                Tools I&#39;ve Worked With
              </h2>
              <div className="ml-1.5 pb-2">
                <h3 className="m-0 text-2xl font-semibold md:text-left">
                  Languages
                </h3>
                <div className="md:flex flex-wrap">
                  <Badge className="m-1 bg-gray-700">Python</Badge>
                  <Badge className="m-1 bg-gray-700">C</Badge>
                  <Badge className="m-1 bg-gray-700">Java</Badge>
                  <Badge className="m-1 bg-gray-700">JavaScript</Badge>
                </div>
              </div>
              <div className="ml-1.5 pb-2">
                <h3 className="m-0 text-2xl font-semibold md:text-left">
                  Frameworks & Libraries
                </h3>
                <div className="md:flex flex-wrap">
                  <Badge className="m-1 bg-gray-700">React</Badge>
                  <Badge className="m-1 bg-gray-700">TypeScript</Badge>
                  <Badge className="m-1 bg-gray-700">Tailwindcss</Badge>
                  <Badge className="m-1 bg-gray-700">Next.js</Badge>
                  <Badge className="m-1 bg-gray-700">Pandas</Badge>
                  <Badge className="m-1 bg-gray-700">Shadcn/ui</Badge>
                </div>
              </div>
            </div>
            <div className="ml-1.5 pb-2">
              <h3 className="m-0 text-2xl font-semibold md:text-left">Other</h3>
              <div className="md:flex flex-wrap">
                <Badge className="m-1 bg-gray-700">Git</Badge>
                <Badge className="m-1 bg-gray-700">Docker</Badge>
                <Badge className="m-1 bg-gray-700">PostgreSQL</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contactSection bg-white h-auto justify-center items-center flex flex-col">
        <Separator className="bg-gray-300 ml-auto mr-auto mt-10 mb-5" />
        <div className="contactContent snap-start font-semibold w-[65%] flex flex-row items-center mt-5 mb-10">
          <div className="contactContainer gap-4 flex flex-row items-center">
            <a
              className="group hover:text-[#3a8cff] transition duration-300"
              href="https://github.com/rowanbithal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <div className="bottom-[-4px] h-[2px] w-0 bg-[#3a8cff] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              className="group hover:text-[#3a8cff] transition duration-300"
              href="https://www.linkedin.com/in/rowanbithal"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <div className="bottom-[-4px] h-[2px] w-0 bg-[#3a8cff] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              className="group hover:text-[#3a8cff] transition duration-300"
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
              <div className="bottom-[-4px] h-[2px] w-0 bg-[#3a8cff] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              className="group hover:text-[#3a8cff] transition duration-300"
              href="mailto:rowanb109@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bottom-[-4px] h-[2px] w-0 bg-[#3a8cff] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
          <div className="ml-auto">
            <a>© 2025</a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Landing;
