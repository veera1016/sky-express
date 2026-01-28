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
  const msg = "Hello, I want enquiry for " + selectedService;
  window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`);
  closeModal();
}

function sendEmail() {
  window.location.href =
    `mailto:${email}?subject=Enquiry&body=Service: ${selectedService}`;
  closeModal();
}

const btn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});
btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
