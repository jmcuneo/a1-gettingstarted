var id = null;
function myMove() {
    var elem = document.getElementById("animate");
    var deg = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (deg == 360) {
            clearInterval(id);
        } else {
            deg++;
            elem.style.transform = 'rotate(' + deg + 'deg)';
        }
    }
}