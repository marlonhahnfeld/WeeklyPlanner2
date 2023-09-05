let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const progressBarInner = document.querySelector('.progress-bar-inner');
let currentSlide = 0; // Initialize currentSlide to 0
showSlide(currentSlide);

// Hide all slides except the first one initially
for (let i = 1; i < slides.length; i++) {
  slides[i].style.display = 'none';
}

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }
  
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Show the current slide
  slides[index].style.display = 'block';
  currentSlideIndex = index;
  updateProgressBar();
}

function moveSlide(direction) {
  showSlide(currentSlideIndex + direction);
}

function updateProgressBar() {
  const progressPercentage = (currentSlideIndex / (slides.length - 1)) * 100;
  progressBarInner.style.width = progressPercentage + '%';
}

// Initial progress update
updateProgressBar();
