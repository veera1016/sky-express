const whatsapp = "918121592299";
const email = "skyexpress.vskp@gmail.com";

let selectedService = "";

// Enquiry Popup
function openEnquiry(service) {
  selectedService = service;
  document.getElementById("serviceName").innerText = service;
  document.getElementById("enquiryModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("enquiryModal").style.display = "none";
}

function sendWhatsApp() {
  const msg = "Hello, I want to enquire about: " + selectedService;
  const url = "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
  closeModal();
}

function sendEmail() {
  const subject = "Enquiry about " + selectedService;
  const body =
    "Hello,\n\nI would like to enquire about your service: " +
    selectedService +
    ".\n\nPlease contact me.\n\nThanks.";

  const mailto =
    "mailto:" +
    email +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  window.location.href = mailto;
  closeModal();
}

// Fade-in sections
const sections = document.querySelectorAll(".section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Scroll-to-top
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
