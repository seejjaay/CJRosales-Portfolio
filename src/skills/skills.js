import { frontend, backend, tools } from "../db/db.js";

const container = document.getElementById("skills-container");

if (!container) {
  throw new Error("Skills container not found.");
}

const categories = [
  {
    title: "Frontend",
    color: "text-[#7ECC01]",
    skills: frontend,
  },
  {
    title: "Backend",
    color: "text-yellow-400",
    skills: backend,
  },
  {
    title: "AI Tools",
    color: "text-[#7ECC01]",
    skills: tools,
  },
];

container.innerHTML = categories
  .map(
    (category) => `
<div
  class="bg-[#0C1403] border border-[#20252B] rounded-3xl p-8 flex flex-col"
>

  <div class="flex justify-between items-center mb-8">

    <span class="${category.color} text-3xl font-bold">
      ${category.title}
    </span>

    <div
      class="w-10 h-10 rounded-full border border-[#7ECC01]/40 flex items-center justify-center text-[#7ECC01]"
    >
      ${category.skills.length}
    </div>

  </div>

  <div class="grid grid-cols-3 gap-5">

    ${category.skills
      .map(
        (skill) => `
      <div
        class="group bg-black rounded-2xl aspect-square flex items-center justify-center border border-transparent hover:border-[#AFEC32] transition duration-300"
        title="${skill.name}"
      >
        <img
          src="${skill.image}"
          alt="${skill.name}"
          class="w-16 h-16 object-contain transition duration-300 group-hover:scale-110"
        />
      </div>
    `,
      )
      .join("")}

  </div>

</div>
`,
  )
  .join("");
