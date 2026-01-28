const whatsapp = "918121592299";
const email = "skyexpress.vskp@gmail.com";
let selectedService = "";

function openEnquiry(service) {
  selectedService = service;
  document.getElementById("serviceName").innerText =
    "Enquire about " + service;
  document.getElementById("enquiryModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("enquiryModal").style.display = "none";
}

function sendWhatsApp() {
  const msg = encodeURIComponent(
    "Hello, I want to enquire about " + selectedService
  );
  window.open("https://wa.me/" + whatsapp + "?text=" + msg, "_blank");
  closeModal();
}

function sendEmail() {
  const subject = encodeURIComponent(
    "Enquiry about " + selectedService
  );
  window.location.href =
    "mailto:" + email + "?subject=" + subject;
  closeModal();
}
