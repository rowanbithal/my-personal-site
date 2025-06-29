import "../globals.css";
import Sidebar from "../sidebar";
import image1 from "../assets/noteSpace.png";
import image2 from "../assets/noteSpace2.png";
import image3 from "../assets/noteSpace3.png";
import Image from "next/image";
export default function projects() {
  return (
    <section className="flex flex-row h-screen top-0">
      <div className="w-0 lg:w-[291px]">
        <Sidebar />
      </div>
      <div className="flex-1">
        <section className="flex-grow flex items-center pl-40 pr-40 pt-20">
          <div className="pb-4">
            <h1 className="text-5xl text-title font-extrabold text-left pb-10 font-sans">
              NoteSpace
            </h1>
            <div className="flex flex-col pb-6">
              <div className="pb-4">
                <h3 className="m-0 text-2xl font-bold text-left text-primary pb-4">
                  App Description:
                </h3>
                <p className="pb-4">
                  NoteSpace is a web-based booking system designed for the
                  University Music Department, allowing students and staff to
                  easily reserve practice rooms and track their usage. Users can
                  view available rooms, book slots, check in to sessions, and
                  access personal practice statistics. Admins can manage rooms,
                  monitor usage trends, assign penalties, and respond to
                  complaints. The system includes accessibility features,
                  role-based permissions, and, mobile support.
                </p>
                <h3 className="m-0 text-2xl font-bold text-left text-primary pb-4">
                  My Role:
                </h3>
                <p>
                  I implemented the core booking functionality, enabling users
                  to create, edit, delete, and view bookings with strong
                  back-end and front-end constraints to prevent overlaps,
                  concurrent or past bookings, and enforce user permissions. I
                  also contributed to the check-in entity, developed key
                  front-end pages including the landing and reception timeline
                  views, and set up the CI/CD pipeline with VM deployment.
                  Additionally, I supported the team by debugging and providing
                  detailed feedback.
                </p>
              </div>
              <div className="image w-full flex flex-row gap-5">
                <Image
                  src={image1}
                  alt="NoteSpace Screenshot"
                  className="hidden md:block shadow-xl/20 rounded-[5%] w-1/3 hover:scale-200 transition-transform duration-200 ease-in-out"
                />
                <Image
                  src={image2}
                  alt="NoteSpace Screenshot"
                  className="hidden md:block shadow-xl/20 rounded-[5%] w-1/3 hover:scale-200 transition-transform duration-200 ease-in-out"
                />
                <Image
                  src={image3}
                  alt="NoteSpace Screenshot"
                  className="hidden md:block shadow-xl/20 rounded-[5%] w-1/3 hover:scale-200 transition-transform duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="pb-4">
              <h2 className="m-0 text-4xl font-bold text-left pb-6 pt-6 text-title">
                Why we built NoteSpace:
              </h2>
              <p>
                NoteSpace was created to replace the University of Birmingham
                Music Department’s outdated and frustrating room booking system.
                The previous system had a clunky, non-responsive design that
                performed poorly on mobile devices and lacked key functionality.
                <br /> <br />
                NoteSpace addresses these issues with a modern, user-friendly
                interface, mobile compatibility, real-time availability,
                editable bookings, a check-in system to verify attendance, and
                personalised user statistics.
                <br />
                It was built based on feedback from students and staff to ensure
                it truly meets their needs.
              </p>
            </div>
            <div className="pb-4">
              <h2 className="m-0 text-4xl font-bold text-left pb-6 pt-6 text-title">
                How did we create NoteSpace:
              </h2>
              <h3 className="m-0 text-2xl font-bold text-left text-primary pb-4">
                Technologies used:
              </h3>
              <p className="pb-4">
                NoteSpace was built using React for the frontend, Spring Boot
                for the backend, and PostgreSQL for data storage. The app is
                fully containerized using Docker and version-controlled through
                a GitHub monorepo.
              </p>
              <h3 className="m-0 text-2xl font-bold text-left text-primary pb-4">
                Team and development process:
              </h3>
              <p className="pb-4">
                The team followed an agile, iterative approach, holding 2–3
                meetings per week alongside regular TA meetings, with over 30
                meetings in total. Each member developed a full-stack entity
                using vertical slicing, taking responsibility for both frontend
                and backend aspects. We used GitHub Projects and Kanban boards
                to plan, assign, and track tasks, ensuring collaborative and
                transparent progress.
              </p>
              <h3 className="m-0 text-2xl font-bold text-left text-primary pb-4">
                Deployment and hosting:
              </h3>
              <p className="pb-4">
                Deployment was automated through a CI/CD pipeline using GitHub
                Actions, with builds and tests triggered on every push. The
                application was hosted on an Ubuntu virtual machine with
                self-hosted GitHub Actions runners. Final versions were deployed
                from the dev branch to the production environment, and the app
                is publicly accessible via university-provided subdomains.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
