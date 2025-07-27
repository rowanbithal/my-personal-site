import "../globals.css";

export default function education() {
  return (
    <div className="flex-1">
      <section className="flex-grow flex items-center pr-5 pl-5 sm:pl-20 sm:pr-40 lg:pl-40 lg:pr-70 pt-10">
        <div className="pb-4">
          <h1 className="text-5xl text-title font-extrabold text-left pb-10 font-sans">
            University & Modules
          </h1>

          <div className="pb-6">
            <h2 className="m-0 text-4xl font-bold text-left pb-6 text-title">
              Academic Performance Summary
            </h2>
            <h3 className="m-0 text-2xl font-bold text-left text-primary pb-2">
              Highest Achievements:
            </h3>
            <ul className="list-disc pl-6 pb-4 space-y-2">
              <li>Artificial Intelligence 2: 90%</li>
              <li>Artificial Intelligence 1: 87%</li>
              <li>Team Project: 87%</li>
              <li>Full Stack Application Development: 80%</li>
              <li>Functional Programming: 77%</li>
              <li>Data Structures & Algorithms: 75%</li>
            </ul>
            <h3 className="m-0 text-2xl font-bold text-left text-primary pb-2">
              Highest Achievements:
            </h3>
            <ul className="list-disc pl-6 pb-4 space-y-2">
              <li>Year 1 Average: 74.00%</li>
              <li>Year 2 Average: 75.33%</li>
            </ul>
          </div>

          {/* Module Lists */}
          <div className="flex flex-col pb-6">
            <div className="pb-4 flex flex-col gap-4">
              <h2 className="m-0 text-4xl font-bold text-left pb-4 text-title">
                Modules Taken:
              </h2>
              <div>
                <h3 className="m-0 text-2xl font-bold text-left text-primary pb-2">
                  1st Year Modules:
                </h3>
                <a className="">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Object Oriented Programming</li>
                    <li>Theories of Computation</li>
                    <li>Artificial Intelligence 1</li>
                    <li>Data Structures & Algorithms</li>
                    <li>
                      Mathematical and Logical Foundations of Computer Science
                    </li>
                  </ul>
                </a>
              </div>
              <div>
                <h3 className="m-0 text-2xl font-bold text-left text-primary pb-2">
                  2nd Year Modules:
                </h3>
                <a className="">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Security and Networks</li>
                    <li>Functional Programming</li>
                    <li>Artificial Intelligence 2</li>
                    <li>Software Engineering</li>
                    <li>Operating Systems and Systems Programming</li>
                  </ul>
                </a>
              </div>
              <div>
                <h3 className="m-0 text-2xl font-bold text-left text-primary pb-2">
                  3rd Year Modules: (currently enrolled)
                </h3>
                <a className="">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Human-Computer Interaction</li>
                    <li>Algorithms and Complexity</li>
                    <li>Dependable and Distributed Systems</li>
                    <li>Security of Real-World Systems</li>
                    <li>
                      Mathematical and Logical Foundations of Computer Science
                    </li>
                  </ul>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
