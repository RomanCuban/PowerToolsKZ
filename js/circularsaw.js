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
  "Circular saws are highly versatile tools capable of making a variety of cuts, including straight cuts, bevel cuts, and plunge cuts, across a range of materials such as wood, metal, plastic, and masonry. This versatility makes them essential for a wide range of projects, from carpentry and construction to home renovations and DIY tasks.",
  "Circular saws are powered by electric motors that rotate a toothed or abrasive blade at high speeds, enabling efficient and precise cutting through various materials. They are designed to handle tough cutting jobs quickly and effectively, making them indispensable for professionals and hobbyists alike.",
  "Many circular saws are compact and lightweight, making them easy to transport and maneuver on job sites or around the workshop. Cordless models, powered by rechargeable batteries, offer even greater portability and freedom of movement, allowing users to work in remote or confined spaces without the need for a power outlet.",
  "Circular saws come equipped with various safety features to protect users from accidents and injuries. These include blade guards that cover the spinning blade when not in use, electric brakes that quickly stop the blade's rotation when the trigger is released, and ergonomic handles with anti-slip grips for comfortable and secure operation. Additionally, many models feature blade depth and bevel angle adjustments that can be locked into place to ensure consistent and accurate cuts while minimizing the risk of kickback.",
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
