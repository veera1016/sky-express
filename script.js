/* =====================
   CONFIG
===================== */
const whatsapp = "918121592299";
const email = "skyexpress.vskp@gmail.com";

let selectedService = "";

/* =====================
   MODAL FUNCTIONS
===================== */
function openEnquiry(service) {
  selectedService = service;

  const serviceNameEl = document.getElementById("serviceName");
  const modalEl = document.getElementById("enquiryModal");

  if (serviceNameEl && modalEl) {
    serviceNameEl.innerText = service;
    modalEl.style.display = "flex";
  }
}

function closeModal() {
  const modalEl = document.getElementById("enquiryModal");
  if (modalEl) {
    modalEl.style.display = "none";
  }
}

/* =====================
   WHATSAPP
===================== */
function sendWhatsApp() {
  if (!selectedService) return;

  const msg = "Hello, I want to enquire about: " + selectedService;
  const url =
    "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(msg);

  window.open(url, "_blank");
  closeModal();
}

/* =====================
   EMAIL
===================== */
function sendEmail() {
  if (!selectedService) return;

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

/* =====================
   SCROLL TO TOP
===================== */
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (!scrollBtn) return;

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
});
