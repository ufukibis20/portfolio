import "./ProjectCard.css";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
};

function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__image-wrapper">
        <img src={image} alt={title} className="project-card__image" />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>

        <p className="project-card__description">{description}</p>

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