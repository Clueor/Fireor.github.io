document.addEventListener('DOMContentLoaded', function() {
    const cursors = document.querySelectorAll('.cursor');

    document.addEventListener('mousemove', function(e) {
        cursors.forEach(cursor => {
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
        });
    });
});

