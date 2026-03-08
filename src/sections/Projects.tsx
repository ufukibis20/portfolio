import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      style={{
        padding: "20px 40px 80px",
        background: "#f9fafb",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "24px",
          color: "#111827",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
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
    </section>
  );
}

export default Projects;