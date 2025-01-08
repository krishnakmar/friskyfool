function loadTestimonialSlider() {
    // Load the CSS file
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'path/to/testimonial.css';
    document.head.appendChild(cssLink);
  
    // Load the HTML content
    fetch('path/to/testimonial.html')
      .then(response => response.text())
      .then(html => {
        const container = document.createElement('div');
        container.innerHTML = html;
        document.body.appendChild(container);
  
        // After HTML is loaded, load the JavaScript
        const script = document.createElement('script');
        script.src = 'path/to/testimonial.js';
        document.body.appendChild(script);
      })
      .catch(error => console.error('Error loading testimonial component:', error));
  }
  
  // Call this function on pages where you want to load the testimonial slider
  loadTestimonialSlider();
  