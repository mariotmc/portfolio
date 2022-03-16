import { Project } from "./Project";
import { SubHeading } from "./SubHeading";
import projectImage from "../media/project-image.png";

export function Projects({}) {
  return (
    <section id="projects">
      <SubHeading text="Projects" />
      <div className="projects-container content-container">
        <Project
          title="Twitter Clone"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sapiente soluta repellendus excepturi voluptatibus quasi placeat velit aspernatur eaque consequatur."
          demo="https://mariotmc.github.io/twitter-clone"
          code="https://github.com/mariotmc/twitter-clone"
          image={projectImage}
        />
        <Project
          title="Twitter Clone"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sapiente soluta repellendus excepturi voluptatibus quasi placeat velit aspernatur eaque consequatur."
          demo="https://mariotmc.github.io/twitter-clone"
          code="https://github.com/mariotmc/twitter-clone"
          image={projectImage}
        />
        <Project
          title="Twitter Clone"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sapiente soluta repellendus excepturi voluptatibus quasi placeat velit aspernatur eaque consequatur."
          demo="https://mariotmc.github.io/twitter-clone"
          code="https://github.com/mariotmc/twitter-clone"
          image={projectImage}
        />
      </div>
    </section>
  );
}
