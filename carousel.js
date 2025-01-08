class ImageCarousel extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="carousel-container">
        <div class="carousel-track">
          ${this.getImages()}
        </div>
      </div>
    `;
  }

  getImages() {
    // Array of image objects with `src` and `url`
    const images = [
      { src: 'image/1.jpg', url: 'https://www.youtube.com/desimpedidos' },
      { src: 'image/2.jpg', url: 'https://www.youtube.com/@YasserM55' },
      { src: 'image/3.jpg', url: 'https://www.youtube.com/@7mzawiitube' },
      { src: 'image/4.jpg', url: 'https://www.youtube.com/channel/UCFLHUAgHpIyNiEHw2R_yzuA' },
      { src: 'image/5.jpg', url: 'https://www.youtube.com/channel/UCMgQhVF2B2i1F8XKKsEJaMQ' },
      { src: 'image/6.jpg', url: 'https://www.youtube.com/@explodingtnt' },
      { src: 'image/7.png', url: 'https://www.twitch.tv/og_lukky' },
      { src: 'image/8.jpg', url: 'https://www.youtube.com/@TomatoFortnite' },
      { src: 'image/9.jpg', url: '#' },
    ];

    // Duplicate the array for seamless scrolling effect
    const imageElements = [...images, ...images].map(
      (image, index) =>
        `<a href="${image.url}" target="_blank">
          <img src="${image.src}" alt="Image ${index + 1}">
        </a>`
    );
    
    return imageElements.join('');
  }
}

customElements.define('image-carousel', ImageCarousel);