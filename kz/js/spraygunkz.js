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
  "Бүріккіш пистолеттер-бетіне бояу, лак, праймер немесе дақ сияқты сұйық жабындарды жағуға арналған әмбебап құралдар. Оларды ағаш, металл, пластик және автомобиль беттерін қоса алғанда, материалдардың кең ауқымын өңдеу үшін пайдалануға болады.",
  "Бүріккіштер сұйық жабынды жұқа тұман түрінде шашыратады, бұл оның бетіне біркелкі таралуын және жабылуын қамтамасыз етеді. Бұл бүрку процесі тегіс жабуды қамтамасыз етеді және щеткамен немесе домалақпен жағу сияқты дәстүрлі қолдану әдістерімен салыстырғанда шығындарды азайтады.",
  "Қазіргі заманғы бүріккіш пистолеттерде бүрку режимін, сұйықтық ағынын және ауа қысымын басқаруға арналған реттелетін параметрлер бар, бұл пайдаланушыларға қолдану техникасын жоба талаптарына сәйкес реттеуге мүмкіндік береді. Бұл басқару ауқымды жобаларды орындау кезінде де, күрделі бөлшектерді орындау кезінде де жабынның дәлдігі мен дәйектілігін қамтамасыз етеді.",
  "Бүріккіш пистолеттер әртүрлі қолдану салалары мен пайдаланушылардың қалауына сәйкес әртүрлі типтер мен конфигурацияларда келеді. Оларға hvlp (high Volume Low Pressure), lvlp (Low volume Low Pressure), ауасыз және пневматикалық модельдер кіреді, олардың әрқайсысы тиімділік, әрлеу сапасы және пайдаланудың қарапайымдылығы жағынан бірегей артықшылықтарға ие. Бұл жұмыс үшін бүріккіш пистолетті дұрыс таңдау оңтайлы нәтижеге жету үшін өте маңызды.",
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
