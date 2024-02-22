document.addEventListener('DOMContentLoaded', function () {
    const container = document.body;

    setInterval(createBall, 1000); // Create a new ball every second

    function createBall() {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.style.top = Math.random() * window.innerHeight + 'px';
        ball.style.left = Math.random() * window.innerWidth + 'px';
        container.appendChild(ball);

        ball.addEventListener('mousemove', function (event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const ballRect = ball.getBoundingClientRect();
            const ballX = ballRect.left + ballRect.width / 2;
            const ballY = ballRect.top + ballRect.height / 2;

            const dx = mouseX - ballX;
            const dy = mouseY - ballY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ball.style.backgroundColor = '#ff0000';
            } else {
                ball.style.backgroundColor = '#fff';
            }
        });
    }
});
