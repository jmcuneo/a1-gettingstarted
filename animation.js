const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

function triggerSpin(catID) {
    console.log("clicked");
    let cat = document.getElementById(catID);
    let start = null;
    const duration = 2000;
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const angle = (progress / duration) * 360;

        cat.style.transform = `rotate(${angle}deg)`;

        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}
/* function createPhaseOut(time){
    return function(timeFrac){
        return 1 - time(1-timeFrac);
    }
}
function bounce(timeFrac){
    for(let i = 0, j = 1; 1; i+=j, b /= 2){
        if(timeFrac >= (7-4*i)/11){
            return - Math.pow((11-6 * i - 11 * timeFrac) / 4, 2) + Math.pow(j,2);
        }
    }
} */
/* function triggerBounce(){
    let incrDeg = (d) => `rotate(${d+1}deg)`;
    let getDeg = (a,b) => Math.round(Math.atan2(a,b) * (180/Math.PI));
    let getProps = (elem) => {
        var tm = elem.getPropertyValue("-webkit-transform") ||
                    elem.getPropertyValue("-moz-transform") ||
                    elem.getPropertyValue("-ms-transform") ||
                    elem.getPropertyValue("-o-transform") ||
                    elem.getPropertyValue("transform") ||
                    "none";
        if(tm != "none"){
            return tm.split('(')[1].split(')')[0].split(',');
        } else {
            return "fuck";
        }
    }
    let getDeg = (a,b) => Math.round(Math.atan2(tm[1],tm[0]) * (180/Math.PI)); 
    console.log("clicked");
    var cat = document.getElementById("cat");
    var catState = window.getComputedStyle(cat, null);
    cat.style.transform = incrDeg();
    var props = getProps(catState);
    for(i = 0; i < 360; i++){
        console.log(i);
        console.log(incrDeg(getDeg(props[1],props[0])));
        cat.style.transform = incrDeg(i);
        cat=document.getElementById("cat");
        catState = window.getComputedStyle(cat, null);
        props = getProps(catState);
        sleep(100);
    }
    //let catRt = cat.style.transform = degHelper();
     animate({
        duration: 2000,
        timing: makePhaseOut(bounce),
        draw(progress){
            cat.style.top = to*progress + 'px'

        }
    }); 
}; */