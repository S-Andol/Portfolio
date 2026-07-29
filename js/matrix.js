(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.getElementById("matrix");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const chars = "01░▒▓<>/\\{}[]=+*アカサタナ$#&".split("");
  const fontSize = 14;
  let columns, drops, width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    drops = new Array(columns).fill(0).map(() => Math.random() * -50);
  }
  resize();
  window.addEventListener("resize", resize);

  let last = 0;
  const interval = 60; // ms — keep it calm, not frantic

  function draw(now) {
    requestAnimationFrame(draw);
    if (document.hidden) return;
    if (now - last < interval) return;
    last = now;

    // fade trail
    ctx.fillStyle = "rgba(5, 8, 13, 0.10)";
    ctx.fillRect(0, 0, width, height);

    ctx.font = fontSize + "px JetBrains Mono, monospace";
    for (let i = 0; i < drops.length; i++) {
      const text = chars[(Math.random() * chars.length) | 0];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // brightest at the head, dimmer trail
      ctx.fillStyle = Math.random() > 0.975 ? "#aaffe0" : "#00ffa3";
      ctx.fillText(text, x, y);

      if (y > height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  requestAnimationFrame(draw);
})();
