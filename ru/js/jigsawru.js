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
  "Электролобзик обладает высокой универсальностью и способен резать широкий спектр материалов, включая дерево, металл, пластик, ламинат и многое другое. Его способность выполнять криволинейные и неправильные пропилы делает его незаменимым для различных проектов своими руками и профессиональных работ.",
  "Несмотря на свою способность вырезать сложные фигуры, лобзик при правильном использовании обеспечивает точную резку. Регулируемая скорость вращения и параметры лезвия позволяют выполнять индивидуальные разрезы, что делает его пригодным как для детальной обработки, так и для черновой резки.",
  "Лобзики, как правило, легкие и компактные, что позволяет легко маневрировать ими и транспортировать на различные рабочие места. Такая портативность повышает их удобство и практичность, особенно при выполнении задач, требующих мобильности, или при работе в стесненных условиях.",
  "Лобзики широко доступны и представлены в различных моделях, удовлетворяющих различным потребностям и бюджету. От базовых моделей для случайного домашнего использования до современных профессиональных инструментов с расширенными функциями - здесь найдется лобзик для любого уровня квалификации и области применения.",
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
