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
  "Перфораторы используют поршневой механизм для нанесения мощных ударов по сверлу, что позволяет эффективно сверлить твердые материалы, такие как бетон, камень или каменная кладка.",
  "Они выпускаются различных размеров и конфигураций, включая проводные и беспроводные модели, с возможностью установки различных размеров патронов и совместимости со сверлами, что делает их подходящими для широкого спектра применений в строительстве и реконструкции.",
  "Многие перфораторы имеют несколько режимов работы, включая сверление, забивание молотком и долбление, что повышает их универсальность при выполнении таких задач, как сверление анкерных отверстий, разбивка бетона или удаление нежелательного материала долотом.",
  "Современные перфораторы часто оснащаются такими функциями, как антивибрационная технология, эргономичный дизайн и предохранительные муфты, которые снижают утомляемость оператора и сводят к минимуму риск травм при длительном использовании.",
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
