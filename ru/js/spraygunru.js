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
  "Пистолеты-распылители - это универсальные инструменты, предназначенные для нанесения жидких покрытий, таких как краска, лак, грунтовка или морилка, на поверхности. Их можно использовать для обработки широкого спектра материалов, включая дерево, металл, пластик и автомобильные поверхности.",
  "Распылители распыляют жидкое покрытие в виде мелкодисперсного тумана, обеспечивая равномерное распределение и покрытие по поверхности. Этот процесс распыления обеспечивает гладкое покрытие и минимизирует потери по сравнению с традиционными методами нанесения, такими как нанесение кистью или накатыванием.",
  "Современные пистолеты-распылители имеют регулируемые настройки для управления режимом распыления, расходом жидкости и давлением воздуха, что позволяет пользователям настраивать технику нанесения в соответствии с требованиями проекта. Это управление обеспечивает точность и последовательность нанесения покрытия, как при выполнении крупномасштабных проектов, так и при выполнении сложных деталей.",
  "Пистолеты-распылители бывают различных типов и конфигураций в соответствии с различными областями применения и предпочтениями пользователей. К ним относятся модели HVLP (High Volume Low Pressure), LVLP (Low Volume Low Pressure), безвоздушные и пневматические, каждая из которых обладает уникальными преимуществами с точки зрения эффективности, качества отделки и простоты использования. Правильный выбор пистолета-распылителя для данной работы имеет важное значение для достижения оптимальных результатов.",
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
