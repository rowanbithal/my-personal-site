import "../globals.css";
import Sidebar from "../sidebar";
export default function projects() {
  return (
    <section className="flex flex-row h-screen">
      <div className="w-[279px]">
        <Sidebar />
      </div>
      <div className="flex-1">
        <section className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-title mb-4">Projects</h1>
          </div>
        </section>
      </div>
    </section>
  );
}
