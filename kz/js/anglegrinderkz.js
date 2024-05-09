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
  "Бұрыштық тегістеуіштер-бұл металл, плитка, бетон және тас сияқты әртүрлі материалдарды кесуге, тегістеуге және жылтыратуға қабілетті әмбебап құралдар. Олар дәл басқаруды қамтамасыз етеді және белгілі бір қолданбалар үшін абразивті дискілердің әртүрлі түрлерімен жұмыс істей алады.",
  "Жоғары жылдамдықпен айналатын абразивті дискіні басқаратын қозғалтқышпен жабдықталған бұрыштық тегістеуіштер қатты материалдарды жылдам өңдеуге мүмкіндік беретін жоғары өнімділікті қамтамасыз етеді. Реттелетін айналу жылдамдығы пайдаланушыларға құралдың өнімділігін белгілі бір тапсырмаларға бейімдеуге мүмкіндік береді.",
  "Бұрыштық тегістеуіштер шағын, портативті модельдерден бастап ауыр салмақты модельдерге дейін әртүрлі өлшемдерде келеді. Олар көбінесе ауыстырылатын дискілермен және тегістеу дөңгелектері, кесу дискілері және сым щеткалары сияқты қондырмалармен жабдықталған, бұл әртүрлі тапсырмаларды орындау кезінде олардың әмбебаптығын арттырады.",
  "Жоғары жылдамдықты айналмалы дискілердің арқасында бұрыштық тегістеуіштер дұрыс пайдаланылмаған жағдайда қауіпсіздікке қауіп төндіруі мүмкін. Бұл тәуекелдерді азайту үшін әдетте реттелетін қоршаулар, эргономикалық тұтқалар және қауіпсіздік қосқыштары сияқты қауіпсіздік құралдары қолданылады. Пайдаланушыларға жазатайым оқиғаларды болдырмау үшін тиісті қауіпсіздік құралдарын кию, қауіпсіздік ережелерін және өндірушінің нұсқауларын сақтау ұсынылады.",
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
