const figures = document.querySelectorAll("figure");

figures.forEach(figure => {
    let isEnlarged = false;

    figure.addEventListener("click", () => {
        if (!isEnlarged) {
            const originalSize = parseFloat(getComputedStyle(figure).getPropertyValue('width'));
            const newSize = originalSize * 1.5;

            figure.style.transform = `scale(${newSize / originalSize})`;
            isEnlarged = true;
        } else {
            figure.style.transform = `scale(1)`;
            isEnlarged = false;
        }
    });
});