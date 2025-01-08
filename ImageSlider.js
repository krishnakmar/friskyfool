class ImageSlider {
    constructor(container, images, options = {}) {
        this.container = document.querySelector(container);
        this.images = images;
        this.currentIndex = 1;
        this.autoplaySpeed = options.autoplaySpeed || 30000;
        this.numImagesPerSlide = options.numImagesPerSlide || 3;
        this.autoplay = options.autoplay || false;
        this.totalSlides = Math.ceil(images.length / this.numImagesPerSlide);
        this.init();
    }

    init() {
        this.render();
        this.setupEventListeners();
        if (this.autoplay) {
            this.startAutoplay();
        }
    }

    render() {
        const sliderContainer = document.createElement('div');
        sliderContainer.classList.add('slider-container');

        const slider = document.createElement('div');
        slider.classList.add('slider');

        // Create slides, duplicating the last and first sets for seamless looping
        const lastSlideSet = this.createSlideHTML(this.images.slice(-this.numImagesPerSlide));
        const firstSlideSet = this.createSlideHTML(this.images.slice(0, this.numImagesPerSlide));

        slider.innerHTML = `${lastSlideSet}${this.images.map((_, i) => 
            this.createSlideHTML(this.images.slice(i * this.numImagesPerSlide, (i + 1) * this.numImagesPerSlide))
        ).join('')}${firstSlideSet}`;

        sliderContainer.appendChild(slider);

        // Navigation buttons with Font Awesome icons
        const prevButton = document.createElement('button');
        prevButton.classList.add('prev');
        prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>'; // Font Awesome left chevron

        const nextButton = document.createElement('button');
        nextButton.classList.add('next');
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>'; // Font Awesome right chevron

        sliderContainer.appendChild(prevButton);
        sliderContainer.appendChild(nextButton);

        this.container.appendChild(sliderContainer);

        this.slider = slider;
        this.updateSlidePosition();

        // Apply styles directly in the component
        this.applyStyles();
    }

    createSlideHTML(images) {
        return `
            <div class="slide">
                ${images.map(image => `
                    <a href="/contact-us.html?service=${encodeURIComponent(image.serviceName)}">
                        <img src="${image.src}" alt="${image.serviceName}" class="slide-image">
                    </a>
                `).join('')}
            </div>
        `;
    }
    
    updateSlidePosition() {
        this.slider.style.transition = 'transform 0.5s ease';
        this.slider.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }

    nextSlide() {
        if (this.currentIndex >= this.totalSlides) {
            // Reset to the duplicated first slide without transition for smooth loop
            this.slider.style.transition = 'none';
            this.currentIndex = 1;
            this.updateSlidePosition();
            setTimeout(() => {
                this.slider.style.transition = 'transform 0.5s ease';
                this.currentIndex++;
                this.updateSlidePosition();
            }, 50);
        } else {
            this.currentIndex++;
            this.updateSlidePosition();
        }
    }

    prevSlide() {
        if (this.currentIndex <= 0) {
            // Reset to the duplicated last slide without transition for smooth loop
            this.slider.style.transition = 'none';
            this.currentIndex = this.totalSlides - 1;
            this.updateSlidePosition();
            setTimeout(() => {
                this.slider.style.transition = 'transform 0.5s ease';
                this.currentIndex--;
                this.updateSlidePosition();
            }, 50);
        } else {
            this.currentIndex--;
            this.updateSlidePosition();
        }
    }

    setupEventListeners() {
        this.container.querySelector('.next').addEventListener('click', () => this.nextSlide());
        this.container.querySelector('.prev').addEventListener('click', () => this.prevSlide());
    }

    // startAutoplay() {
    //     this.autoplayInterval = setInterval(() => this.nextSlide(), this.autoplaySpeed);
    // }

    applyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .slider-container {
                position: relative;
                width: 100%;
                overflow: hidden;
            }
            .slider {
                display: flex;
                transition: transform 0.5s ease;
            }
            .slide {
                min-width: 100%;
                display: flex;
                justify-content: center;
                gap: 0px;
            }
            .slide img {
                width: 68%;
                transition: transform 0.3s ease;
            }
            .slide img:hover {
                transform: scale(1.1);
            }
            .prev, .next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background-color: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                padding: 10px;
                cursor: pointer;
                font-size: 24px;
                line-height: 24px;
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }
            .prev { left: 60px; }
            .next { right: 60px; }
        `;
        document.head.appendChild(style);
    }
}

// Export the ImageSlider class for reuse
export default ImageSlider;
