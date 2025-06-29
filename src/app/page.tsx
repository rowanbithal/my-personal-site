import "./globals.css";
import Landing from "./landing";
import Sidebar from "./sidebar";

export default function Home() {
  return (
    <section className="flex flex-row h-screen">
      <div className="w-0 lg:w-[291px]">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Landing />
      </div>
    </section>
  );
}
