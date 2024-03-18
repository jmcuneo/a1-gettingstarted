const bar = document.getElementById('bar');
let direction = 'right'; // Initial direction
let barLeftPosition = 0; 
let barSpeed = 3;

function animateBar() {
  const windowWidth = window.innerWidth;  // Get the width of the window\
  // Move the bar based on direction
  if (direction === 'right') {
    barLeftPosition += barSpeed; // Move to the right
    bar.style.left = barLeftPosition + 'px';
    // Change direction if it hits the right edge
    if (barLeftPosition + bar.offsetWidth >= windowWidth) {
      direction = 'left';
    }
  } 
  else {  
    barLeftPosition -= barSpeed; // Move to the left 
    bar.style.left = barLeftPosition + 'px';

    // Change direction if it hits the left edge
    if (barLeftPosition <= 0) {
      direction = 'right';
    }
  }
  requestAnimationFrame(animateBar); // Repeat the animation
}
requestAnimationFrame(animateBar); 
