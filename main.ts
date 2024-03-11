function main(){


}



function handleAnimation() {
    let id = null;
    const elem = document.getElementById("animation");
    let x = 175
    let y = 175;
    let posTimer = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (posTimer == 1500) {
            clearInterval(id);
        } else {
            posTimer++;
            let direction = {x: randInt(), y: randInt()};
            console.log(direction);
            x = (x + direction.x)%300;
            y = (y + direction.y) %300;
            console.log(x,y);
            elem.style.top = x + 'px';
            elem.style.left = y  +'px';

        }
    }
}

function randInt() {
    return Math.floor(Math.random() * 3) -1;
}