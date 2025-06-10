"use client";
import Image from "next/image";
import image1 from "./assets/image1.jpg";
import AboutImage from "./assets/image2.jpg";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import React, { useState, useRef, useEffect } from "react";

const SECTION_HEIGHT = 120;
const SNAP_POINTS = [0, -120];
type Bubble = {
  x: number;
  y: number;
  size: number;
};

function Landing() {
  const [y, setY] = useState(0);
  const yRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [pageHeight, setPageHeight] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>(0);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.body.scrollHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 20 + Math.random() * 40,
    }));
    setBubbles(newBubbles);
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

      if (yRef.current > -SECTION_HEIGHT) {
        const newY = Math.max(
          Math.min(yRef.current - delta, 0),
          -SECTION_HEIGHT
        );

        if (newY === -SECTION_HEIGHT) {
          setTimeout(() => {
            container.removeEventListener("wheel", handleWheel);
          }, 700);
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
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const dx = mouse.x - position.current.x - 18;
      const dy = mouse.y - position.current.y - 15;

      // Velocity magnitude based on distance
      const speed = 0.2; // 10% of the distance per frame
      const vx = dx * speed;
      const vy = dy * speed;

      position.current.x += vx;
      position.current.y += vy;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current!);
    };
  }, [mouse]);

  return (
    <section
      id="home-container"
      ref={containerRef}
      className="homeContainer w-full h-auto mx-auto scroll-smooth"
    >
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 backdrop-blur-sm opacity-60 border-solid border-gray-500 border-2 rounded-full pointer-events-none z-50"
        style={{ transform: "translate(0px, 0px)" }}
      />
      <div
        className=" top-0 left-0 w-[100%] min-h-screen overflow-hidden absolute"
        style={{ height: `${pageHeight}px` }}
      >
        {bubbles.map((b, i) => {
          const dx = mouse.x - b.x;
          const dy = mouse.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 120; // distance of influence

          let offsetX = 0;
          let offsetY = 0;

          if (dist < radius) {
            const pushStrength = (radius - dist) / radius; // normalized [0, 1]
            offsetX = -dx * 0.5 * pushStrength;
            offsetY = -dy * 0.5 * pushStrength;
          }

          return (
            <div
              key={i}
              className="bubble"
              style={{
                top: b.y + offsetY,
                left: b.x + offsetX,
                width: b.size,
                height: b.size,
              }}
            />
          );
        })}
      </div>
      <section
        style={{
          transform: `translateY(${y * 1.8}px)`,
        }}
        className="MainSection h-screen w-screen justify-center flex transition-transform duration-175 ease-linear"
      >
        <div className="MainContainer flex flex-row items-center w-[65%]">
          <div className="HomeLeftDiv w-[75%] flex flex-col text-left pr-4">
            <div className="pt-[10px]">
              <h1 className="m-0 text-4xl font-extrabold text-left">
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
            <div id="Icons" className="py-[10px] flex gap-2.5">
              <a
                className="IconLink text-[#2d2e32] hover:text-[#3a8cff] transition duration-300"
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
              </a>
              <a
                className="IconLink text-[#2d2e32] hover:text-[#3a8cff] transition duration-300"
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
              </a>
              <a
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="IconLink text-[#2d2e32] hover:text-[#3a8cff] transition duration-300"
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
              </a>
            </div>
          </div>

          <div
            id="HomeImageDiv"
            className="flex justify-center items-center m-0 mt-[10px] mb-[10px] pl-4 w-[65%]"
          >
            <Image
              src={image1}
              alt="Main"
              className="animate-liquid-border w-full shadow-xl/20 rounded-[10%]"
            />
          </div>
        </div>
      </section>
      <Separator
        style={{
          transform: `translateY(${y * 3.6}px)`,
        }}
        className="max-w-[60%] ml-auto mr-auto transition-transform duration-175 ease-linear mb-12"
      />
      <section
        style={{
          transform: `translateY(${y * 3.6}px)`,
        }}
        className="aboutSection transition-transform duration-175 ease-linear snap-start h-auto w-screen justify-center items-center flex"
      >
        <div className="aboutContainer flex flex-col items-center w-[65%]">
          <div className="aboutMeContainer flex flex-row pb-10">
            <div className="flex m-0 mt-[10px] mb-[10px] pr-4 w-[100%]">
              <Image
                src={AboutImage}
                alt="Main"
                className="w-full shadow-xl/20 rounded-[10%]"
              />
            </div>

            <div className="pl-4">
              <div>
                <h2 className="m-0 text-4xl font-bold text-left text-[#3a8cff]">
                  About Me
                </h2>
              </div>
              <div>
                <h3 className="m-0 text-2xl font-bold text-left">
                  I&#39;m a Computer Science Student from England. 📍
                </h3>
              </div>
              <div>
                <p className="text-font-semibold text-lg">
                  My name is Rowan Bithal and I am from London, England. I&#39;m
                  currently studying Computer Science at the University of
                  Birmingham.
                </p>
              </div>
            </div>
          </div>
          <div className="h-auto w-[65vw] flex flex-col ">
            <div>
              <h2 className="m-0 text-4xl font-bold text-left pb-2 text-[#3a8cff]">
                Tools I&#39;ve Worked With
              </h2>
              <div className="ml-1.5 pb-2">
                <h3 className="m-0 text-2xl font-semibold text-left">
                  Languages
                </h3>
                <Badge className="m-1">Python</Badge>
                <Badge className="m-1">C</Badge>
                <Badge className="m-1">Java</Badge>
                <Badge className="m-1">JavaScript</Badge>
              </div>
              <div className="ml-1.5 pb-2">
                <h3 className="m-0 text-2xl font-semibold text-left">
                  Frameworks & Libraries
                </h3>
                <Badge className="m-1">React</Badge>
                <Badge className="m-1">TypeScript</Badge>
                <Badge className="m-1">Tailwindcss</Badge>
                <Badge className="m-1">Next.js</Badge>
                <Badge className="m-1">Pandas</Badge>
                <Badge className="m-1">Shadcn/ui</Badge>
              </div>
            </div>
            <div className="ml-1.5 pb-2">
              <h3 className="m-0 text-2xl font-semibold text-left">Other</h3>
              <Badge className="m-1">Git</Badge>
              <Badge className="m-1">Docker</Badge>
              <Badge className="m-1">PostgreSQL</Badge>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Landing;
