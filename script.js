function openWhatsApp(service) {
  const msg = `Hello, I want to enquire about: ${service}`;
  const url = `https://wa.me/918121592299?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
