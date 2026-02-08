import { useState } from "react";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import type { Project } from "./data/projects";
import { Footer } from "./components/Footer";

function App() {
  // Track which project is being viewed. null = show all projects
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main id="top" className="bg-zinc-900 min-h-screen text-white">
      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        <Projects onProjectClick={setSelectedProject} />
      )}
      <Footer />
    </main>
  );
}

export default App;
