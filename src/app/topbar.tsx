"use client";
import { Separator } from "@radix-ui/react-separator";
import ThemePicker from "./themePicker";
import Link from "next/link";

function TopBar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <div className="fixed top-0 left-0 w-full h-16 z-50 bg-third/80 backdrop-blur-xs border-b border-secondary flex items-center">
      <div className="Header h-16 w-[278px] border-r-1 border-secondary">
        <div className="p-4 pr-2.5 flex h-full items-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="text-2xl">🪴</p>
            <Link
              className="hover:bg-fourth group inline-block transition duration-300 relative text-1xl font-bold text-title"
              href="/"
            >
              rowan.dev
              <div className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-title transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
          <div onClick={onToggleSidebar} className="flex items-center ml-auto hover:bg-white/10 p-1.5 rounded-[10px] transition-colors duration-200">
            <svg
              className="text-title"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M15 10l-2 2l2 2"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="NavBar flex items-center justify-between px-4"></div>
    </div>
  );
}

export default TopBar;
