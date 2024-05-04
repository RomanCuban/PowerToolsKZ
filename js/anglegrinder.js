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
  "Angle grinders are versatile tools capable of cutting, grinding, and polishing various materials such as metal, tile, concrete, and stone. They offer precise control and can handle different types of abrasive discs for specific applications.",
  "Equipped with a motor that drives a spinning abrasive disc at high speeds, angle grinders deliver powerful performance, making quick work of tough materials. Their adjustable speed settings allow users to tailor the tool's performance to specific tasks.",
  "Angle grinders come in different sizes, ranging from small, handheld models to larger, heavy-duty versions. They often feature interchangeable discs and attachments, such as grinding wheels, cutting discs, and wire brushes, enhancing their versatility for various tasks.",
  "Due to their high-speed rotating discs, angle grinders can pose safety risks if not used properly. Safety features such as adjustable guards, ergonomic handles, and safety switches are commonly included to mitigate these risks. Users are advised to wear appropriate protective gear, follow safety guidelines, and adhere to manufacturer instructions to prevent accidents.",
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
