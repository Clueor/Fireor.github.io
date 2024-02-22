document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');

    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        h1.style.transform = `translate(${x *  100 -  50}px, ${y *  100 -  50}px)`;
    });
});
