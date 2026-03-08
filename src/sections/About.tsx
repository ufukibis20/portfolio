function About() {
  return (
    <section
      style={{
        padding: "20px 40px 80px",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "24px",
          color: "#111827",
        }}
      >
        About Me
      </h2>

      <div
        style={{
          maxWidth: "850px",
        }}
      >
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#374151",
            margin: 0,
          }}
        >
          I am a Business Informatics graduate with a strong interest in frontend
          development. I enjoy building modern web applications with React,
          TypeScript, and JavaScript, focusing on clean user interfaces and
          practical functionality.
        </p>

        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#374151",
            marginTop: "20px",
            marginBottom: 0,
          }}
        >
          My current focus is on expanding my portfolio, strengthening my
          practical development skills, and starting my career as a Junior
          Frontend Developer.
        </p>
      </div>
    </section>
  );
}

export default About;