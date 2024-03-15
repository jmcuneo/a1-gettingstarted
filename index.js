alert("Hello World!"); //throw alert when page loads

//code to create blinking text. Uses conditions to determine when to blink or when to hide
function blink() {
    let welcome = document.getElementById('welcome');
    if (welcome.style.visibility === 'hidden')
    {
        welcome.style.visibility = 'visible';
    }
    else
    {
        welcome.style.visibility = 'hidden';
    }
}

window.setInterval(blink, 500); //time interval for blinking

//code for changing background color when button clicked. getting the body element to apply color change
function normal(){
    let body = document.querySelector('body');
    body.style.backgroundColor = '#fff';
}

function change(){
    let body = document.querySelector('body');
    body.style.backgroundColor = '#61F274';
}
