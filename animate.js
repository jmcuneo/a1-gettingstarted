document.addEventListener('DOMContentLoaded',function(){
    var table = document.getElementById("bouncingTable");
    var marginLeft = 0;
    var speed = 4;

    setInterval(function(){
        var rect = table.getBoundingClientRect();
        if(rect.x <= 0 || rect.x + rect.width > window.innerWidth - 30){
            speed*=-1;
            marginLeft+=speed;
        }
        marginLeft+=speed;
        table.style.marginLeft=marginLeft+"px";
    },10);
});