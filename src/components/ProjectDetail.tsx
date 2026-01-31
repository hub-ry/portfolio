import type { Project } from "../data/projects";

type Props = {
  project: Project;
  onBack: () => void;
};

export function ProjectDetail({ project, onBack }: Props) {
  return (
    <section className="px-6 py-12 fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Back Button - Customize: Change hover color by modifying hover:text-gray-300 */}
        <button
          onClick={onBack}
          className="mb-8 text-gray-400 hover:text-gray-300 transition font-semibold"
        >
          ← Back
        </button>

        {/* Project Image - Customize: Change rounded-xl for more/less rounded corners */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover rounded-xl mb-8 shadow-lg"
        />

        {/* Project Title */}
        <h1 className="text-4xl font-bold mb-2 text-white">{project.title}</h1>

        {/* Project Subtitle */}
        <p className="text-xl text-gray-300 mb-4">{project.subtitle}</p>

        {/* Metadata Row - Customize: Change bg-zinc-800 for background color */}
        <div className="flex items-center gap-4 mb-8 text-gray-400">
          <span className="text-sm">
            {project.start} — {project.end}
          </span>
          <span className="text-sm bg-zinc-800 px-3 py-1 rounded">
            {project.type}
          </span>
        </div>

        {/* Tech Stack Section - Customize: Change bg-zinc-700 for tag background */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-white">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-zinc-700 px-4 py-2 rounded-lg text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content Section - Customize: Change bg-zinc-800 for background color */}
        <div className="bg-zinc-800 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            About This Project
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {/* Add your project details here */}
            Project details coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
