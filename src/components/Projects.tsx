import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "../data/projects";

export function Projects() {
  return (
    <section className="px-6 py-12 fade-in">
      <div className="max-w-4xl mx-auto ">
        <h2
          style={{ color: "#EBEBFC" }}
          className="text-center text-3xl font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
        >
          Engineer | Systems Thinker
        </h2>
        <div style={{ color: "#F3F3F3" }} className="mb-8">
          <p className="mt-5 text-center">
            I’m a <span style={{ color: "#2B9275" }}>Computer Science</span>{" "}
            student specializing in Machine Intelligence
          </p>
          <p className=" text-center">
            and Systems Software. I build automation systems and workflow tools,
            combining systems thinking
          </p>
          <p className=" text-center">
            with hands‑on engineering to create reliable, end‑to‑end solutions.
          </p>
          <p className=" text-center mt-5">
            <a href="https://github.com/hub-ry" className="hover:underline">
              <span style={{ color: "#2B9275" }}> github:</span> @hubry
            </a>
          </p>
          <p className=" text-center mt-2">
            <span style={{ color: "#2B9275" }}>contact: </span> rhubbart [at]
            purdue (dot) edu
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
