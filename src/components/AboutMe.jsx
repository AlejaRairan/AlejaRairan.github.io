import { getImage } from "../utils/assets.js";
import resume from "../../docs/Alejandra_Rairan_Resume.pdf";

const LINKEDIN_URL = "https://www.linkedin.com/in/alejandrarairan/?locale=en-US";

function AboutMe() {
  return (
    <section id="aboutme" className="aboutme">
      <h2 className="aboutme__title">About me</h2>
      <div className="aboutme__content">
        <div>
          <p className="aboutme__description">
            I´m a Full Stack Developer who builds web applications from the interface to the
            API, with a strong focus on the frontend: responsive layouts, reusable React components
            and interfaces that are easy to use.
          </p>
          <p className="aboutme__description">
            Before moving into development, I led a customer service team of 15 people and worked as
            an executive assistant for U.S.-based clients. That experience taught me how real users
            and teams work with digital tools, and it´s the perspective I bring to every
            project.
          </p>
          <p className="aboutme__description">
            I´m fully bilingual (English and Spanish), based in Bogotá, Colombia (UTC-5), and
            open to remote roles as a Full Stack or Frontend Developer.
          </p>
        </div>
        <div className="aboutme__image">
          <img
            className="aboutme__image-me"
            src={getImage("alejaimage-small.jpg")}
            alt="Alejandra Rairan"
            loading="lazy"
          />
        </div>
        <div className="aboutme__buttons">
          <a
            className="aboutme__buttons-click"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn
          </a>
          <a className="aboutme__buttons-click" href={resume} target="_blank" rel="noopener noreferrer">
            My resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
