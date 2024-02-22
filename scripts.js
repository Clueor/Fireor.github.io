document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');

    setInterval(createBall, 1000); // Create a new ball every second

    function createBall() {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        ball.style.top = randomY + 'px';
        ball.style.left = randomX + 'px';
        container.appendChild(ball);

        ball.addEventListener('mouseover', function (event) {
            ball.style.backgroundColor = '#ff0000';
        });

        ball.addEventListener('mouseout', function (event) {
            ball.style.backgroundColor = '#fff';
        });
    }
});
