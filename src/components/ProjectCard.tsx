import type { Project } from "../data/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-200">{project.subtitle}</p>

        <p className="text-xs text-zinc-300 mt-1">
          {project.start} — {project.end}
        </p>
      </div>
    </div>
  );
}
