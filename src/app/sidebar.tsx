"use client";
import { Separator } from "@radix-ui/react-separator";
import ThemePicker from "./themePicker";
import Link from "next/link";

function SideBar() {
  return (
    <div className="sidebar hidden lg:block lg:w-[291px] -translate-x-full lg:translate-x-0 transition-all duration-300 z-3 fixed top-0 h-screen border-secondary border-r-1 bg-dark p-4">
      <div className="aboutMe pt-5">
        <h3 className="text-1xl font-bold text-title pb-2.5">About Me</h3>
        <span className="text-1xl">
          I&#39;m{" "}
          <span className="text-primary">
            <Link
              className="hover:bg-fourth group inline-block hover:text-primary transition duration-300 relative"
              href="/"
            >
              Rowan
              <div className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </span>
          , a software engineer with a passion for creating innovative solutions
          and this is my website.
        </span>
      </div>
      <Separator className="my-5 h-px bg-secondary" />
      <div className="contact">
        <h3 className="text-1xl font-bold text-title pb-2.5">Contact</h3>
        <a
          className="w-full mb-1.5 hover:bg-fourth flex items-center gap-2 group hover:text-primary transition duration-300 relative"
          href="https://www.linkedin.com/in/rowanbithal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-linkedin"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth={2}
            fill="none"
            stroke="currentColor"
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
          LinkedIn
          <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          className="w-full hover:bg-fourth mb-1.5 flex items-center gap-2 group hover:text-primary transition duration-300 relative"
          href="https://github.com/rowanbithal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth={2}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-current"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
          Github
          <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          className="w-full hover:bg-fourth flex items-center gap-2 group hover:text-primary transition duration-300 relative"
          href="mailto:rowanb109@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            width={20}
            height={20}
            strokeWidth="2"
          >
            <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" />
          </svg>
          Email
          <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
      <Separator className="my-5 h-px bg-secondary" />
      <div className="education">
        <h3 className="text-1xl font-bold text-title pb-2.5">Education</h3>
        <a
          className="w-full hover:bg-fourth mb-1.5 group inline-block hover:text-primary transition duration-300 relative"
          href="/education"
        >
          University & Modules
          <div className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          className="w-full hover:bg-fourth mb-1.5 group inline-block hover:text-primary transition duration-300 relative"
          href="/education"
        >
          A levels & GCSEs
          <div className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          className="w-full hover:bg-fourth mb-1.5 group inline-block hover:text-primary transition duration-300 relative"
          href="/education"
        >
          Experiences
          <div className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
      <Separator className="my-5 h-px bg-secondary" />
      <div className="projects">
        <h3 className="text-1xl font-bold text-title pb-2.5">
          Project Write-Ups
        </h3>
        <a
          className="mb-1.5 group w-full flex hover:bg-fourth hover:text-primary transition duration-300 relative"
          href="/NoteSpace"
        >
          🎹 NoteSpace
          <div className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          className="mb-1.5 group w-full flex hover:bg-fourth hover:text-primary transition duration-300 relative"
          href="https://github.com/rowanbithal"
          target="_blank"
          rel="noopener noreferrer"
        >
          🧱 Firewall Configuration Manager
          <div className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          className="w-full flex hover:bg-fourth mb-1.5 group hover:text-primary transition duration-300 relative"
          href="mailto:rowanb109@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          🏡 House Price Prediction Model
          <div className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          className="group w-full flex hover:bg-fourth hover:text-primary transition duration-300 relative"
          href="mailto:rowanb109@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          💽 Record Shop App
          <div className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
      <Separator className="my-5 h-px bg-secondary" />
      <ThemePicker />
    </div>
  );
}

export default SideBar;
