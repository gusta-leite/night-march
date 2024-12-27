document.documentElement.style.cursor = 'none';

// gsap cursors

gsap.set(".cursor, .cursor2", { xPercent: -50, yPercent: -50 });

let xToCursor = gsap.quickTo(".cursor", "x", { duration: 0.4, ease: "power3" }),
  yToCursor = gsap.quickTo(".cursor", "y", { duration: 0.4, ease: "power3" });

let xToCursor2 = gsap.quickTo(".cursor2", "x", { duration: 0.6, ease: "power3" }),
  yToCursor2 = gsap.quickTo(".cursor2", "y", { duration: 0.6, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  xToCursor(e.clientX);
  yToCursor(e.clientY);
  xToCursor2(e.clientX);
  yToCursor2(e.clientY);
});

gsap.set(".select, .selectmini", { xPercent: -50, yPercent: -50, opacity: 0 });

let xToSelect = gsap.quickTo(".select", "x", { duration: 0.4, ease: "power3" }),
  yToSelect = gsap.quickTo(".select", "y", { duration: 0.4, ease: "power3" });

let xToSelectmini = gsap.quickTo(".selectmini", "x", { duration: 0.6, ease: "power3" }),
  yToSelectmini = gsap.quickTo(".selectmini", "y", { duration: 0.6, ease: "power3" });

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    xToSelect(e.clientX);
    yToSelect(e.clientY);
    xToSelectmini(e.clientX);
    yToSelectmini(e.clientY);
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(".select, .selectmini", { opacity: 0, duration: 0.2 });
    gsap.to(".cursor, .cursor2", { opacity: 1, duration: 0.2 });
  });

  button.addEventListener("mouseenter", () => {
    gsap.to(".select, .selectmini", { opacity: 1, duration: 0.2 });
    gsap.to(".cursor, .cursor2", { opacity: 0, duration: 0.2 });
  });
});

gsap.set(".testm", { xPercent: -50, yPercent: -50, opacity: 0 });

let xToTestm = gsap.quickTo(".testm", "x", { duration: 0.4, ease: "power3" }),
  yToTestm = gsap.quickTo(".testm", "y", { duration: 0.4, ease: "power3" });

document.querySelectorAll(".coluna-circle").forEach((coluna) => {
  coluna.addEventListener("mousemove", (e) => {
    xToTestm(e.clientX);
    yToTestm(e.clientY);
  });

  coluna.addEventListener("mouseleave", () => {
    gsap.to(".testm", { opacity: 0, duration: 0.2 });
    gsap.to(".cursor, .cursor2", { opacity: 1, duration: 0.2 });
  });

  coluna.addEventListener("mouseenter", () => {
    gsap.to(".testm", { opacity: 1, duration: 0.2 });
    gsap.to(".cursor, .cursor2", { opacity: 0, duration: 0.2 });
  });
});

// sticky button

const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

$$('#column-button').forEach(el => el.addEventListener('mousemove', function (e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width / 2;
  const my = e.clientY - pos.top - pos.height / 2;

  this.style.transform = 'translate(' + mx * 0.15 + 'px, ' + my * 0.3 + 'px)';
  this.style.transform += 'rotate3d(' + mx * -0.1 + ', ' + my * -0.3 + ', 0, 10deg)';
  this.children[0].style.transform = 'translate(' + mx * 0.025 + 'px, ' + my * 0.075 + 'px)';
}));

$$('#column-button').forEach(el => el.addEventListener('mouseleave', function () {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
}));