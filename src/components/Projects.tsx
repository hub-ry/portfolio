import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ArrowCycle } from "./ArrowCycle";

export function Projects() {
  return (
    <section className="px-6 py-12 fade-in">
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-2xl font-bold mb-24 text-white">
          Projects
          <ArrowCycle />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
