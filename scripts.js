var id = null;

function myMove() {
    var elem = document.getElementById("animation");
    elem.style.top = "0px";
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos >= window.screen.width) {
            elem.style.transform = 'scaleX(-1)';
            id = setInterval(reverse, 1);
        } else {
            pos += 2;
            elem.style.left = pos + "px";
        }
    }
    function reverse() {
        if (pos <= 0 - elem.offsetWidth) {
            elem.style.transform = 'scaleX(1)';
            id = setInterval(frame, 1);
        } else {
            pos -= 2;
            elem.style.left = pos + "px";
        }
    }
}