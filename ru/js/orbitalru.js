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
  "В орбитальных шлифовальных машинах используется случайное вращательное движение, при котором шлифовальная площадка движется по кругу или эллипсу, одновременно вращаясь. Это движение сводит к минимуму следы завихрения и обеспечивает гладкую отделку, предотвращая повторное движение шлифовальной машины по одной и той же траектории.",
  "Орбитальные шлифовальные машины - это универсальные инструменты, подходящие для различных задач шлифования, включая удаление краски или лака, сглаживание шероховатых поверхностей, подготовку поверхностей к покраске или окрашиванию, а также для достижения тонкой отделки дерева, металла и других материалов.",
  "Многие орбитальные шлифовальные машины имеют эргономичный дизайн с удобными захватами и минимальной вибрацией, что снижает утомляемость пользователя при длительном использовании. Кроме того, некоторые модели оснащены системами сбора пыли или насадками для уменьшения количества пыли в воздухе, улучшения видимости и поддержания чистоты рабочей среды.",
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
