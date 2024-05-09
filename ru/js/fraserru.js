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
  "Фрезер, который в некоторых регионах часто называют фрезерным станком, является универсальным инструментом для деревообработки, используемым для резки, придания формы и выдалбливания древесины и других материалов. Он может выполнять широкий спектр задач, включая придание формы кромкам, обрезку, вырезание канавок и создание декоративных профилей.",
  "Фрезы бывают двух основных типов: фрезы с фиксированным основанием и фрезы с погружением. Фрезы с фиксированным основанием идеально подходят для профилирования кромок и обрезки, поскольку глубина резания устанавливается перед началом работы. С другой стороны, погружные фрезы позволяют долоту погружаться в материал во время работы, что делает их пригодными для выполнения задач, требующих выполнения разрезов, начиная с середины материала.",
  "Фрезы оснащены высокоскоростным двигателем, который вращает режущую пластину на нужную глубину и скорость. Режущие пластины различных форм и размеров при вращении удаляют материал, что позволяет выполнять точные и сложные операции по обработке древесины. Правильная техника, меры предосторожности и выбор долота необходимы для достижения оптимальных результатов при работе с фрезером.",
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
