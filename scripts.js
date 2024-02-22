document.addEventListener('DOMContentLoaded', function () {
    const container = document.body;

    for (let i = 0; i < 10; i++) {
        createBall();
    }

    function createBall() {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.style.top = Math.random() * window.innerHeight + 'px';
        ball.style.left = Math.random() * window.innerWidth + 'px';
        container.appendChild(ball);

        const beam = document.createElement('div');
        beam.classList.add('beam');
        container.appendChild(beam);

        document.addEventListener('mousemove', function (event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const ballRect = ball.getBoundingClientRect();
            const ballX = ballRect.left + ballRect.width / 2;
            const ballY = ballRect.top + ballRect.height / 2;

            const dx = mouseX - ballX;
            const dy = mouseY - ballY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                beam.style.left = ballX + 'px';
                beam.style.top = ballY + 'px';
                beam.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
                beam.style.height = distance + 'px';
                beam.style.opacity = 1;
            } else {
                beam.style.opacity = 0;
            }
        });
    }
});
