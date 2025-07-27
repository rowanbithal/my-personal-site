import "../globals.css";
import Image from "next/image";
import firewall1 from "../assets/noteSpace.png"; // Add suitable illustrative images
import firewall2 from "../assets/noteSpace2.png";
import firewall3 from "../assets/noteSpace3.png";

export default function projects() {
  return (
    <div className="flex-1">
      <section className="flex-grow flex items-center pr-5 pl-5 sm:pl-20 sm:pr-40 lg:pl-40 lg:pr-70 pt-10">
        <div className="pb-4">
          <h1 className="text-5xl text-title font-extrabold text-left pb-10 font-sans">
            Firewall Configuration Manager
          </h1>
          <div className="flex flex-col pb-6">
            <div className="pb-4">
              <h3 className="m-0 text-2xl font-bold text-left text-primary pb-4">
                App Description:
              </h3>
              <p className="pb-4">
                This firewall configuration manager is a custom-built
                Linux-based client-server system that allows users to
                interactively and remotely manage firewall rules via terminal or
                socket connections. The server maintains a list of firewall
                rules and keeps a log of all connection queries, including
                matched IP-port pairs. Users can add, remove, and list firewall
                rules, validate connection requests, and view stored queries
                through a well-defined command interface.
              </p>
              <p>
                I designed and implemented the entire system in C, focusing on
                concurrent socket-based communication, memory-safe request
                handling, and accurate parsing of firewall rules and IP/port
                validations. A Bash-based test suite was also developed to
                ensure protocol correctness and stability.
              </p>
            </div>
            <div className="image w-full flex flex-row gap-5">
              <Image
                src={firewall1}
                alt="Firewall Screenshot 1"
                className="hidden md:block shadow-xl/20 rounded-[5%] w-1/3 hover:scale-200 transition-transform duration-200 ease-in-out"
              />
              <Image
                src={firewall2}
                alt="Firewall Screenshot 2"
                className="hidden md:block shadow-xl/20 rounded-[5%] w-1/3 hover:scale-200 transition-transform duration-200 ease-in-out"
              />
              <Image
                src={firewall3}
                alt="Firewall Screenshot 3"
                className="hidden md:block shadow-xl/20 rounded-[5%] w-1/3 hover:scale-200 transition-transform duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="pb-4">
            <h2 className="m-0 text-4xl font-bold text-left pb-6 pt-6 text-title">
              Why I built this:
            </h2>
            <p>
              The project was built to deepen my understanding of low-level
              systems programming, socket communication, and concurrent server
              architecture in C. I wanted to create a real-world tool that
              simulates the basic operation of a firewall controller similar to
              how real firewalls match incoming connections to allowlists or
              blocklists based on IP address and port rules.
            </p>
          </div>
          <div className="pb-4">
            <h2 className="m-0 text-4xl font-bold text-left pb-6 pt-6 text-title">
              How it was built:
            </h2>
            <h3 className="m-0 text-2xl font-bold text-left text-primary pb-4">
              Technologies used:
            </h3>
            <p className="pb-4">
              The system was implemented in C using POSIX sockets and
              multithreading for concurrent request handling. It supports both
              interactive and client-server modes. I wrote custom parsing and
              validation routines to enforce rule formatting and used
              dynamically managed memory structures to safely store active rules
              and request logs.
            </p>
            <h3 className="m-0 text-2xl font-bold text-left text-primary pb-4">
              Functionality highlights:
            </h3>
            <ul className="list-disc list-inside pb-4">
              <li>Add/delete firewall rules via command line</li>
              <li>Validate connections against stored rules</li>
              <li>Track which rules accepted which queries</li>
              <li>Full query logging with request listing</li>
              <li>Concurrency-safe multithreaded server</li>
              <li>Client program for remote interaction</li>
            </ul>
            <h3 className="m-0 text-2xl font-bold text-left text-primary pb-4">
              Compiling and testing:
            </h3>
            <p className="pb-4">
              The application was compiled with GCC and tested using a
              university-provided Linux VM. I used valgrind to eliminate memory
              leaks and verified correct thread handling. A Bash script,
              test.sh, automated both interactive and network-based tests to
              validate rule correctness, command parsing, and multi-client
              handling.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
