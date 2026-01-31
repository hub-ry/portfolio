import { useState } from "react";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import type { Project } from "./data/projects";

function App() {
  // Track which project is being viewed. null = show all projects
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="bg-zinc-900 min-h-screen text-white">
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
      ) : (
        <Projects onProjectClick={setSelectedProject} />
      )}
    </main>
  );
}

export default App;
