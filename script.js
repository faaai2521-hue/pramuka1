document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const navMenu = document.getElementById("navMenu");
  if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (href === "index.html" && (currentPage === "" || currentPage === "index.html"))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
// 🔹 Toggle hamburger menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
