// Function to load the slider HTML template and initialize the slider
async function loadSlider(containerId) {
    const response = await fetch('slider-component.html'); // Load the HTML template
    const sliderHTML = await response.text();
    document.getElementById(containerId).innerHTML = sliderHTML;
    initializeSlider();
}

// Define slide data
const slidesData2 = [
    {
        work1: { img: "/image/testimonial1.png" },
        work2: { title: "Kell Dawx", description: "Working with FriskyFool Studios has been a fantastic experience. Their innovative approach and dedication to storytelling have made our collaboration a success. They truly bring visions to life in the most captivating ways." }
    },
    {
        work1: { img: "/image/testimonial2.png" },
        work2: { title: "Lotw Fox", description: "FriskyFool Studios brings a touch of magic to every project. Their ability to create immersive and imaginative experiences is unparalleled. They handle every aspect from concept to execution with exceptional skill." }
    },
    {
        work1: { img: "/image/testimonial3.png" },
        work2: { title: "Sara Mit", description: "Passionate about development and design, I carry out projects at the request of users. The creative team at FriskyFool Studios transforms ideas into visual masterpieces, ensuring every detail is perfect." }
    },
    {
        work1: { img: "/image/testimonial4.png" },
        work2: { title: "Jenny Wert", description: "The team at FriskyFool Studios is incredibly talented. Their passion for design and development is evident in every project they undertake. They consistently deliver high-quality work that exceeds expectations." }
    },
];

let currentIndex2 = 0;

function initializeSlider() {
    const sliderContainer = document.getElementById('slider-container2');
    sliderContainer.innerHTML = ''; // Clear any existing slides

    slidesData2.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `featured-slide2 ${index === 0 ? 'active-slide2' : ''}`;
        slideDiv.innerHTML = `
            <div class="work12">
                <img src="${slide.work1.img}" alt="img">
            </div>
            <div class="work22">
                <h4>${slide.work2.title}</h4>
                <p>${slide.work2.description}</p>
            </div>
        `;
        sliderContainer.appendChild(slideDiv);
    });

    startAutoPlay2(); // Start autoplay after loading the slides
}

function updateSlideVisibility2() {
    const slides = document.querySelectorAll('.featured-slide2');
    slides.forEach((slide, index) => {
        slide.classList.toggle('active-slide2', index === currentIndex2);
    });
}

function startAutoPlay2() {
    setInterval(() => {
        currentIndex2 = (currentIndex2 + 1) % slidesData2.length;
        updateSlideVisibility2();
    }, 5000); // 5 seconds delay
}
