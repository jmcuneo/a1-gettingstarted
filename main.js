function main() {
}
function handleAnimation() {
    var id = null;
    var elem = document.getElementById("animation");
    var x = 175;
    var y = 175;
    var posTimer = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (posTimer == 1500) {
            clearInterval(id);
        }
        else {
            posTimer++;
            var direction = { x: randInt(), y: randInt() };
            console.log(direction);
            x = (x + direction.x) % 300;
            y = (y + direction.y) % 300;
            console.log(x, y);
            elem.style.top = x + 'px';
            elem.style.left = y + 'px';
        }
    }
}
function randInt() {
    return Math.floor(Math.random() * 3) - 1;
}
