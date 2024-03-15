let courseTable = document.querySelector(".course-table");
courseTable.style.display = "none";
let webTechStack = document.querySelector(".web-tech-stack");
webTechStack.style.display = "none";
let activity = document.querySelector(".activity");
activity.style.display = "none";
let isHiddenTable = true;
let isHiddenTechStack=true;
let isHiddenActivity=true;
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
