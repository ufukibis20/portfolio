function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__badge">React • TypeScript • JavaScript</span>

          <h1 className="hero__title">
            Hi, ich bin <span className="hero__title-accent">Ufuk</span>.
          </h1>

          <p className="hero__role">
            Junior Frontend Developer mit Fokus auf moderne Weboberflächen
          </p>

          <p className="hero__text">
            Ich entwickle responsive und saubere Webanwendungen mit React,
            TypeScript und JavaScript. Mir ist wichtig, dass Benutzeroberflächen
            nicht nur modern aussehen, sondern auch klar strukturiert,
            verständlich und angenehm zu benutzen sind.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="primary-button">
              Projekte ansehen
            </a>

            <a href="#contact" className="secondary-button">
              Kontakt
            </a>

            <a
              href="/Ufuk-Ibis-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero__cv-button"
            >
              CV ansehen
            </a>
          </div>

          <div className="hero__stats">
            <article className="hero__stat-card">
              <span className="hero__stat-number">3+</span>
              <span className="hero__stat-label">Portfolio Projekte</span>
            </article>

            <article className="hero__stat-card">
              <span className="hero__stat-number">React</span>
              <span className="hero__stat-label">Fokus im Frontend</span>
            </article>

            <article className="hero__stat-card">
              <span className="hero__stat-number">Clean UI</span>
              <span className="hero__stat-label">Struktur & UX</span>
            </article>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__profile-card">
            <div className="hero__avatar">
              <span>UI</span>
            </div>

            <div className="hero__profile-content">
              <p className="hero__profile-label">Aktueller Fokus</p>
              <h3 className="hero__profile-title">Frontend Development</h3>

              <div className="hero__profile-list">
                <div className="hero__profile-item">
                  <span className="hero__profile-item-label">Stack</span>
                  <span className="hero__profile-item-value">
                    React, TypeScript, CSS
                  </span>
                </div>

                <div className="hero__profile-item">
                  <span className="hero__profile-item-label">Interesse</span>
                  <span className="hero__profile-item-value">
                    UI, UX, Komponentenstruktur
                  </span>
                </div>

                <div className="hero__profile-item">
                  <span className="hero__profile-item-label">Ziel</span>
                  <span className="hero__profile-item-value">
                    Einstieg als Junior Frontend Developer
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--top">
            <span className="hero__floating-title">Responsive Design</span>
            <span className="hero__floating-text">Desktop • Tablet • Mobile</span>
          </div>

          <div className="hero__floating-card hero__floating-card--bottom">
            <span className="hero__floating-title">Frontend Stack</span>
            <span className="hero__floating-text">React • TS • JS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;