let border = document.getElementById("border");

function changeColor(){
    let colorList = document.getElementById("border").style.borderColor;
    let l = toColorList(colorList);
    l[0] = Math.floor(Math.random() * 255);
    l[1] = Math.floor(Math.random() * 255);
    l[2] = Math.floor(Math.random() * 255);

    document.getElementById("border").style.borderColor = toColorObject(l);
}

function toColorList(s){
    return s.replace(/[^\d,]/g, '').split(',').map(Number);
}

function toColorObject(l){
    return "#" + l[0].toString(16).padStart(2, '0') + l[1].toString(16).padStart(2, '0') + l[2].toString(16).padStart(2, '0');
}

window.onload = () =>{
    document.getElementById("border").style.borderColor = "#333333";
    let interval = setInterval(changeColor, 500);
}