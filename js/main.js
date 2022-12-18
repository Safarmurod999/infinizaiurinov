function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
  // document.querySelector('.close-btn').style.display="block";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backtop.style.opacity = 1;
    document.querySelector('header').style.backgroundColor = "rgba(0,0,0,0.7)" ;
  } else {
    backtop.style.opacity = 0;
    document.querySelector('header').style.background = "transparent";
  }
}
let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "../images/light.svg";
  } else {
    this.firstElementChild.src = "../images/dark-icon.svg";
  }
  document.body.classList.toggle("dark");
});
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.querySelector('nav');

function shrink() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}