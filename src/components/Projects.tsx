import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ArrowCycle } from "./ArrowCycle";
import type { Project } from "../data/projects";

type Props = {
  onProjectClick: (project: Project) => void;
};

export function Projects({ onProjectClick }: Props) {
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} onClick={onProjectClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
