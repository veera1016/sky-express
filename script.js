const whatsapp = "918121592299";
const email = "skyexpress.vskp@gmail.com";

let selectedService = "";

// Always open popup first (no auto WhatsApp)
function openEnquiry(service) {
  selectedService = service;
  document.getElementById("serviceName").innerText = service;
  document.getElementById("enquiryModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("enquiryModal").style.display = "none";
}

// WhatsApp button
function sendWhatsApp() {
  const msg = "Hello, I want to enquire about: " + selectedService;
  const url = "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
  closeModal();
}

// Email button (FOR DESKTOP)
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
