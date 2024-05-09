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
  "Дисковые пилы - это универсальные инструменты, способные выполнять различные разрезы, включая прямые, скошенные и углубленные, в различных материалах, таких как дерево, металл, пластик и каменная кладка. Эта универсальность делает их незаменимыми для широкого спектра проектов, от столярных работ и строительства до ремонта дома и самостоятельных работ.",
  "Дисковые пилы приводятся в действие электродвигателями, которые вращают зубчатое или абразивное полотно с высокой скоростью, обеспечивая эффективное и точное резание различных материалов. Они предназначены для быстрого и эффективного выполнения сложных работ по резке, что делает их незаменимыми как для профессионалов, так и для любителей.",
  "Многие дисковые пилы компактны и легки, что позволяет легко транспортировать их и маневрировать ими на рабочих местах или в мастерской. Беспроводные модели, работающие от перезаряжаемых аккумуляторов, обеспечивают еще большую мобильность и свободу движений, позволяя пользователям работать в удаленных или ограниченных пространствах без подключения к электросети.",
  "Дисковые пилы оснащены различными функциями безопасности, которые защищают пользователей от несчастных случаев и травм. К ним относятся защитные устройства, закрывающие вращающееся лезвие, когда оно не используется, электрические тормоза, которые быстро останавливают вращение лезвия при нажатии на спусковой крючок, и эргономичные рукоятки с противоскользящими захватами для комфортной и безопасной работы. Кроме того, многие модели оснащены регулировками глубины лезвия и угла скоса, которые могут быть зафиксированы на месте для обеспечения равномерного и точного среза при минимальном риске отдачи.",
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
