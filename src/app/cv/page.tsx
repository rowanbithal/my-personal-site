import "../globals.css";

export default function cv() {
  return (
    <div className="h-screen w-[full] flex flex-col">
      <iframe src="/cv.pdf" className="flex-grow w-full" />
    </div>
  );
}
