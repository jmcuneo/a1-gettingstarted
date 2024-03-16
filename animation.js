const left = 0; //distance between left side of the screen and left of plane image
const flyPlane = function(){
  left = left + 20;
  document.getElementById('plane').style.left = left + 'px';
  setTimeout(flyPlane, 100);
}