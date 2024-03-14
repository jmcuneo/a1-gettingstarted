/*
create the animation effect,
gradually change the background color of the body element(the page)
 */
document.addEventListener('DOMContentLoaded', function() {
    var hue = 0;
    setInterval(function() {
        document.body.style.backgroundColor = 'hsl(' + hue + ', 75%, 60%)';
        hue = (hue + 1) % 360;
    }, 100);
});