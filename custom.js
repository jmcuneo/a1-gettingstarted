let courseTable = document.querySelector(".course-table");
courseTable.style.display = "none";
let webTechStack = document.querySelector(".web-tech-stack");
webTechStack.style.display = "none";
let activity = document.querySelector(".activity");
activity.style.display = "none";
let isHiddenTable = true;
let isHiddenTechStack=true;
let isHiddenActivity=true;
/**
 * If the table container is hidden then, shows the table container when button clicked.
 * Otherwise, hides the table. The table is hidden or not is detected by using a boolean flag.
 * @param input sent by table container that needs to be hidden or shown
 * @return nothing
 */

function hide(input){
    if(input===courseTable) {
        if (isHiddenTable) {
            input.style.display = "block";
            isHiddenTable = false;
        } else {
            input.style.display = "none";
            isHiddenTable = true;
        }
    }
    else if(input===webTechStack){
        if(isHiddenTechStack){
            input.style.display = "block";
            isHiddenTechStack = false;
        }
        else{
            input.style.display = "none";
            isHiddenTechStack = true;
        }
    }
    else{
        if(isHiddenActivity){
            activity.style.display = "block";
            isHiddenActivity = false;
        }
        else{
            activity.style.display = "none";
            isHiddenActivity = true;
        }
    }
}
/**
 * Animates the footer of the webpage. The footer floats as the postion of the footer is incremented by
 * the velocity in the multiples of 3. When the footer reaches the side of the page, the position is
 * again set to zero.
 * @return nothing
 */
var animatedFooter = document.getElementById('animated-footer');
var position = 0;
var velocity = 3;
function animate() {
    position += velocity;
    //The offsetWidth and more 50 px have been subtracted from the innerWidth to
    // avoid the side scrollbar when the footer reaches the side of the page.
    if (position > window.innerWidth-animatedFooter.offsetWidth-50) {
        position = 0;
    }
    animatedFooter.style.left = position + 'px';
    requestAnimationFrame(animate);
}
animate();
