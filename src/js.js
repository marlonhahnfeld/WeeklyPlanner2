let currentSlide = 0;
showSlide(currentSlide);

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[index].style.display = 'block';
  currentSlide = index;
}

function moveSlide(offset) {
  showSlide(currentSlide + offset);
}