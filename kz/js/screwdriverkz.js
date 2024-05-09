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
  "Дәлдік пен тиімділікті қамтамасыз етуге арналған әмбебап электр бұрағыш, әртүрлі тапсырмалар үшін бірнеше момент параметрлері бар.",
  "Ныхам дизайны бар эргономикалық сымсыз бұрағыш, өзін-өзі жобалауға және үйді жөндеуге өте ыңғайлы.",
  "Жоғары айналу моменті мен сенімді жұмысты қамтамасыз етуге арналған кәсіби соққы бұрағышы ауыр құрылыс жұмыстары үшін өте қолайлы.",
  "Кез келген жұмыс орнында немесе шеберханада ыңғайлылық пен әмбебаптықты қамтамасыз ететін ауыстырылатын саптамалары бар жеңіл және портативті бұрағыш жинағы.",
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
