function openEnquiry(service) {
  document.getElementById("serviceTitle").innerText =
    "Enquire about " + service;

  document.getElementById("waLink").href =
    "https://wa.me/918121592299?text=" +
    encodeURIComponent("Hello, I want to enquire about " + service);

  document.getElementById("mailLink").href =
    "mailto:skyexpress.vskp@gmail.com?subject=" +
    encodeURIComponent("Enquiry about " + service);

  document.getElementById("enquiryModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("enquiryModal").style.display = "none";
}
