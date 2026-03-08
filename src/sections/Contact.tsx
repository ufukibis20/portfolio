function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="social-link__icon" aria-hidden="true">
      <path
        d="M12 3C7 3 3 7 3 12c0 4 2.6 7.4 6.2 8.6.5.1.7-.2.7-.5v-1.9c-2.5.5-3-.6-3.2-1.1-.1-.3-.6-1.1-1-1.3-.3-.2-.7-.6 0-.6.7 0 1.2.6 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-.9.5-1.1-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.8-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3s1.7.1 2.5.3c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.5.1 2.7.6.8 1 1.7 1 2.8 0 3.9-2.4 4.8-4.6 5 .3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5A9 9 0 0 0 21 12c0-5-4-9-9-9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="social-link__icon" aria-hidden="true">
      <path
        d="M6.9 8.4a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8ZM5.7 9.8h2.4V18H5.7V9.8Zm4 0H12v1.1h0c.3-.6 1.1-1.3 2.4-1.3 2.5 0 3 1.6 3 3.8V18H15v-4c0-1-.1-2.2-1.4-2.2s-1.6 1-1.6 2.1V18H9.7V9.8Z"
        fill="currentColor"
      />
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-card">
          <h2 className="contact-card__title">Let&apos;s connect</h2>

          <p className="contact-card__text">
            Wenn du dir meine Projekte anschauen möchtest oder Kontakt zu mir
            aufnehmen willst, findest du mich auf GitHub und LinkedIn.
          </p>

          <div className="contact-card__actions">
            <a
              href="https://github.com/ufukibis20"
              target="_blank"
              rel="noreferrer"
              className="social-link social-link--light"
            >
              <GitHubIcon />
              <span>GitHub ansehen</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ufuk-ibis/"
              target="_blank"
              rel="noreferrer"
              className="social-link social-link--outline"
            >
              <LinkedInIcon />
              <span>LinkedIn Profil</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;