(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 120) el.classList.add("active");
    });
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        revealOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  window.addEventListener("load", revealOnScroll);
})();
