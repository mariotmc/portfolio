export function TechIcon({ icon, text }) {
  return (
    <div className="tech-icon">
      <i className={icon}></i> <span className="icon-name">{text}</span>
    </div>
  );
}
