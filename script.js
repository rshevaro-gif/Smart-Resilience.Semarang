// THEME
if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}
const btn = document.getElementById('themeBtn');
function updateIcon(){ btn.innerHTML = document.documentElement.classList.contains('dark') ? "☀️" : "🌙"; }
updateIcon();
function toggleTheme(){
  document.documentElement.classList.toggle('dark');
  localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark':'light';
  updateIcon();
}

// SCROLL
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// PARALLAX
const bg = document.getElementById('parallax-bg');
window.addEventListener('scroll', () => {
  bg.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
});

// SENSOR
let rain=20, water=30, current="aman";
function updateSensor(){
  rain += (Math.random()*10-5);
  water += (Math.random()*8-4);
  rain=Math.max(0,Math.min(200,rain));
  water=Math.max(0,Math.min(150,water));
  document.getElementById('rain').innerText=Math.round(rain);
  document.getElementById('water').innerText=Math.round(water);
  document.getElementById('waterBar').style.width = water + "%";
}
function evaluate(){
  if(rain>120||water>100) current="awas";
  else if(rain>60||water>60) current="siaga";
  else current="aman";

  const status = document.getElementById('statusText');
  status.innerText="Status: "+current.toUpperCase();

  status.className = "mt-2 font-semibold " +
    (current==="aman" ? "text-green-500" :
     current==="siaga" ? "text-yellow-500" :
     "text-red-500");

  if(current==="awas"){
    const alertBox = document.getElementById("alertBox");
    alertBox.classList.remove("hidden");
    alertBox.classList.add("alert-blink");

    setTimeout(()=>{
      alertBox.classList.add("hidden");
      alertBox.classList.remove("alert-blink");
    },4000);
  }
}
// HOTLINE
function toggleHotline(){
  const box = document.getElementById('hotlineBox');

  if(box.classList.contains('hidden')){
    box.classList.remove('hidden');
    setTimeout(()=> box.classList.add('show'),10);
  } else {
    box.classList.remove('show');
    setTimeout(()=> box.classList.add('hidden'),200);
  }
}

// klik luar = close
document.addEventListener('click', function(e){
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.md\\:hidden');

  if(!menu.contains(e.target) && !btn.contains(e.target)){
    menu.classList.remove('show');
    menuOpen = false;
    btn.innerText = "☰";
  }
});

// ESC = close
document.addEventListener('keydown', function(e){
  if(e.key === "Escape"){
    const box = document.getElementById('hotlineBox');
    box.classList.remove('show');
    setTimeout(()=> box.classList.add('hidden'),200);
  }
});

let menuOpen = false;

function toggleMenu(btn){
  const menu = document.getElementById('mobileMenu');

  menuOpen = !menuOpen;

  if(menuOpen){
    menu.classList.add('show');
    btn.innerText = "✕";
  } else {
    menu.classList.remove('show');
    btn.innerText = "☰";
  }
}

document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('mobileMenu');
    const btn = document.querySelector('.md\\:hidden');

    menu.classList.remove('show');
    menuOpen = false;
    btn.innerText = "☰";
  });
});

// smooth scroll
navLinks.forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener('scroll', () => {
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.md\\:hidden');

  if(menuOpen){
    menu.classList.remove('show');
    menuOpen = false;
    btn.innerText = "☰";
  }
});
