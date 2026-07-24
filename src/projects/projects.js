import { initializeProjectModal } from "../modal";
import { projects } from "../db/db";

const container = document.getElementById("projects");

if (!container) {
  throw new Error("Projects container not found.");
}

container.innerHTML = projects
  .map(
    (project) => `
<div class="project-card bg-[#0C1403] rounded-[2rem] border border-[#1e2a0d] overflow-hidden transition duration-300 hover:border-[#AFEC32] hover:-translate-y-1">

    <img
        src="${project.image}"
        alt="${project.name}"
        class="w-full h-[320px] object-cover"
    />

    <div class="p-8">

        <button
            type="button"
            data-project-trigger="${project.id}"
            class="text-left text-white text-3xl font-bold transition hover:text-[#AFEC32]"
        >
            ${project.name}
        </button>

        <p class="text-gray-400 mt-2">
            ${project.subtitle}
        </p>

        <div class="h-px bg-[#1e2a0d] my-8"></div>

        <p class="text-[#AFEC32] uppercase tracking-widest text-sm font-semibold mb-5">
            Technologies Used
        </p>

        <div class="flex flex-wrap gap-4">

            ${project.technologies
              .map(
                (tech) => `
                <div class="tech-icon">
                    <img src="${tech}" class="w-7 h-7">
                </div>
            `,
              )
              .join("")}

        </div>

        <button
            data-project-trigger="${project.id}"
            class="w-full mt-10 rounded-full border border-[#AFEC32] bg-[#101606] py-4 font-semibold text-[#AFEC32] transition hover:bg-[#AFEC32] hover:text-black"
        >
            View Details →
        </button>

    </div>

</div>
`,
  )
  .join("");
initializeProjectModal();
