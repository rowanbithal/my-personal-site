import "../globals.css";
import Sidebar from "../sidebar";

export default function education() {
  return (
    <section className="flex flex-row h-screen">
      <div className="w-0 lg:w-[279px]">
        <Sidebar />
      </div>
      <div className="flex-1">
        <section className="pl-40 pt-10 justify-center">
          <div className="">
            <h1 className="text-3xl font-bold text-title mt-4">Education</h1>
          </div>
        </section>
      </div>
    </section>
  );
}
