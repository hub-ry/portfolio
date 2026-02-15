import type { Project } from "../data/projects";

type Props = {
  project: Project;
};

const sourceColors: Record<string, string> = {
  "Open-Source": "bg-[oklch(0.7898_0.207_139/40.15%)] text-white",
  "Closed-Source": "bg-zinc-700 text-zinc-200",
  "In-Progress": "bg-yellow-500 text-black",
};

const techColors: Record<string, string> = {
  Python: "bg-zinc-700 text-zinc-200",
  React: "bg-zinc-700 text-zinc-200",
  FastAPI: "bg-zinc-700 text-zinc-200",
  Sqlite3: "bg-zinc-700 text-zinc-200",
  TypeScript: "bg-zinc-800 text-zinc-200",
  Firebase: "bg-zinc-800 text-zinc-200",
  "Tailwind CSS": "bg-zinc-800 text-zinc-200",
  Linux: "bg-zinc-800 text-zinc-200",
  SSH: "bg-zinc-700 text-zinc-200",
  Java: "bg-zinc-700 text-zinc-200",
  MySQL: "bg-zinc-700 text-zinc-200",
  "Swing GUI": "bg-zinc-700 text-zinc-200",
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="bg-[] border border-zinc-800/40 p-6 hover:border-[oklch(0.7296_0.1818_173.64/43.79%)] transition shadow-lg hover:shadow-xl flex flex-col h-full">
      {" "}
      {/* Header Section (Title + Source Badge) */}{" "}
      <div className="-mx-6 -mt-6 px-6 py-4 bg-[oklch(0.189_0.0127_286.033)] flex items-center justify-between mb-4">
        {" "}
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>{" "}
        {project.source && (
          <span
            className={`px-2 py-1 text-xs font-medium rounded ${sourceColors[project.source]}`}
          >
            {" "}
            {project.source.replace("-", " ")}{" "}
          </span>
        )}{" "}
      </div>
      {/* Image */}
      {project.video ? (
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-40 object-contain bg-black rounded-lg mb-4"
        />
      ) : (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}
      {/* Description (optional) */}
      {project.subtitle && (
        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
          {project.subtitle}
        </p>
      )}
      {project.description && (
        <p className="text-zinc-400 text-xs leading-relaxed mb-4">
          {project.description}
        </p>
      )}
      {/* Dates */}
      <p className="text-xs text-zinc-500 mb-4">
        {project.start} — {project.end}
      </p>
      {/* Tech Stack */}
      {/* Tech Stack */}{" "}
      <div className="flex flex-wrap gap-2">
        {" "}
        {project.techStack.map((tech, id) => (
          <span
            key={id}
            className={`px-3 py-1 rounded-lg text-xs ${techColors[tech] ?? "bg-zinc-800 text-zinc-300"}`}
          >
            {" "}
            {tech}{" "}
          </span>
        ))}{" "}
      </div>
    </div>
  );
}
