import "./Projects.css";
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Ecommerce website",
      description: "A personal portfolio built with React.",
      image: "/proimg/img1.png",
      demoLink: "https://aura-jewellery-blue.vercel.app",
    },
    {
      id: 2,
      title: "To-Do App",
      description: "Manage daily tasks.",
      image: "/proimg/todo.png",
      demoLink: "https://todo-inky-nine-75.vercel.app",
    },
    {
      id: 3,
      title: "Weather App",
      description: "Shows live weather using an API.",
      image: "/proimg/img1.png",
      demoLink: "",
    },
    {
      id: 4,
      title: "To-Do App",
      description: "Manage daily tasks.",
      image: "/proimg/img1.png",
      demoLink: "",
    },
  ];

  return (
    <section className="project" id="projects">
      <h2>My Projects</h2>
      <p>A Showcase of the projects that i have worked on</p>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />{" "}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="projects-links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="demotext"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
