"use client";

import { useState } from "react";
import TopBar from "./topbar";
import Sidebar from "./sidebar";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <TopBar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
      <div className="flex flex-row">
        <div className="w-0 lg:w-[278px]">
          <div
            className={`fixed w-[278px] transition-all duration-300 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Sidebar />
          </div>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}
