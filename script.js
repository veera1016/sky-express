const whatsapp = "918121592299";
const email = "skyexpress.vskp@gmail.com";

let selectedService = "";

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

  window.location.href =
    "mailto:" +
    email +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  closeModal();
}

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
