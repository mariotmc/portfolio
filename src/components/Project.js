export function Project({ title, description, demo, code, image }) {
  return (
    <article className="project">
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={demo} className="project-demo" target="_blank">
          Live Demo
        </a>
        <a href={code} className="project-code" target="_blank">
          Code Repository
        </a>
      </div>
      <img src={image} alt="Project Preview" />
    </article>
  );
}
