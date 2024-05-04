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
  "Spray guns are versatile tools designed to apply liquid coatings such as paint, varnish, primer, or stain onto surfaces. They can be used on a wide range of materials, including wood, metal, plastic, and automotive surfaces.",
  "Spray guns atomize the liquid coating into a fine mist, allowing for even distribution and coverage over the target surface. This atomization process results in a smooth finish and minimizes wastage compared to traditional application methods like brushing or rolling.",
  "Modern spray guns offer adjustable settings for controlling the spray pattern, fluid flow rate, and air pressure, allowing users to customize their application technique based on the project requirements. This control facilitates precision and consistency in coating application, whether for large-scale projects or intricate detail work.",
  "Spray guns come in various types and configurations to suit different applications and user preferences. These include HVLP (High Volume Low Pressure), LVLP (Low Volume Low Pressure), airless, and pneumatic models, each offering unique benefits in terms of efficiency, finish quality, and ease of use. Choosing the right spray gun for the job is essential for achieving optimal results.",
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
