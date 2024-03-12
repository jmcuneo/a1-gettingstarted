alert("Hello World!");

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

window.setInterval(blink, 500);

function normal(){
    let body = document.querySelector('body');
    body.style.backgroundColor = '#fff';
}

function change(){
    let body = document.querySelector('body');
    body.style.backgroundColor = '#61F274';
}
