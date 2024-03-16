var left = 0; //distance between left side of the screen and left of plane image
const flyPlane = function(){
  left = left + 10;
  if(left >= 530){
    return;
  }
  document.getElementById('plane').style.left = left + 'px';
  setTimeout(flyPlane, 50);
}