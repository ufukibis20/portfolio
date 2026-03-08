import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  featured?: boolean;
  outcome?: string;
};

function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
  featured = false,
  outcome,
}: ProjectCardProps) {
  return (
    <article className={`project-card ${featured ? "project-card--featured" : ""}`}>
      <div className="project-card__image-wrapper">
        {featured && <span className="project-card__badge">Featured Project</span>}
        <img src={image} alt={title} className="project-card__image" />
      </div>

      <div className="project-card__content">
        <div className="project-card__header">
          <h3 className="project-card__title">{title}</h3>
          <span className="project-card__status">Case Study</span>
        </div>

        <p className="project-card__description">{description}</p>

        {outcome && (
          <div className="project-card__outcome">
            <span className="project-card__outcome-label">Outcome</span>
            <p className="project-card__outcome-text">{outcome}</p>
          </div>
        )}

        <div className="project-card__tech">
          {tech.map((item) => (
            <span key={item} className="project-card__tag">
              {item}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="project-card__button project-card__button--dark"
          >
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="project-card__button project-card__button--blue"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;