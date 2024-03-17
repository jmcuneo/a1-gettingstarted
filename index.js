// set emoji
document.getElementById('year').innerHTML=twemoji.parse('2️⃣0️⃣2️⃣5️⃣');

// bounce image 
var dir = [-1,1];
var coords = [0,0];
var speed = 5;
var bouncer = document.getElementsByTagName('bouncer')[0];
var video = document.getElementsByTagName('video')[0];
var is_started = false;

function step(){
    var rect = bouncer.getBoundingClientRect();
    var body = document.body;

    var width = body.scrollWidth-rect.width
    var height = body.scrollHeight-rect.height

    if(!is_started){
        coords=[width,0];
        is_started=true;
    }

    // move
    coords[0]+=dir[0]*speed 
    coords[1]+=dir[1]*speed 

    // bounce
    if(coords[0]<0){
        dir[0]*=-1;
        coords[0]*=-1
    }
    if(coords[1]<0){
        dir[1]*=-1;
        coords[1]*=-1
    }
    if(coords[0]>width){
        dir[0]*=-1;
        coords[0]=width*2-coords[0]
    }
    if(coords[1]>height){
        dir[1]*=-1;
        coords[1]=height*2-coords[1]
    }

    
    //set
    bouncer.style.left = coords[0]+'px';
    bouncer.style.top = coords[1]+'px';
    bouncer.style.right="";
}

setInterval(step,10)


// play video

var play_interval;

function play(){
    video.play().then(()=>{
        console.log("played");
        clearInterval(play_interval);
    }).catch(()=>{})
}

play_interval=setInterval(play,100)

// 

var graphic = document.getElementsByTagName('graphic')[0];

function graphicDesignIsMyPassion(){
    graphic.classList.toggle("graphic_hide");
}

function graphicMove(){
    graphic.classList.toggle("graphic_move");
}

setInterval(graphicMove,100)