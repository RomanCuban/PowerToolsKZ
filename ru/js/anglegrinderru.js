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
  "Угловые шлифовальные машины - это универсальные инструменты, способные резать, шлифовать и полировать различные материалы, такие как металл, плитка, бетон и камень. Они обеспечивают точное управление и могут работать с различными типами абразивных дисков для конкретных применений.",
  "Угловые шлифовальные машины, оснащенные двигателем, который приводит в движение вращающийся на высоких скоростях абразивный диск, обеспечивают высокую производительность, позволяя быстро обрабатывать твердые материалы. Регулируемая скорость вращения позволяет пользователям адаптировать производительность инструмента к конкретным задачам.",
  "Углошлифовальные машины бывают разных размеров, начиная от небольших портативных моделей и заканчивая более крупными моделями для тяжелых условий эксплуатации. Они часто оснащены сменными дисками и насадками, такими как шлифовальные круги, отрезные диски и проволочные щетки, что повышает их универсальность при выполнении различных задач.",
  "Из-за своих высокоскоростных вращающихся дисков угловые шлифовальные машины могут представлять угрозу безопасности при неправильном использовании. Для снижения этих рисков обычно используются такие средства безопасности, как регулируемые ограждения, эргономичные ручки и предохранительные выключатели. Пользователям рекомендуется носить соответствующее защитное снаряжение, соблюдать правила техники безопасности и инструкции производителя во избежание несчастных случаев.",
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
