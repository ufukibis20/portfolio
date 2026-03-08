function Footer() {
  return (
    <footer
      style={{
        padding: "28px 20px",
        borderTop: "1px solid #e5e7eb",
        background: "#ffffff",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          color: "#6b7280",
          fontSize: "0.95rem",
        }}
      >
        <span>© 2026 Ufuk Ibis. Built with React & TypeScript.</span>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="https://github.com/ufukibis20" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ufuk-ibis/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;