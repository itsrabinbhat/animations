const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power1.out" } });

tl.fromTo(
  ".cookie-card",
  { scale: 0 },
  { scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
);

tl.fromTo("#base", { opacity: 0, scale: 3 }, { opacity: 1, scale: 1 }, "<50%");
tl.fromTo("#shade", { opacity: 0, scale: 3 }, { opacity: 1, scale: 1 });
tl.fromTo(".title", { x: 40, opacity: 0 }, { x: 0, opacity: 1 }, "<");
tl.fromTo("#big", { opacity: 0, scale: 3 }, { opacity: 1, scale: 1 });
tl.fromTo(".text", { x: 40, opacity: 0 }, { x: 0, opacity: 1 }, "<");
tl.fromTo("#small", { opacity: 0, scale: 3 }, { opacity: 1, scale: 1 });
tl.fromTo("#crumbs", { opacity: 0, scale: 3 }, { opacity: 1, scale: 1 }, "<");
tl.fromTo(".btn", { x: 40, opacity: 0 }, { x: 0, opacity: 1 }, "<");

tl.fromTo(
  ".svg-container",
  { rotate: 0, y: 0 },
  {
    rotate: -20,
    y: -20,
    yoyo: true,
    repeat: -1,
    // duration: 0.75,
  }
);

tl.fromTo("#crumbs", { y: 0 }, { y: -20, yoyo: true, repeat: -1 }, "<");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  gsap.to(".cookie-card", {
    opacity: 0,
    y: 50,
    duration: 0.75,
    ease: "power1.out",
  });
});
