(function () {
  function ensureToast() {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      toast.textContent = "Copiado ✅";
      document.body.appendChild(toast);
    }
    return toast;
  }

  function showToast(message = "Copiado ✅") {
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
      try {
        document.execCommand("copy");
        showToast();
      } catch (e) {
        showToast("No se pudo copiar");
      }
      document.body.removeChild(ta);
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => showToast())
      .catch(() => showToast("No se pudo copiar"));
  };

  window.showToast = showToast;
})();
