(function () {
  // Aparicion de elementos .reveal cuando entran en pantalla.
  // Si el usuario pide menos movimiento, o el navegador no soporta
  // IntersectionObserver, se muestran todos de entrada.
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function showAll() {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("active"));
  }

  function init() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
