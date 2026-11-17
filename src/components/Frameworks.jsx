import { technologies } from "../data/technologies.js";
import { getImage } from "../utils/assets.js";

function Frameworks() {
  return (
    <section id="frameworks">
      <h2 className="frameworks__title">Frameworks and languages</h2>
      <div className="frameworks">
        <div className="frameworks__container">
          {technologies.map((tech) => (
            <div key={tech.name}>
              <img
                src={tech.url ?? getImage(tech.file)}
                className={`frameworks__icons ${tech.invert ? "frameworks__icons_invert" : ""}`}
                alt={`${tech.name} logo`}
                loading="lazy"
              />
              <p className="frameworks__text">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Frameworks;
