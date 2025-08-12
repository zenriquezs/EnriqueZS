class ProjectsRenderer {
  constructor() {
    this.projectsContainer = null;
    this.init();
  }

  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.render());
    } else {
      this.render();
    }
  }

  render() {
    this.projectsContainer = document.querySelector("#proyectos .row.g-4");

    if (!this.projectsContainer) {
      console.error("No se encontró el contenedor de proyectos");
      return;
    }

    this.projectsContainer.innerHTML = "";

    const projects = getFeaturedProjects();

    projects.forEach((project) => {
      const projectElement = this.createProjectCard(project);
      this.projectsContainer.appendChild(projectElement);
    });
    this.reinitializeAnimations();
  }

  createProjectCard(project) {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 animate-on-scroll";

    const technologiesBadges = project.technologies
      .map((tech) => `<span class="badge ${tech.class}">${tech.name}</span>`)
      .join("\n                                ");

    col.innerHTML = `
            <div class="card h-100">
                <img src="${project.image}" class="card-img-top" alt="${
      project.title
    }" onerror="this.src='./assets/images/CORONA.png'">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text flex-grow-1">
                        ${project.description}
                    </p>
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        ${technologiesBadges}
                    </div>
                    <div class="d-flex gap-2">
                        <a href="${
                          project.demoUrl
                        }" class="btn btn-primary btn-sm flex-fill" ${
      project.demoUrl === "#" ? 'onclick="return false;"' : 'target="_blank"'
    }>
                            <i class="bi bi-eye me-1"></i>Ver Demo
                        </a>
                        <a href="${
                          project.githubUrl
                        }" class="btn btn-outline-primary btn-sm" ${
      project.githubUrl === "#" ? 'onclick="return false;"' : 'target="_blank"'
    }>
                            <i class="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;

    return col;
  }

  reinitializeAnimations() {
    if (window.ScrollAnimations) {
      const scrollAnimations = new ScrollAnimations();
    }
  }

  addProject(projectData) {
    PROJECTS_DATA.push({
      id: Date.now(),
      ...projectData,
      featured: projectData.featured || false,
    });

    if (projectData.featured) {
      this.render();
    }
  }

  updateProject(id, updatedData) {
    const projectIndex = PROJECTS_DATA.findIndex((p) => p.id === id);
    if (projectIndex !== -1) {
      PROJECTS_DATA[projectIndex] = {
        ...PROJECTS_DATA[projectIndex],
        ...updatedData,
      };
      this.render();
    }
  }

  removeProject(id) {
    const projectIndex = PROJECTS_DATA.findIndex((p) => p.id === id);
    if (projectIndex !== -1) {
      PROJECTS_DATA.splice(projectIndex, 1);
      this.render();
    }
  }
}

const projectsRenderer = new ProjectsRenderer();
