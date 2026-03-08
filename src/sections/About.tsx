function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-section__intro">
          <span className="about-section__eyebrow"></span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Kurz zu meinem Hintergrund, meinem Fokus und worauf ich bei
            Frontend Development Wert lege.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card__content">
            <p className="about-card__text">
              Ich habe Wirtschaftsinformatik studiert und interessiere mich
              besonders für Frontend Development. Mich motiviert es, moderne und
              benutzerfreundliche Weboberflächen zu entwickeln, die nicht nur
              gut aussehen, sondern auch klar strukturiert und technisch sauber
              umgesetzt sind.
            </p>

            <p className="about-card__text">
              Aktuell vertiefe ich meine Kenntnisse in React, TypeScript und
              JavaScript durch eigene Projekte. Dabei lege ich besonderen Wert
              auf responsive Design, wiederverwendbare Komponenten und eine
              klare User Experience.
            </p>

            <p className="about-card__text">
              Mein Ziel ist der Einstieg als Junior Frontend Developer, in einem
              Umfeld, in dem ich mich fachlich weiterentwickeln und an echten
              Webanwendungen mitarbeiten kann.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;