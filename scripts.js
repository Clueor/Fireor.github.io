// Select elements to animate
const elements = document.querySelectorAll('.animate-me');

// Add event listeners (e.g., for mousemove)
elements.forEach(element => {
    element.addEventListener('mousemove', (event) => {
        // Add your animation code here, using library functions or CSS transforms
        // Example with GSAP:
        GSAP.to(element, {
            duration: 0.5,
            scale: 1.2,
            ease: 'bounce.out'
        });
    });
});
