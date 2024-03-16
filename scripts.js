


function moveBox(){
    var theBox = document.getElementById("box");
    console.log(theBox.width);
    theBox.style.width = 2 + "%";
    var width = 2;
    var timer = setInterval(runWidth, 1);
    function runWidth(){
        width = width + 2
        if( width == 52){
            clearInterval(timer);
        } else {
            
        theBox.style.width = width + "%";
        }
    }
}