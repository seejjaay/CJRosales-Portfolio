import { workExperience } from "../db/db.js";

const experienceList = document.getElementById("experience");

workExperience.forEach((job) => {
  const card = document.createElement("div");

  card.className =
    "w-full max-w-[1000px] bg-[#0C1403] border-2 border-[#131a15] rounded-3xl p-6 md:p-8";

  const descriptions = job.descriptions
    .map((description) => `<li>${description}</li>`)
    .join("");

  card.innerHTML = `
      <!-- Header -->
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div class="flex items-center">

          <div class="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] shrink-0">
            <img
              src="${job.image || "/work/placeholder.svg"}"
              alt="${job.workplace} logo"
              class="w-full h-full object-contain rounded-2xl"
              loading="lazy"
            />
          </div>

          <div class="flex flex-col justify-center gap-1 pl-4">

            <span class="text-white font-bold text-xl sm:text-2xl">
              ${job.title}
            </span>

            <span class="text-[#AFEC32] text-sm sm:text-base">
              ${job.workplace}
            </span>

          </div>

        </div>

        <span class="text-[#AFEC32] text-sm sm:text-base md:text-right">
          ${job.date}
        </span>

      </div>

      <div class="h-px bg-[#192903] my-6"></div>

      <div class="text-gray-300">

        <ul class="list-disc pl-5 space-y-3 leading-7">
          ${descriptions}
        </ul>

      </div>
    `;

  experienceList.appendChild(card);
});
