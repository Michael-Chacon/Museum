const prevButton = document.querySelector(".carousel__control--prev");
const nextButton = document.querySelector(".carousel__control--next");
const slides = document.querySelectorAll(".exhibition");
const buttos = document.querySelectorAll(".exhibition__buttons");

let currentSlide = 0;

// Función para mostrar la diapositiva activa y ocultar las demás
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);

// Button "Next"
nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length; // Avanzar y hacer loop
  console.log(currentSlide);
  showSlide(currentSlide);
});

// Button "Prev"
prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Retroceder y hacer loop
  showSlide(currentSlide);
});

buttos.forEach(e => {
  e.innerHTML = `
  <button class="exhibition__button exhibition__button--plan">
    <a href="#plan">Plan your visit</a>
  </button>
  <button class="exhibition__button exhibition__button--gallery">
    <a href="#gallery">View Gallery</a>
  </button>
`;
})
