import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">My projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default Projects;
