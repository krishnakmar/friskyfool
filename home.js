document.addEventListener('DOMContentLoaded', function () {
    // Toggle Bar Script 
    var loadingContainer = document.getElementById('loading-container');
    var loadingVideo = document.getElementById('loading-video');
    var mainContent = document.getElementById('main-content');
    var logo1 = document.getElementById('logo1');
    var logo2 = document.getElementById('logo2');

    function hideLoadingAnimation() {
        if (loadingContainer) loadingContainer.style.display = 'none';
        if (mainContent) mainContent.style.display = 'block';
        animateLogo();
    }

    function animateLogo() {
        if (logo1) {
            logo1.style.opacity = '1';
            logo1.style.animation = 'fadeInMoveCenter 1.5s forwards';

            setTimeout(() => {
                logo1.style.transform = 'rotateY(180deg)';
                logo1.addEventListener('transitionend', () => {
                    logo1.classList.add('hidden');
                    if (logo2) {
                        logo2.classList.remove('hidden');
                        logo2.classList.add('visible');
                        logo2.style.animation = 'flip 1s forwards';
                    }
                });
            }, 2000); // Adjust delay as needed
        }
    }

    if (loadingVideo) {
        loadingVideo.addEventListener('ended', hideLoadingAnimation);

        // Fallback in case the video cannot play
        loadingVideo.addEventListener('error', function (e) {
            console.error('Error loading video:', e);
            hideLoadingAnimation();
        });

        // Fallback in case the video is already loaded
        if (loadingVideo.readyState >= 3) {
            setTimeout(hideLoadingAnimation, 10000); // Small delay to ensure the video has time to play
        }
    }

   // Select elements
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');
const menuLinks = document.querySelectorAll('.mobile-menu a'); // All menu links

// Function to toggle the mobile menu
const toggleMenu = () => {
    if (hamburgerMenu) hamburgerMenu.classList.toggle('active');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('visible');
    }
};

// Open menu on hamburger click
if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenu();
    });
}

// Close menu on close icon click
if (closeIcon) {
    closeIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        if (hamburgerMenu) hamburgerMenu.classList.remove('active');
        if (mobileMenu) {
            mobileMenu.classList.remove('visible');
            mobileMenu.classList.add('hidden');
        }
    });
}

// Close menu on menu link click (for redirection)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburgerMenu) hamburgerMenu.classList.remove('active');
        if (mobileMenu) {
            mobileMenu.classList.remove('visible');
            mobileMenu.classList.add('hidden');
        }
    });
});

// Ensure menu works after DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function () {
            mobileMenu.classList.toggle('visible'); // Toggle the visibility
            hamburgerMenu.classList.toggle('active'); // Change the hamburger menu icon
        });
    }
});


    // Skip button functionality
    const skipButton = document.getElementById('skip-button');
    const introVideo = document.getElementById('intro-video');

    if (skipButton && introVideo) {
        skipButton.addEventListener('click', () => {
            introVideo.pause();
            introVideo.currentTime = introVideo.duration; // Skip to the end
            skipButton.style.display = 'block'; // Hide the skip button
        });

        // Hide skip button when the video ends
        introVideo.addEventListener('ended', () => {
            skipButton.style.display = 'block';
        });
    }

    // Play/Pause and Fullscreen controls for the main video
    const mainVideo = document.getElementById('main-video');
    const playPauseButton = document.getElementById('play-pause');
    const fullscreenButton = document.getElementById('fullscreen');
    
    playPauseButton.addEventListener('click', () => {
        if (mainVideo.paused) {
            mainVideo.play();
            playPauseButton.textContent = 'Pause';
        } else {
            mainVideo.pause();
            playPauseButton.textContent = 'Play';
        }
    });
    
    fullscreenButton.addEventListener('click', () => {
        if (mainVideo.requestFullscreen) {
            mainVideo.requestFullscreen();
        } else if (mainVideo.webkitRequestFullscreen) {
            mainVideo.webkitRequestFullscreen();
        } else if (mainVideo.msRequestFullscreen) {
            mainVideo.msRequestFullscreen();
        }
    });





    
    // Slider controls
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slider-slide');

    let currentIndex = 0;

    function updateSliderPosition() {
        if (slides[currentIndex]) {
            const slideWidth = slides[currentIndex].clientWidth;
            if (sliderWrapper) {
                sliderWrapper.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
            }
        }
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0; // Loop back to the first slide
            }
            updateSliderPosition();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = slides.length - 1; // Loop back to the last slide
            }
            updateSliderPosition();
        });
    }
});










$(document).ready(function() {
    $(window).on('scroll', function() {
        let scrollPosition = $(window).scrollTop();
        console.log('Current scroll position:', scrollPosition);

        if (scrollPosition > 50) {
            $('.mainheader').addClass('new-class');
            console.log('Class added.');
        } else {
            $('.mainheader').removeClass('new-class');
            console.log('Class removed.');
        }
    });
});








