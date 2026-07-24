export function initializeInteractiveFeatures() {
  const contactForm = document.getElementById("contact-form");

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("User submitted successfully!");
    contactForm.reset();
  });
}
