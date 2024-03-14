timer = null;
function spawnFish(){
    clearInterval(timer);
    fish = document.getElementById("fish");
    pos = -100; 
    timer = setInterval(move, (Math.random() * 10) + 1);
}
function move(){
    if(pos > window.innerWidth + 100){
        fish.style.right = -100;
    }else{
        pos += 1;
        fish.style.right = pos + 'px';
    }
}