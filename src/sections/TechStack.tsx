type Skill = {
  name: string;
  icon: React.ReactNode;
};

function TechStack() {
  const skills: Skill[] = [
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" className="skill-card__icon" aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            transform="rotate(60 12 12)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            transform="rotate(120 12 12)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 24 24" className="skill-card__icon" aria-hidden="true">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M7 9h10M10 9v8M13.5 13.5c.5-.6 1.1-.9 1.9-.9 1.1 0 1.9.6 1.9 1.5 0 1-.6 1.4-1.8 1.7-.9.2-1.3.4-1.3.9 0 .4.4.7 1 .7.7 0 1.2-.3 1.8-.9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 24 24" className="skill-card__icon" aria-hidden="true">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M10 8v6.5c0 1.6-.8 2.5-2.2 2.5-.8 0-1.5-.3-2-.9M14 15.8c.5.8 1.2 1.2 2.2 1.2 1.1 0 1.8-.5 1.8-1.3 0-.7-.5-1.1-1.7-1.5l-.6-.2c-1.7-.6-2.5-1.4-2.5-2.8 0-1.7 1.4-2.9 3.4-2.9 1.5 0 2.5.5 3.2 1.7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "HTML",
      icon: (
        <svg viewBox="0 0 24 24" className="skill-card__icon" aria-hidden="true">
          <path
            d="M5 4h14l-1.2 14.2L12 20l-5.8-1.8L5 4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 9 7 10.5 8.5 12M15.5 9 17 10.5 15.5 12M13.3 8.5l-2.6 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "CSS",
      icon: (
        <svg viewBox="0 0 24 24" className="skill-card__icon" aria-hidden="true">
          <path
            d="M5 4h14l-1.2 14.2L12 20l-5.8-1.8L5 4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M8 8.5h8M8.5 12h7M9 15.3h5.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" className="skill-card__icon" aria-hidden="true">
          <path
            d="M12 3.8 18.5 7v10L12 20.2 5.5 17V7L12 3.8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 14V10l2.5-1.4 2.5 1.4V14M12 8.6V16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Git",
      icon: (
        <svg viewBox="0 0 24 24" className="skill-card__icon" aria-hidden="true">
          <path
            d="M12 3 21 12l-9 9-9-9 9-9Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9 9.5a1.25 1.25 0 1 0 0 .01ZM15 15.5a1.25 1.25 0 1 0 0 .01ZM9.8 10.3l4.4 4.4M12 7.8v4.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "REST APIs",
      icon: (
        <svg viewBox="0 0 24 24" className="skill-card__icon" aria-hidden="true">
          <rect
            x="4"
            y="5"
            width="16"
            height="14"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8 10h8M8 14h5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="tech-stack" className="section">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          Technologien, mit denen ich aktuell arbeite und Projekte umsetze.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.name} className="skill-card">
              <div className="skill-card__icon-wrap">{skill.icon}</div>
              <h3 className="skill-card__title">{skill.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;