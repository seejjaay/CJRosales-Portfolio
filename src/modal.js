import { projects } from "./db/db";

const modal = document.getElementById("project-modal");
const closeBtn = document.getElementById("close-modal");
const image = document.getElementById("modal-image");
const title = document.getElementById("modal-title");
const subtitle = document.getElementById("modal-subtitle");
const techContainer = document.getElementById("modal-tech");
const descriptionContainer = document.getElementById("modal-description");
const portfolioSection = document.querySelector("#featured_projects > div");
const defaultPortfolioBackground = "#131217";

function setPortfolioBackground(color) {
  if (portfolioSection) {
    portfolioSection.style.backgroundColor = color;
  }
}

function resetPortfolioBackground() {
  setPortfolioBackground(defaultPortfolioBackground);
}

export function initializeProjectModal() {
  document.querySelectorAll("[data-project-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.projectTrigger;
      const project = projects.find((p) => p.id === id);

      if (!project) return;

      if (image) image.src = project.image;
      if (image) image.alt = project.name;
      if (title) title.textContent = project.name;
      if (subtitle) subtitle.textContent = project.subtitle;

      if (techContainer) {
        techContainer.innerHTML = project.technologies
          .map(
            (tech) => `
              <div class="tech-icon">
                <img src="${tech}" class="w-7 h-7" />
              </div>
            `,
          )
          .join("");
      }

      if (descriptionContainer) {
        descriptionContainer.innerHTML = project.description
          .map((item) => `<li>${item}</li>`)
          .join("");
      }

      setPortfolioBackground(project.background || defaultPortfolioBackground);

      modal.classList.remove("hidden");
      modal.classList.add("flex");

      document.body.style.overflow = "hidden";
    });
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }

  document.body.style.overflow = "";
  resetPortfolioBackground();
}
