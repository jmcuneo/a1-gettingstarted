let speed = 30;
let scale = 0.15; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;

let animationOwl = {
    x: 200,
    y: 200,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    animationOwl.img.src = 'animationImg.png';

    //Draw the "tv screen"
    canvas.width  = 650;
    canvas.height = 550;

    update();
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        ctx.fillStyle = '#D9DCD6';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //Draw animationOwl Logo and his background
        ctx.fillRect(animationOwl.x, animationOwl.y, animationOwl.img.width*scale, animationOwl.img.height*scale);
        ctx.drawImage(animationOwl.img, animationOwl.x, animationOwl.y, animationOwl.img.width*scale, animationOwl.img.height*scale);
        //Move the logo
        animationOwl.x+=animationOwl.xspeed;
        animationOwl.y+=animationOwl.yspeed;
        //Check for collision
        checkHitBox();
        update();
    }, speed)
}

//Check for border collision
function checkHitBox(){
    if(animationOwl.x+animationOwl.img.width*scale >= canvas.width || animationOwl.x <= 0){
        animationOwl.xspeed *= -1;
    }

    if(animationOwl.y+animationOwl.img.height*scale >= canvas.height || animationOwl.y <= 0){
        animationOwl.yspeed *= -1;
    }
}
