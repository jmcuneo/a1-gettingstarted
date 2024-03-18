var heading = document.getElementById("heading")
var headingPosition = 0;
var movingRight = true;

// Animate the heading text left and right
function animateText()
{
    if (movingRight)
    {
        // Increment to the right
        headingPosition += 0.2;
        if (headingPosition > 5) movingRight = false;
    }
    else
    {
        // Increment to the left
        headingPosition -= 0.2;
        if (headingPosition < -5) movingRight = true;
    }

    heading.style.transform = "translateX(" + headingPosition + "%)";
}

// Animate the text on an interval
setInterval(animateText, 50);