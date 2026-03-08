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
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          display: "block",
          background: "#f3f4f6",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h3
          style={{
            marginTop: 0,
            marginBottom: "12px",
            fontSize: "22px",
            color: "#111827",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            marginTop: 0,
            marginBottom: "14px",
            color: "#4b5563",
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>

        <div style={{ marginBottom: "18px" }}>
          {tech.map((item) => (
            <span
              key={item}
              style={{
                display: "inline-block",
                marginRight: "8px",
                marginBottom: "8px",
                padding: "6px 10px",
                background: "#eef2ff",
                borderRadius: "999px",
                fontSize: "13px",
                color: "#3730a3",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: "10px",
              background: "#111827",
              color: "#ffffff",
              fontSize: "14px",
            }}
          >
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: "10px",
              background: "#2563eb",
              color: "#ffffff",
              fontSize: "14px",
            }}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;