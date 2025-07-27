"use client";
import { useState } from "react";
import TopBar from "./topbar";
import Sidebar from "./sidebar";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <TopBar onToggleSidebar={() => setSidebarOpen(prev => !prev)} />
      <div className="shell flex flex-row pt-16">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} />

        {/* Main content */}
        <div
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? "lg:ml-[278px]" : "ml-0"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
