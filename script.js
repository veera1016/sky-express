const whatsapp = "918121592299";
const email = "skyexpress.vskp@gmail.com";
let selectedService = "";

/* MODAL */
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
  window.open(
    "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(msg),
    "_blank"
  );
  closeModal();
}

function sendEmail() {
  window.location.href =
    "mailto:" + email + "?subject=Enquiry&body=Service: " + selectedService;
  closeModal();
}

/* SCROLL ANIMATION */
const animatedItems = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

animatedItems.forEach(item => observer.observe(item));
