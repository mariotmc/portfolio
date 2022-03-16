export function Home({}) {
  return (
    <section id="home" className="content-container">
      <p className="drop-in">
        Hi, I'm <span>Mario</span>.
      </p>
      <p className="drop-in-2">I am a web developer.</p>
      <button className="appear">
        <a href="#about">
          Get to know me
          <svg viewBox="0 0 24 24" className="bounce">
            <path d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" />
          </svg>
        </a>
      </button>
    </section>
  );
}
