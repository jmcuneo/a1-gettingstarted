
// The move function is used to move the stick figure png across the screen
function move() {
    //the id is used to keep track of the animation
    let id = null;
    //the pic is the image (the stick figure) passed in through the html
    const pic = document.getElementById("animation");
    //this sets the potiston to 0, resets the id is essentially saying the image hasn't moved and then increments by 5 each fram
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        //this if checks the width of the screen and if the position is that width, it stops the animation
        if (pos >= screen.availWidth-110) {
            clearInterval(id);
        } else {
            //if the animation hasn't hit the width of the screen, then it keeps moving the animation left by the incremented position in pixels
            pos++;
            pic.style.left = pos + "px";
        }
    }
}
