document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('element');

    element.addEventListener('mouseover', function() {
        this.style.opacity = '0';
    });

    element.addEventListener('mouseout', function() {
        this.style.opacity = '1';
    });
});