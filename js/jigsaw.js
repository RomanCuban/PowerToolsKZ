function showVideo() {
  document.querySelector(".video_container").style.display = "block";
  document.querySelector(".slider-container").style.display = "none";
  document.querySelector(".extra-container").style.display = "none";
}

function showPhoto() {
  document.querySelector(".video_container").style.display = "none";
  document.querySelector(".slider-container").style.display = "block";
  document.querySelector(".extra-container").style.display = "none";
}

function showExtra() {
  document.querySelector(".video_container").style.display = "none";
  document.querySelector(".slider-container").style.display = "none";
  document.querySelector(".extra-container").style.display = "block";
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".slider-dots");
const descriptions = [
  "The jigsaw tool is highly versatile, capable of cutting a wide range of materials including wood, metal, plastic, laminate, and more. Its ability to make curved and irregular cuts makes it indispensable for various DIY and professional projects.",
  "Despite its ability to cut intricate shapes, the jigsaw offers precise cutting capabilities when used correctly. Its adjustable speed settings and blade options allow for tailored cuts, making it suitable for both detailed work and rough cuts.",
  "Jigsaws are typically lightweight and compact, making them easy to maneuver and transport to different job sites. This portability adds to their convenience and usability, especially for tasks that require mobility or working in tight spaces.",
  "Jigsaws are widely available and come in a range of models to suit different needs and budgets. From basic models for occasional home use to advanced professional-grade tools with enhanced features, there's a jigsaw option for every skill level and application.",
];

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
  updateDescription(currentSlide);
  updateDots();
}

function updateDescription(index) {
  document.getElementById("image-description").textContent =
    descriptions[index];
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

// Создаем круглые индикаторы для слайдов
slides.forEach((slide, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

showSlide(currentSlide);
