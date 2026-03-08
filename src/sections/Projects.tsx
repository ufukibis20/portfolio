import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="projects-section__intro">
          <span className="projects-section__eyebrow">Selected Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Eine Auswahl von Projekten, mit denen ich meine Kenntnisse in React,
            TypeScript und moderner UI-Entwicklung praktisch umgesetzt habe.
          </p>
        </div>

        <div className="projects-section__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              live={project.live}
              image={project.image}
              featured={project.featured}
              outcome={project.outcome}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;