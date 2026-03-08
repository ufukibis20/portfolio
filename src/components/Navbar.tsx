function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand">
          Ufuk Ibis
        </a>

        <nav className="navbar__nav">
          <a href="#projects" className="navbar__link">
            Projects
          </a>
          <a href="#tech-stack" className="navbar__link">
            Tech Stack
          </a>
          <a href="#about" className="navbar__link">
            About
          </a>
          <a href="#contact" className="navbar__link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;