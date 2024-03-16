document.addEventListener('DOMContentLoaded', () => {
    const randomVar = document.querySelector('#face');
    function randomize() {
        randomVar.style.setProperty('transform', `scale3d(${Math.random() + 0.5}, ${Math.random() + 0.5}, ${Math.random() + 0.5}) rotate3d(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random() * 360}deg)`);
    }
      
    randomize();
    setInterval(randomize, 300);

    const toggle = document.querySelector("#happy-toggle")
    toggle.onclick = () => {
        if(toggle.classList.contains('active')) {
            toggle.classList.remove('active');
            toggle.textContent = "hide bonus happy face";
            randomize();
            randomVar.style.display = 'initial';
        }
        else {
            toggle.classList.add('active');
            toggle.textContent = "show bonus happy face";
            randomVar.style.display = 'none';
        }
    }
});