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
}
function evaluate(){
  if(rain>120||water>100) current="awas";
  else if(rain>60||water>60) current="siaga";
  else current="aman";
  document.getElementById('statusText').innerText="Status: "+current.toUpperCase();
}
setInterval(()=>{ updateSensor(); evaluate(); },3000);

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
  const box = document.getElementById('hotlineBox');
  const btn = document.getElementById('hotlineBtn');

  if(!box.contains(e.target) && !btn.contains(e.target)){
    box.classList.remove('show');
    setTimeout(()=> box.classList.add('hidden'),200);
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

// MOBILE MENU
function toggleMenu(){
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
}

window.addEventListener('scroll', () => {
  const logo = document.querySelector('.logo-nav');

  if (window.scrollY > 50) {
    logo.style.height = "40px";
  } else {
    logo.style.height = "55px";
  }
});

let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // efek background + shrink
  if (currentScroll > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }

  // auto hide / show
  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.classList.add("nav-hidden");
  } else {
    navbar.classList.remove("nav-hidden");
  }

  lastScroll = currentScroll;
});

function toggleMenu(){
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}

// klik luar = close
document.addEventListener('click', function(e){
  const menu = document.getElementById('mobileMenu');

  if(!menu.contains(e.target) && !e.target.closest('button')){
    menu.classList.remove('show');
  }
});

function toggleMenu(){
  const menu = document.getElementById('mobileMenu');
  const btn = event.currentTarget;

  menu.classList.toggle('show');
  btn.innerText = menu.classList.contains('show') ? "✕" : "☰";
}
document.querySelector('.logo-link').addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('home').scrollIntoView({
    behavior: 'smooth'
  });
});