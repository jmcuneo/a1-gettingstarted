window.onload = function() {
    var modal = document.getElementById("modal");

    var img = document.getElementById("sugar");
    var modalImg = document.getElementById("bigSugar");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }

    var footer = document.getElementById("footer");
    var details = document.getElementById("details");
    details.addEventListener("toggle", (event) => {
        if (details.open) {
            footer.style.paddingTop = "0%";
        } else {
            footer.style.paddingTop = "3%";
        }
    });
}

