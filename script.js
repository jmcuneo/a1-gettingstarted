window.addEventListener('load', (e) => {
    console.log("Window loaded!");
});

document.getElementById('tacoimg').addEventListener('click', doSimpleAnimation);

function doSimpleAnimation() {
    let taco = document.getElementById('tacoimg');
    let intervalId;
    let rotation = 0;
    let frame = () => {
        if (rotation === 360) {
           clearInterval(intervalId);
           return;
        }
        taco.style.transform = `rotate(${rotation++}deg)`;
    };
    intervalId = setInterval(frame, 3);
}