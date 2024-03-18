// Function for changing the background color with animation
function changeBackgroundColor(element, startColor, endColor, duration) {
    let start = null;

    // This function will be called repeatedly to gradually change the color
    function step(timestamp) {
        if (!start) start = timestamp;
        let progress = (timestamp - start) / duration;
        let color = `rgb(
            ${Math.floor(startColor[0] + progress * (endColor[0] - startColor[0]))},
            ${Math.floor(startColor[1] + progress * (endColor[1] - startColor[1]))},
            ${Math.floor(startColor[2] + progress * (endColor[2] - startColor[2]))}
        )`;
        element.style.backgroundColor = color;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the element with id="animate"
    const animateMe = document.getElementById('animate');

    // Add click event listener to the element
    animateMe.addEventListener('click', function () {
        // Start color animation from yellow to red over 2 seconds
        changeBackgroundColor(animateMe, [255, 255, 0], [255, 0, 0], 2000);
    });
});
