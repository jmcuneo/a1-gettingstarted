//event listeners to change the color of an element when the mouse hovers over it
const exp = document.getElementById('Exp');

exp.addEventListener('mouseover', () => {
  exp.style.backgroundColor = '#00FFD8';
});

exp.addEventListener('mouseout', () => {
  exp.style.backgroundColor = '';
});