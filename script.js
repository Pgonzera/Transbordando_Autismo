// script.js
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  navLinks.style.transform =
    navLinks.style.transform === "translateX(0%)"
      ? "translateX(-100%)"
      : "translateX(0%)";
});
