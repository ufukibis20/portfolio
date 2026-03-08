function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Mein Hintergrund, mein Fokus und was mir bei Frontend Development
          wichtig ist.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 0.7fr",
            gap: "28px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "20px",
              padding: "28px",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "#374151",
              }}
            >
              Ich habe Business Informatics studiert und interessiere mich
              besonders für Frontend Development. Mir macht es Spaß,
              benutzerfreundliche und moderne Weboberflächen zu bauen, die klar
              strukturiert sind und auch technisch sauber umgesetzt werden.
            </p>

            <p
              style={{
                margin: "18px 0 0 0",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "#374151",
              }}
            >
              Aktuell vertiefe ich meine Kenntnisse in React, TypeScript und
              JavaScript durch eigene Projekte. Dabei lege ich Wert auf
              responsives Design, saubere Komponentenstrukturen und eine gute
              User Experience.
            </p>

            <p
              style={{
                margin: "18px 0 0 0",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "#374151",
              }}
            >
              Mein Ziel ist der Einstieg als Junior Frontend Developer, in einem
              Umfeld, in dem ich mich fachlich weiterentwickeln und an echten
              Webanwendungen mitarbeiten kann.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "18px",
                padding: "22px",
                boxShadow: "0 10px 24px rgba(15, 23, 42, 0.04)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  color: "#6b7280",
                }}
              >
                Fokus
              </p>
              <h3
                style={{
                  margin: "8px 0 0 0",
                  fontSize: "1.1rem",
                  color: "#111827",
                }}
              >
                Frontend Development
              </h3>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "18px",
                padding: "22px",
                boxShadow: "0 10px 24px rgba(15, 23, 42, 0.04)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  color: "#6b7280",
                }}
              >
                Aktueller Stack
              </p>
              <h3
                style={{
                  margin: "8px 0 0 0",
                  fontSize: "1.1rem",
                  color: "#111827",
                }}
              >
                React, TypeScript, JavaScript
              </h3>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "18px",
                padding: "22px",
                boxShadow: "0 10px 24px rgba(15, 23, 42, 0.04)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  color: "#6b7280",
                }}
              >
                Ziel
              </p>
              <h3
                style={{
                  margin: "8px 0 0 0",
                  fontSize: "1.1rem",
                  color: "#111827",
                }}
              >
                Junior Frontend Developer
              </h3>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 900px) {
            #about .container > div:last-of-type {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default About;