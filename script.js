let currentSlide = 0;

function moveSlider(direction) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const visibleSlides = window.innerWidth > 1100 ? 3 : (window.innerWidth > 768 ? 1 : 1);

  // Calcular nova posição
  currentSlide += direction;

  // Limitar os slides
  if (currentSlide < 0) {
    currentSlide = totalSlides - visibleSlides;
  } else if (currentSlide > totalSlides - visibleSlides) {
    currentSlide = 0;
  }

  // Mover o slider
  slider.style.transform = `translateX(-${currentSlide * 345}px)`;
}