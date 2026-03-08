function Journey() {
  const steps = [
    {
    
      title: "Wirtschaftsinformatik",
      text: "Ich habe Wirtschaftsinformatik studiert und dadurch sowohl ein technisches als auch ein prozessbezogenes Verständnis für digitale Lösungen entwickelt.",
    },
    {

      title: "Frontend Development",
      text: "Im Laufe meiner Projekte habe ich gemerkt, dass mich besonders moderne Benutzeroberflächen, saubere Komponentenstrukturen und gute User Experience interessieren.",
    },
    {
      
      title: "Building with React",
      text: "Aktuell vertiefe ich meine Kenntnisse in React, TypeScript und JavaScript durch eigene Projekte und entwickle mein Portfolio gezielt in Richtung Junior Frontend Developer weiter.",
    },
  ];

  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="journey-section__intro">
          <h2 className="section-title">Experience & Journey</h2>
          <p className="section-subtitle">
            Mein Hintergrund, mein Fokus und wie ich mich aktuell im Bereich
            Frontend Development weiterentwickle.
          </p>
        </div>

        <div className="journey-timeline">
          {steps.map((step, index) => (
            <article key={step.title} className="journey-card">
              <div className="journey-card__top">
                <span className="journey-card__dot"></span>
                {index !== steps.length - 1 && (
                  <span className="journey-card__line"></span>
                )}
              </div>

              <div className="journey-card__content">
                <h3 className="journey-card__title">{step.title}</h3>
                <p className="journey-card__text">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;