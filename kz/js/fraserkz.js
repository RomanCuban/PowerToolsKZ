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
  "Кейбір аймақтарда жиі фрезерлік станок деп аталатын фрезер ағаш пен басқа материалдарды кесу, пішіндеу және ойып алу үшін қолданылатын әмбебап Ағаш өңдеу құралы болып табылады. Ол жиектерді пішіндеу, кесу, ойықтарды кесу және сәндік профильдерді жасау сияқты көптеген тапсырмаларды орындай алады.",
  "Кескіштер екі негізгі түрге бөлінеді: бекітілген негізді кескіштер және сүңгуір кескіштер. Бекітілген негізді кескіштер жиектерді профильдеу және кесу үшін өте қолайлы, өйткені кесу тереңдігі жұмысты бастамас бұрын орнатылады. Екінші жағынан, сүңгуір кескіштер қашауды жұмыс кезінде материалға батыруға мүмкіндік береді, бұл оларды материалдың ортасынан бастап кесуді қажет ететін тапсырмаларды орындауға жарамды етеді.",
  "Кескіштер кесу тақтасын қажетті тереңдікке және жылдамдыққа айналдыратын жоғары жылдамдықты қозғалтқышпен жабдықталған. Айналу кезінде әртүрлі пішіндер мен өлшемдегі кесу тақталары материалды алып тастайды, бұл ағаш өңдеудің дәл және күрделі операцияларын орындауға мүмкіндік береді. Фрезер жұмыс істеу кезінде оңтайлы нәтижеге қол жеткізу үшін дұрыс техника, сақтық шаралары және қашауды таңдау қажет.",
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
