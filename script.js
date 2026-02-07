const btn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if(btn){
  btn.onclick = () => nav.classList.toggle("show");
}
