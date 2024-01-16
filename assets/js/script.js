const headings_toggle = document.querySelector(".headings-toggle");
const mobile_nav = document.querySelector(".mobile_nav");
const mobile_nav_toggle = document.querySelector(".mobile_nav-toggle");

headings_toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  mobile_nav.style.display = "initial";
});

mobile_nav_toggle.addEventListener("click", (e) => {
  mobile_nav.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target.classList.value !== "mobile_nav") {
    mobile_nav.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 710) {
    mobile_nav.style.display = "none";
  }
});
