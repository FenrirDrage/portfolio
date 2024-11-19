import React from "react";

function Projects() {
  const projects = [
    {
      title: "Pagina de Consciencialização sobre dislexia e discalculia",
      description:
        "Pagina/Projeto de consciencilização sobre a doença de dislexia e discalculia.",
      projectLink: "https://github.com/xbeatriz/Dyslexia-versus-Dyscalculia",
      ghLink: "https://xbeatriz.github.io/Dyslexia-versus-Dyscalculia/",
    },
    {
      title: "Aplicação de Fisioterapia",
      description: "Plataforma para marcações e apresentações de serviços.",
      projectLink: "#",
    },
    {
      title: "Eventos Artísticos",
      description: "Website em Vue.js para eventos artísticos com gamificação.",
      projectLink: "",
    },
    {
      title: "WebApp local registo RaceControl",
      description:
        "WebApp em HTML, JS, NODE e acesso a BD MONGO localmente, para fazer control de acidentes e eventos durante um corrida.",
      projectLink: "https://github.com/FenrirDrage/wfRacing",
    },
  ];

  return (
    <section id="projects">
      <h2>Projetos</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                Ver Projeto
              </a>
              {project.ghLink && (
                <>
                  <span> | </span>
                  <a
                    href={project.ghLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    Ver no GitHub
                  </a>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
