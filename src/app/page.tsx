"use client";
import { useState } from "react";
import "./globals.css";
import Landing from "./landing";
import Sidebar from "./sidebar";
import TopBar from "./topbar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <Landing />
    </>
  );
}
