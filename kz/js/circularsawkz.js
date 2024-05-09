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
  "Дөңгелек аралар-бұл ағаш, металл, пластмасса және кірпіш сияқты әртүрлі материалдарда түзу, қиғаш және тереңдетілген кесулерді қоса алғанда, әртүрлі кесулерді орындауға қабілетті жан-жақты құралдар. Бұл әмбебаптық оларды ағаш ұстасы мен құрылыстан бастап үйді жөндеуге және өз бетінше жұмыс істеуге дейінгі көптеген жобалар үшін таптырмас етеді.",
  "Дөңгелек аралар әртүрлі материалдарды тиімді және дәл кесуді қамтамасыз ететін тісті немесе абразивті пышақты жоғары жылдамдықпен айналдыратын Электр қозғалтқыштарымен басқарылады. Олар күрделі кесу жұмыстарын жылдам және тиімді орындауға арналған, бұл оларды кәсіпқойлар үшін де, әуесқойлар үшін де қажет етеді.",
  "Көптеген дөңгелек араларактам және жеңіл, бұл оларды жұмыс орындарында немесе шеберханада оңай тасымалдауға және маневр жасауға мүмкіндік береді. Қайта зарядталатын батареялармен жұмыс істейтін сымсыз модельдер одан да көп ұтқырлық пен қозғалыс еркіндігін қамтамасыз етеді, бұл пайдаланушыларға электр желісіне қосылмай қашықтағы немесе шектеулі жерлерде жұмыс істеуге мүмкіндік береді.",
  "Дөңгелек аралар пайдаланушыларды жазатайым оқиғалар мен жарақаттардан қорғайтын әртүрлі қауіпсіздік мүмкіндіктерімен жабдықталған. Оларға айналмалы пышақты пайдаланбаған кезде жабатын қорғаныс құралдары, триггерді басқан кезде пышақтың айналуын тез тоқтататын электр тежегіштері және ыңғайлы және қауіпсіз жұмыс істеу үшін сырғанауға қарсы ұстағыштары бар эргономикалық тұтқалар кіреді. Сонымен қатар, көптеген модельдер пышақтың тереңдігі мен қиғаш бұрышын реттеумен жабдықталған, олар біркелкі және дәл кесуді қамтамасыз ету үшін орнында бекітілуі мүмкін, ал ең аз қайтару қаупі бар.",
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
