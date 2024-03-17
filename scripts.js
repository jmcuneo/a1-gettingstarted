/**
* Function that moves the box on the screen
*/
function moveBox(){
    var theBox = document.getElementById("box");
    console.log(theBox.width);
    theBox.style.width = 2 + "%";
    var width = 2;
    var timer = setInterval(runWidth, 1);

    /**
     * Function that extends the width of the box
     */
    function runWidth(){
        width = width + 2
        if( width == 52){
            clearInterval(timer);
        } else {
            
        theBox.style.width = width + "%";
        }
    }
    
}