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
  "Орбиталық тегістеуіштер кездейсоқ айналмалы қозғалысты пайдаланады, онда тегістеу алаңы бір уақытта айналу кезінде шеңбер немесе эллипс бойымен қозғалады. Бұл қозғалыс бұралу іздерін азайтады және тегістеуіштің бір траектория бойынша қайта қозғалуына жол бермей, тегіс әрлеуді қамтамасыз етеді.",
  "Орбиталық тегістеуіштер-бұл әр түрлі тегістеу жұмыстарына, соның ішінде бояуды немесе лакты кетіруге, өрескел беттерді тегістеуге, беттерді бояуға немесе бояуға дайындауға, ағашты, металды және басқа материалдарды жұқа әрлеуге қол жеткізуге арналған әмбебап құралдар.",
  "Көптеген орбиталық тегістеуіштер ыңғайлы ұстағыштармен және минималды дірілмен эргономикалық дизайнға ие, бұл ұзақ уақыт пайдалану кезінде пайдаланушының шаршауын азайтады. Сонымен қатар, кейбір модельдер ауадағы шаңды азайту, көрінуді жақсарту және жұмыс ортасын таза ұстау үшін шаң жинау жүйелерімен немесе саптамалармен жабдықталған.",
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
