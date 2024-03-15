/* Original code from alessiomaddaluno on Github, modified by me. */

let speed = 35;
let scale = 0.15; 
let canvas;
let ctx;

let animationOwl = {
    x: 100,
    y: 50,
    xspeed: 10, //distance moved each update
    yspeed: 10,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("bounce-screen");
    ctx = canvas.getContext("2d");
    animationOwl.img.src = 'images/animationImg.png';

    //set canvas dimenstions
    canvas.width  = 650;
    canvas.height = 550;

    update();
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        ctx.fillStyle = '#D9DCD6';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        //Draw owl and background
        ctx.fillRect(animationOwl.x, animationOwl.y, animationOwl.img.width*scale, animationOwl.img.height*scale);
        ctx.drawImage(animationOwl.img, animationOwl.x, animationOwl.y, animationOwl.img.width*scale, animationOwl.img.height*scale);
       
        //Move the owl
        animationOwl.x+=animationOwl.xspeed;
        animationOwl.y+=animationOwl.yspeed;
        
        //Check for collision
        checkBorderCollision();
        
        update();
    }, speed)
}

function checkBorderCollision(){
    if(animationOwl.x+animationOwl.img.width*scale >= canvas.width || animationOwl.x <= 0){
        animationOwl.xspeed *= -1;
    }
    if(animationOwl.y+animationOwl.img.height*scale >= canvas.height || animationOwl.y <= 0){
        animationOwl.yspeed *= -1;
    }
}
