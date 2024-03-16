// Get all Cards
var cards = document.querySelectorAll(".card");
// For Each Card Add Animation
cards.forEach(function(element) {
    element.addEventListener("click", function() {
        element.classList.add("spin");
    });

    element.addEventListener("animationend", function() {
        element.classList.remove("spin");
    });
});

