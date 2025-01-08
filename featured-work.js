class FeaturedWork {
    constructor(containerId, slidesData) {
        this.container = document.getElementById(containerId);
        this.slidesData = slidesData;
        this.currentIndex = 0;

        this.init();
    }

    init() {
        this.renderSlides();
        this.updateSlideVisibility();

        // Add event listeners for buttons
        this.container.querySelector('.prev-btn').addEventListener('click', () => this.showPreviousSlide());
        this.container.querySelector('.next-btn').addEventListener('click', () => this.showNextSlide());
    }

    renderSlides() {
        const sliderContainer = this.container.querySelector('#slider-container');
        this.slidesData.forEach((slide, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.className = `featured-slide ${index === 0 ? 'active-slide' : ''}`;
            slideDiv.innerHTML = `
                <div class="work1">
                    <h6>${slide.work1.title}</h6>
                    <img src="${slide.work1.img}" alt="img">
                </div>
                <div class="work2">
                    <h4>${slide.work2.title}</h4>
                    <p>${slide.work2.description}</p>
                </div>
            `;
            sliderContainer.appendChild(slideDiv);
        });
    }

    updateSlideVisibility() {
        const slides = this.container.querySelectorAll('.featured-slide');
        this.container.style.backgroundImage = `url(${this.slidesData[this.currentIndex].bgImage})`;

        slides.forEach((slide, index) => {
            slide.classList.toggle('active-slide', index === this.currentIndex);
        });
    }

    showNextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slidesData.length;
        this.updateSlideVisibility();
    }

    showPreviousSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slidesData.length) % this.slidesData.length;
        this.updateSlideVisibility();
    }
}
