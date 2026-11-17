import { getImage } from "../utils/assets.js";

function ProjectCard({ project }) {
  const { title, overview, tools, summary, tags, images, video, links } = project;

  return (
    <article className="projects__content">
      <div className="projects__description">
        <h3 className="projects__description-title">{title}</h3>
        <ul className="projects__tags">
          {tags.map((tag) => (
            <li key={tag} className="projects__tag">
              {tag}
            </li>
          ))}
        </ul>
        <h3>Project overview</h3>
        <p>{overview}</p>
        <h3>Development and tools</h3>
        <ul>
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <h3>Project summary</h3>
        <p>{summary}</p>
      </div>

      <div className="projects__images">
        {images.map((image) => (
          <img
            key={image.file}
            className="projects__images-trip"
            src={getImage(image.file)}
            alt={image.alt}
            loading="lazy"
          />
        ))}
        {video && (
          <video className="projects__images-trip" controls preload="metadata">
            <source src={getImage(video)} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="projects__buttons">
        {links.map((link) => (
          <a
            key={link.url}
            className="projects__buttons-click"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
