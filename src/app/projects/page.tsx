import "../globals.css";
import Sidebar from "../sidebar";
export default function projects() {
  return (
    <section className="flex flex-row h-screen">
      <div className="w-0 lg:w-[279px]">
        <Sidebar />
      </div>
      <div className="flex-1 h-[2000px]">
        <section className="flex-grow flex items-center pl-40 pr-20 pt-20">
          <div className="text-center">
            <h1 className="text-4xl text-title font-extrabold text-left pb-4">Projects</h1>
            <p className="text-lg text-text mb-8">
              Here are some of the projects I&apos;ve worked on, showcasing my skills in development and design.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
