type Skill = {
  name: string;
  icon?: string;
  isTextBadge?: boolean;
};

function TechStack() {
  const skills: Skill[] = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "REST APIs",
      isTextBadge: true,
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
              <div className="skill-card__icon-wrap">
                {skill.isTextBadge ? (
                  <span className="skill-card__api-badge">API</span>
                ) : (
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className="skill-card__logo"
                  />
                )}
              </div>

              <h3 className="skill-card__title">{skill.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;