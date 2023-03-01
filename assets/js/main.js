const buttons1 = document.querySelector(".btn-control1");
const buttons2 = document.querySelector(".btn-control2");
const boxContainer = document.querySelector(".boxes-container");
const ball1 = document.querySelector(".dot_one");
const ball2 = document.querySelector(".dot_two");
const toggle = document.querySelector(".navbar-toggler");
const toggler = document.querySelector(".navbar-collapse");

toggle.addEventListener("click", () => {
  toggler.classList.remove("show");
});

// Carousel Controller

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    animateOut: "fadeOut",
  });
});

// Toggling Button Classes

buttons1.addEventListener("click", () => {
  toggleClass();
});
buttons2.addEventListener("click", () => {
  toggleClass1();
});

ball1.addEventListener("click", () => {
  toggleClass();
});
ball2.addEventListener("click", () => {
  toggleClass1();
});

function toggleClass() {
  buttons1.classList.add("active");
  buttons2.classList.remove("active");
  ball1.classList.add("active");
  ball2.classList.remove("active");
}
function toggleClass1() {
  buttons2.classList.add("active");
  buttons1.classList.remove("active");
  ball2.classList.add("active");
  ball1.classList.remove("active");
}
