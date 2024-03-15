function typewriter() {
    console.log("Called!");
    let characters = document.getElementById("typewrite");
    console.log(characters);

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    for (let i = 0; i < characters.length; i++) {
        characters[i].style.color = "rgb(0, 210, 0)";
        console.log(characters[i]);
        sleep(100);
    }
}