function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div
          style={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #111827 45%, #1e293b 100%)",
            borderRadius: "28px",
            padding: "40px 32px",
            color: "#ffffff",
            boxShadow: "0 20px 50px rgba(15, 23, 42, 0.18)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              lineHeight: 1.1,
            }}
          >
            Let&apos;s connect
          </h2>

          <p
            style={{
              margin: "16px 0 0 0",
              maxWidth: "700px",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#cbd5e1",
            }}
          >
            Wenn du dir meine Projekte anschauen möchtest oder Kontakt zu mir
            aufnehmen willst, findest du mich auf GitHub und LinkedIn.
          </p>

          <div
            style={{
              marginTop: "28px",
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://github.com/ufukibis20"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              GitHub ansehen
            </a>

            <a
              href="https://www.linkedin.com/in/ufuk-ibis/"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              LinkedIn Profil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;