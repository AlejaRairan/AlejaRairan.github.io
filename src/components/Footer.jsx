import { getImage } from "../utils/assets.js";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/AlejaRairan", icon: "github.svg" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alejandra-rairan-ni%C3%B1o-/",
    icon: "linkedin.svg",
  },
];

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__content">
        <div className="footer__social">
          <ul className="footer__list">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="footer__column-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="footer__social-item" src={getImage(link.icon)} alt={link.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="footer__copyright">© {new Date().getFullYear()} Alejandra Rairan</p>
      </div>
    </footer>
  );
}

export default Footer;
