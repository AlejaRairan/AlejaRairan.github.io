const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#frameworks", label: "Frameworks" },
  { href: "#aboutme", label: "About me" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  return (
    <header className="header">
      <a href="#top" className="header__back-to-top" aria-label="Back to top">
        ↑
      </a>
      <div className="header__overlay">
        <nav className="nav">
          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="nav__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__content">
          <h1 className="header__title">
            <span className="header__span-accent">Alejandra Rairan </span> Portfolio
          </h1>
          <p className="header__description">
            Full Stack Developer building responsive web apps with React, Node.js, Express and
            MongoDB.
          </p>
          <a href="#contact" className="header__button">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
