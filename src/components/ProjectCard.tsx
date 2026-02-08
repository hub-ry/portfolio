import type { Project } from "../data/projects";

type Props = {
  project: Project;
  onClick: (project: Project) => void;
};

export function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      onClick={() => onClick(project)}
      className="bg-zinc-900 border border-zinc-800 p-6 cursor-pointer 
                hover:border-[oklch(0.7296_0.1818_173.64/43.79%)] transition shadow-lg hover:shadow-xl"
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-50 h-30 object-cover mb-6"
      />

      {/* Dates */}
      <p className="text-xs text-zinc-500 mb-6">
        {project.start} — {project.end}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-lg text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
