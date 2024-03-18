/* I found that if I had to initialize the timer globally or the fish's speed would carry
over between button presses */
timer = null;

/* Spawns a fish (onclick of the "Fish Spawner" button) and randomizes animation speed via interval*/
function spawnFish(){
    clearInterval(timer);
    fish = document.getElementById("fish");
    fish.style.visibility = "visible";
    currPos = Number(fish.style.right.split("p")[0]); 
    timer = setInterval(move, (Math.random() * 10) + 1);
}

/* Moves the fish for one 'frame' across the screen or resets the fish position 
and visibility if it hits the window width */
function move(){
    if(currPos < window.outerWidth){
        currPos += 1;
        fish.style.right = currPos + 'px';
    }else{
        fish.style.visibility = "hidden";
        fish.style.right = 0;
    }
}