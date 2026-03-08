import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Eine Auswahl von Projekten, mit denen ich meine React- und
          TypeScript-Kenntnisse praktisch umgesetzt habe.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              live={project.live}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;