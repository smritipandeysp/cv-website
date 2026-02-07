const navToggle = document.querySelector(".navToggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("isOpen");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.addEventListener("click", (e) => {
  const a = e.target.closest(".nav a");
  if(!a) return;
  if(nav && nav.classList.contains("isOpen")){
    nav.classList.remove("isOpen");
    navToggle?.setAttribute("aria-expanded","false");
  }
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
