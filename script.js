(function () {
  // active nav
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // mobile menu
  const btn = document.querySelector("[data-navbtn]");
  const links = document.querySelector("[data-navlinks]");
  if (btn && links) btn.addEventListener("click", () => links.classList.toggle("open"));

  // footer year
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
