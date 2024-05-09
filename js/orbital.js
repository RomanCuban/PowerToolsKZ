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
  "Orbital sanders utilize a random orbital motion, where the sanding pad moves in a circular or elliptical pattern while also spinning. This motion minimizes swirl marks and ensures a smooth finish by preventing the sander from following the same path repeatedly.",
  "Orbital sanders are versatile tools suitable for a variety of sanding tasks, including removing paint or varnish, smoothing rough surfaces, preparing surfaces for painting or staining, and achieving a fine finish on wood, metal, or other materials.",
  "Many orbital sanders feature ergonomic designs with comfortable grips and minimal vibration, reducing user fatigue during extended use. Additionally, some models come equipped with dust collection systems or attachments to minimize airborne dust, improve visibility, and maintain a cleaner working environment.",
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
