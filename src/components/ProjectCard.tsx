import type { Project } from "../data/projects";

type Props = {
  project: Project;
  onClick: (project: Project) => void;
};

export function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      onClick={() => onClick(project)}
      className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
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

      {/* 
        Tech Stack Dropdown on Hover
        Customize: Change the colors by modifying bg-black/95 (background), 
        text-gray-300 (label text), bg-zinc-700 (tag background)
      */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/95 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <p className="text-xs font-semibold text-gray-300 mb-2">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="inline-block bg-zinc-700 text-xs px-2 py-1 rounded text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
