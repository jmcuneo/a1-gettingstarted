document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector("#p-overlay");

    document.querySelector("#p-overlay-close").onclick = () => {
        overlay.style.display = "none";
    }

    document.querySelector("#p-help").onclick = () => {
        overlay.style.display = "flex";
    }
});