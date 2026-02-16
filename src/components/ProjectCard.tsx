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
  Python: "border-1 border-cyan-500/30 bg-cyan-500/5",
  Svelte: "border-1 border-red-600/30 bg-red-600/5",
  React: "bg-zinc-700 text-zinc-200",
  FastAPI: "border-1 border-teal-500/30 bg-teal-500/5",
  Flask: "border-1 border-teal-300/30 bg-teal-300/5",
  Sqlite3: "border-1 border-indigo-500/30 bg-indigo-500/5",
  TypeScript: "bg-zinc-800 text-zinc-200",
  Firebase: "bg-zinc-800 text-zinc-200",
  "Tailwind CSS": "bg-zinc-800 text-zinc-200",
  Linux: "border-1 border-rose-900/30 bg-rose-900/5",
  SSH: "border-1 border-sky-200/30 bg-sky-200/5",
  Java: "border-1 border-orange-400/30 bg-orange-400/5",
  MySQL: "border-1 border-indigo-500/30 bg-indigo-500/5",
  "Swing GUI": "border-1 border-orange-400/30 bg-orange-400/5",
  "Chart.js": "border-1 border-yellow-300/30 bg-yellow-300/5",
  Docker: "border-1 border-sky-800/30 bg-sky-800/5",
  "Linux Server": "border-1 border-rose-900/30 bg-rose-900/5",
  Tailscale: "border-1 border-stone-800/30 bg-stone-800/5",
  Excel: "border-1 border-green-600/30 bg-green-600/5",
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
        <p className="text-sky-50 text-xs leading-relaxed mb-4">
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
            className={`px-2 py-1 text-xs ${techColors[tech] ?? "bg-zinc-800 text-zinc-300"}`}
          >
            {" "}
            {tech}{" "}
          </span>
        ))}{" "}
      </div>
    </div>
  );
}
