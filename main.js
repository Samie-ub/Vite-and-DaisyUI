import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.querySelector(".swap");

  themeToggle.addEventListener("change", function () {
    document.body.classList.toggle("light-theme");
  });
});

AOS.init();
gsap.registerPlugin(ScrollTrigger);

gsap.to("#scrollingTextTwo", {
    x: "100%",
    opacity: 1,
    duration: 16, 
    scrollTrigger: {
        trigger: "#scrollingText",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        repeat: -5,
    }
});
gsap.to("#scrollingText", {
    x: "-400%", 
    opacity: 1,
    duration: 16,
    scrollTrigger: {
        trigger: "#scrollingText",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        repeat: -5,
    }
});

