alert("Hello World!");

function blink() {
    let name = document.getElementById('name');
    if (name.style.visibility === 'hidden')
    {
        name.style.visibility = 'visible';
    }
    else
    {
        name.style.visibility = 'hidden';
    }
}

window.setInterval(blink, 500);

function normal(){
    let body = document.querySelector('body');
    body.style.backgroundColor = '#fff';
}

function change(){
    let body = document.querySelector('body');
    body.style.backgroundColor = '#98FB98';
}
