const img = document.querySelector(".image");
let position = 0;
function animate(){
    position -= 1; // decrease position
    img.style.left = position + "px";

    if(position < -window.innerWidth/2){ // if off screen
        position = 1500; // position of right side
    }
    requestAnimationFrame(animate); // run frame by frame, learned from graphics
}

animate();