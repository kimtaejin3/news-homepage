const headings_toggle = document.querySelector(".headings-toggle");
const mobile_nav = document.querySelector(".mobile_nav");
const mobile_nav_toggle = document.querySelector(".mobile_nav-toggle");

headings_toggle.addEventListener("click", () => {
  mobile_nav.style.display = "initial";
});

mobile_nav_toggle.addEventListener("click", () => {
  mobile_nav.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 710) {
    mobile_nav.style.display = "none";
  }
});
