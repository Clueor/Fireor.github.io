document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelector('.box');
    const mouse = {
        _x:  0,
        _y:  0,
        x:  0,
        y:  0,
        updatePosition: function(event) {
            this.x = event.clientX - this._x;
            this.y = event.clientY - this._y;
        },
        setOrigin: function(x, y) {
            this._x = x;
            this._y = y;
        },
        getX: function() {
            return this.x;
        },
        getY: function() {
            return this.y;
        }
    };

    document.addEventListener('mousemove', function(e) {
        mouse.updatePosition(e);
        box.style.transform = `translate(${mouse.getX()}px, ${mouse.getY()}px)`;
        mouse.setOrigin(e.clientX, e.clientY);
    });
});
