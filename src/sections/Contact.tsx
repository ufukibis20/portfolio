function Contact() {
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
        Contact
      </h2>

      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://github.com/ufukibis20"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            padding: "12px 16px",
            borderRadius: "10px",
            background: "#111827",
            color: "#ffffff",
            fontSize: "15px",
          }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            padding: "12px 16px",
            borderRadius: "10px",
            background: "#2563eb",
            color: "#ffffff",
            fontSize: "15px",
          }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;