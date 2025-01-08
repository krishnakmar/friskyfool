function initCustomSlider(containerSelector, interval = 4000) {
  const sliderContainer = document.querySelector(containerSelector);
  const sliderTrack = sliderContainer.querySelector('.custom-slider-track');
  const sliderItems = sliderTrack.querySelectorAll('.custom-slider-item');
  const itemsToShow = 3;
  let currentIndex = 0;
  const totalItems = sliderItems.length;

  function nextSlide() {
      currentIndex += itemsToShow;

      // Check if we've reached or passed the last set of slides
      if (currentIndex >= totalItems) {
          sliderTrack.style.transition = 'none';
          sliderTrack.style.transform = `translateX(0)`;
          currentIndex = 0;
          setTimeout(() => {
              sliderTrack.style.transition = 'transform 0.5s ease';
          }, 20);
      } else {
          sliderTrack.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
      }
  }

  // Start autoplay
  setInterval(nextSlide, interval);
}

// Initialize the custom slider
document.addEventListener('DOMContentLoaded', () => {
  initCustomSlider('.custom-slider-container');
});
