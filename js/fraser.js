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
  "A router, often referred to as a Fraser in some regions, is a versatile woodworking tool used for cutting, shaping, and hollowing out wood and other materials. It can perform a wide range of tasks, including edge shaping, trimming, grooving, dadoing, and creating decorative profiles.",
  "Routers come in two main types: fixed-base routers and plunge routers. Fixed-base routers are ideal for edge profiling and trimming tasks, as the cutting depth is set prior to operation. Plunge routers, on the other hand, allow the bit to be plunged into the material during operation, making them suitable for tasks that require cuts starting from the middle of the material.",
  "Routers feature a high-speed motor that rotates a cutting bit at a desired depth and speed. The cutting bits, which come in various shapes and sizes, remove material as they rotate, allowing for precise and intricate woodworking operations. Proper technique, safety precautions, and bit selection are essential for achieving optimal results with a router.",
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
