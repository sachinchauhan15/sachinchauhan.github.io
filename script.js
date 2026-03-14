const resumeKey = "download-resume";
const resumeCountEl = document.querySelector('[data-count="resume"]');
const resumeLink = document.querySelector('[data-track="resume"]');

const counts = {
  resume: parseInt(localStorage.getItem(resumeKey) || "0", 10),
};

function renderCounts() {
  if (resumeCountEl) {
    resumeCountEl.textContent = `${counts.resume} downloads`;
  }
}

if (resumeLink) {
  resumeLink.addEventListener("click", () => {
    counts.resume += 1;
    localStorage.setItem(resumeKey, counts.resume);
    renderCounts();
  });
}

const form = document.getElementById("contact-form");
const emailAddress = "sachingahlot06@gmail.com";

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  });
}

const whatsappNumber = "+918395067567";
const whatsappLink = document.getElementById("whatsapp-link");

if (whatsappLink) {
  const text = encodeURIComponent("Hello Sachin, I saw your portfolio and would like to connect.");
  whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${text}`;
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

renderCounts();
