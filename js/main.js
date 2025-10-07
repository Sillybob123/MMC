document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize the Animate on Scroll (AOS) library
  AOS.init({
    duration: 1000,      // Animation duration in milliseconds
    once: true,          // Whether animation should happen only once - while scrolling down
    offset: 120,         // Offset (in px) from the original trigger point
    easing: 'ease-out-cubic' // Default easing for AOS animations
  });
  
});
