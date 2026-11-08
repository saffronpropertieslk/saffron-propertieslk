const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("searchBtn").addEventListener("click", () => {
  const purpose = document.getElementById("purpose").value;
  const type = document.getElementById("type").value;
  const location = document.getElementById("location").value.trim().toLowerCase();
  let visible = 0;
  document.querySelectorAll(".property-card").forEach(card => {
    const matches = (purpose === "all" || card.dataset.purpose === purpose)
      && (type === "all" || card.dataset.type.toLowerCase() === type.toLowerCase())
      && (!location || card.dataset.location.toLowerCase().includes(location));
    card.hidden = !matches;
    if (matches) visible++;
  });
  document.getElementById("noResults").hidden = visible !== 0;
  document.getElementById("properties").scrollIntoView({behavior:"smooth"});
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Saffron Properties website enquiry");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nContact: ${data.get("contact")}\nInterest: ${data.get("interest")}\n\nMessage:\n${data.get("message")}`
  );
  // Replace this address with the real business email before launch.
  window.location.href = `mailto:hello@saffronproperties.lk?subject=${subject}&body=${body}`;
});
