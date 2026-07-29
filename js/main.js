(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ===== Toast + copy ===== */
  function ensureToast() {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    return toast;
  }
  function showToast(message = "Copiado ✓") {
    const toast = ensureToast();
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1200);
  }
  window.copyToClipboard = function (text) {
    if (!navigator.clipboard) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); showToast(); }
      catch (e) { showToast("No se pudo copiar"); }
      document.body.removeChild(ta);
      return;
    }
    navigator.clipboard.writeText(text).then(() => showToast()).catch(() => showToast("No se pudo copiar"));
  };
  window.showToast = showToast;

  /* ===== Header scroll, nav toggle, scroll spy, back-to-top ===== */
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const toTop = document.getElementById("toTop");
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll("#navLinks a");

    function onScroll() {
      const y = window.scrollY;
      if (header) header.classList.toggle("scrolled", y > 20);
      if (toTop) toTop.classList.toggle("show", y > 400);

      let current = sections[0] ? sections[0].id : "";
      sections.forEach((section) => {
        if (y >= section.offsetTop - 140) current = section.id;
      });
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
      });
    }

    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
        const open = navLinks.classList.toggle("open");
        navToggle.classList.toggle("open", open);
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      links.forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
          navToggle.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    if (toTop) {
      toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
  });

  /* ===== Hero terminal typewriter ===== */
  let typingCancelled = false;

  function finalizeTyping() {
    typingCancelled = true;
    document.querySelectorAll(".win-body .t-type").forEach((el) => {
      if (el.dataset.full != null) el.textContent = el.dataset.full;
      el.classList.remove("typing");
    });
  }

  function initTyping() {
    const lines = Array.from(document.querySelectorAll(".win-body .t-type"));
    if (!lines.length) return;

    // capture final text up front so a language switch can always restore it
    lines.forEach((el) => { el.dataset.full = el.textContent; });

    if (reduceMotion) return;

    lines.forEach((el) => { el.textContent = ""; });

    let i = 0;
    function typeLine(el, done) {
      const text = el.dataset.full || "";
      el.classList.add("typing");
      let c = 0;
      const isCmd = el.classList.contains("t-cmd");
      const speed = isCmd ? 55 : 22;
      (function step() {
        if (typingCancelled) return;
        el.textContent = text.slice(0, c++);
        if (c <= text.length) {
          setTimeout(step, speed);
        } else {
          el.classList.remove("typing");
          setTimeout(done, isCmd ? 160 : 260);
        }
      })();
    }
    function next() { if (i < lines.length && !typingCancelled) typeLine(lines[i++], next); }
    next();
  }

  /* ===== Lightbox / galería de capturas ===== */
  document.addEventListener("DOMContentLoaded", () => {
    const lb = document.getElementById("lightbox");
    if (!lb) return;
    const content = lb.querySelector(".lb-content");
    const closeBtn = lb.querySelector(".lb-close");

    const t = (k) => (typeof window.i18nT === "function" ? window.i18nT(k) : "");

    function parseItems(raw) {
      // acepta JSON [{src,t,s}] o lista simple "a,b" (retrocompatible)
      try {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) return arr;
      } catch (e) {}
      return raw.split(",").map((s) => ({ src: s.trim() }));
    }

    function open(raw) {
      content.innerHTML = "";
      parseItems(raw).forEach((item) => {
        const fig = document.createElement("figure");
        fig.className = "lb-figure";

        const title = item.t ? t(item.t) : "";
        const sub = item.s ? t(item.s) : "";
        if (title || sub) {
          const cap = document.createElement("figcaption");
          cap.className = "lb-cap";
          if (title) {
            const strong = document.createElement("strong");
            strong.textContent = title;
            cap.appendChild(strong);
          }
          if (sub) {
            const span = document.createElement("span");
            span.textContent = sub;
            cap.appendChild(span);
          }
          fig.appendChild(cap);
        }

        const img = document.createElement("img");
        img.alt = title || "Captura del proyecto";
        img.src = item.src.trim();
        fig.appendChild(img);

        content.appendChild(fig);
      });
      lb.classList.add("open");
      lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function close() {
      lb.classList.remove("open");
      lb.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      content.innerHTML = "";
    }

    document.querySelectorAll("[data-gallery]").forEach((el) => {
      el.addEventListener("click", () => open(el.dataset.gallery));
    });
    closeBtn.addEventListener("click", close);
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && lb.classList.contains("open")) close(); });
  });

  // run after i18n has applied text (both fire on window load; setTimeout defers past it)
  window.addEventListener("load", () => setTimeout(initTyping, 60));

  // switching language mid-type must never leave a half-typed line
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-switch button").forEach((b) =>
      b.addEventListener("click", finalizeTyping)
    );
  });
})();
