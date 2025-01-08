
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');
let slideWidth = slides[0].getBoundingClientRect().width;

// Function to update the slide width based on viewport
function updateSlideWidth() {
  slideWidth = slides[0].getBoundingClientRect().width;
  setSlidePositions();
}

// Set initial slide positions based on the updated width
function setSlidePositions() {
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  });
}

let currentIndex = 0;

// Move to the next slide
function moveToNextSlide() {
  const slidesPerView = Math.floor(100 / (100 / (slideWidth / (track.clientWidth / 3)))); // Calculate slides per view
  currentIndex++;
  if (currentIndex >= slides.length / slidesPerView) {
    currentIndex = 0;
    track.style.transition = 'none'; // Remove transition for smooth jump
    track.style.transform = `translateX(0px)`;
    setTimeout(() => track.style.transition = 'transform 0.5s ease'); // Reapply transition
  } else {
    const amountToMove = -slideWidth * currentIndex;
    track.style.transform = `translateX(${amountToMove}px)`;
  }
}

// Move to the previous slide
function moveToPrevSlide() {
  const slidesPerView = Math.floor(100 / (100 / (slideWidth / (track.clientWidth / 3)))); // Calculate slides per view
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length / slidesPerView - 1;
    const amountToMove = -slideWidth * currentIndex;
    track.style.transition = 'none';
    track.style.transform = `translateX(${amountToMove}px)`;
    setTimeout(() => track.style.transition = 'transform 0.5s ease');
  } else {
    const amountToMove = -slideWidth * currentIndex;
    track.style.transform = `translateX(${amountToMove}px)`;
  }
}

// Event listeners for buttons
nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);

// Update slide width on window resize
window.addEventListener('resize', updateSlideWidth);

// Initial setup
updateSlideWidth();