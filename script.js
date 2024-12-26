document.documentElement.style.cursor = 'none';

// gsap cursor and select cursor

gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

let xToCursor = gsap.quickTo(".cursor", "x", { duration: 0.4, ease: "power3" }),
  yToCursor = gsap.quickTo(".cursor", "y", { duration: 0.4, ease: "power3" });


window.addEventListener("mousemove", (e) => {
  xToCursor(e.clientX);
  yToCursor(e.clientY);
});

gsap.set(".select", { xPercent: -50, yPercent: -50, opacity: 0 });

let xToSelect = gsap.quickTo(".select", "x", { duration: 0.4, ease: "power3" }),
  yToSelect = gsap.quickTo(".select", "y", { duration: 0.4, ease: "power3" });

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    xToSelect(e.clientX);
    yToSelect(e.clientY);
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(".select", { opacity: 0, duration: 0.2 });
    gsap.to(".cursor", { opacity: 1, duration: 0.2 });
  });

  button.addEventListener("mouseenter", () => {
    gsap.to(".select", { opacity: 1, duration: 0.2 });
    gsap.to(".cursor", { opacity: 0, duration: 0.2 });
  });
});