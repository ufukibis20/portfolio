import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={handleLinkClick}>
          Ufuk Ibis
        </a>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--active" : ""}`}
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          <a href="#projects" className="navbar__link" onClick={handleLinkClick}>
            Projects
          </a>
          <a href="#tech-stack" className="navbar__link" onClick={handleLinkClick}>
            Tech Stack
          </a>
          <a href="#about" className="navbar__link" onClick={handleLinkClick}>
            About
          </a>
          <a href="#journey" className="navbar__link" onClick={handleLinkClick}>
            Journey
          </a>
          <a href="#contact" className="navbar__link" onClick={handleLinkClick}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;