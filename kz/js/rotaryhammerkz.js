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
  "Перфораторы бетон, тас немесе қалау сияқты қатты материалдарды тиімді бұрғылауға мүмкіндік беретін бұрғылауға күшті соққылар жасау үшін поршеньдік механизмді пайдаланыңыз.",
  "Олар әртүрлі өлшемдер мен конфигурацияларда, соның ішінде сымды және сымсыз модельдерде, әртүрлі патрондардың өлшемдерін орнатуға және бұрғылармен үйлесімділікке ие, бұл оларды құрылыс пен жөндеудің кең ауқымына жарамды етеді.",
  "Көптеген балғамен бұрғылаудың бірнеше жұмыс режимі бар, соның ішінде бұрғылау, балғамен соғу және қашау, бұл якорь тесіктерін бұрғылау, бетонды сындыру немесе қажет емес материалды қашаумен алып тастау сияқты тапсырмаларды орындау кезінде олардың әмбебаптығын арттырады.",
  "Заманауи перфораторлар көбінесе дірілге қарсы технология, эргономикалық дизайн және қауіпсіздік муфталары сияқты мүмкіндіктермен жабдықталған, бұл оператордың шаршауын азайтады және ұзақ мерзімді пайдалану кезінде жарақат алу қаупін азайтады.",
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
