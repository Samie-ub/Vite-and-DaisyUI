import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.querySelector(".swap");

  themeToggle.addEventListener("change", function () {
    document.body.classList.toggle("light-theme");
  });
});

AOS.init();