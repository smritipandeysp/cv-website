const navToggle = document.querySelector(".navToggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("isOpen");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const toast = (() => {
  const t = document.createElement("div");
  t.className = "toast";
  document.body.appendChild(t);
  return t;
})();

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add("show");
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(()=>toast.classList.remove("show"), 1400);
}

document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-copy]");
  if(!btn) return;

  const value = btn.getAttribute("data-copy");
  try{
    await navigator.clipboard.writeText(value);
    showToast("Copied ✨");
  }catch{
    const ta = document.createElement("textarea");
    ta.value = value;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    showToast("Copied ✨");
  }
});

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
