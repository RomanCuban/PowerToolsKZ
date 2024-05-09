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
  "Лобзик әмбебаптығы жоғары және ағаш, металл, пластик, ламинат және т.б. қоса алғанда, материалдардың кең ауқымын кесуге қабілетті. Оның қисық және дұрыс емес кесулерді орындау қабілеті оны әртүрлі DIY жобалары мен кәсіби жұмыстар үшін қажет етеді.",
  "Күрделі пішіндерді кесу қабілетіне қарамастан, Лобзик дұрыс қолданылған кезде дәл кесуді қамтамасыз етеді. Реттелетін айналу жылдамдығы мен пышақ параметрлері жеке кесуге мүмкіндік береді, бұл оны егжей-тегжейлі өңдеуге де, өрескел кесуге де жарамды етеді.",
  "Лобзик әдетте жеңіл және компам, бұл оларды маневр жасауды және әртүрлі жұмыс орындарына тасымалдауды жеңілдетеді. Мұндай портативтілік олардың ыңғайлылығы мен практикалығын арттырады, әсіресе ұтқырлықты қажет ететін тапсырмаларды орындау кезінде немесе тар жағдайда жұмыс істеу кезінде.",
  "Лобзик кеңінен қол жетімді және әртүрлі қажеттіліктер мен бюджеттерді қанағаттандыратын әртүрлі үлгілерде келеді. Үйде кездейсоқ қолдануға арналған негізгі модельдерден бастап, жетілдірілген мүмкіндіктері бар заманауи кәсіби құралдарға дейін кез-келген шеберлік деңгейі мен қолдану саласына арналған Лобзик бар.",
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
