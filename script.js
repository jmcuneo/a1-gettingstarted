async function typewriter() {
    let element = document.getElementById("typewrite");
    let button = document.getElementById("blink");
    button.style.display = "none";

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    let currHeight = 100;
    while (currHeight > 0) {
        currHeight -= 1;
        element.style.height = `${currHeight}%`
        await sleep(100);
    }
}