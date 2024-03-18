var id = null;
var left = true;

// moves the WPI logo when hovering over
function move() {
  var elem = document.getElementById("wpiLogo");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos > 20) {
      left = false;
      pos--;
    } else if (pos < 0) {
        left = true;
        pos++;
    } else if (left) {
      pos++;
      elem.style.left = pos + 'px';
    } else { 
        pos--;
        elem.style.left = pos + 'px';
    }
  }
}

// stosp the movement of the WPI logo when not hovering
function stop() {
    clearInterval(id);
}

// pops up a message to confirm before opening resume
function popup() {
    if(confirm("Are you sure you would like to open a resume?")) {
        open("files/resume.pdf", '_blank');
    }
}