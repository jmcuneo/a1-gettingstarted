function bounded(x, y) {
    var epsilon = 0.0001; //minimum recognized change in height
    return Math.abs(y - x) < epsilon;
}

document.addEventListener('DOMContentLoaded', () => {
    const drawBox = document.querySelector("#p-border");
    drawBox.width = 600;
    drawBox.height = 600;
    const ctx = drawBox.getContext("2d");

    var coords = {x: drawBox.width / 2, y: drawBox.height / 2 };
    var mouseCoords = undefined;
    var force = {x: 0, y: 0};

    var radius = 20; //size of the ball
    var friction = 0.2; //horizontal decceleration while touching the ground
    var gravity = 0.5; //downwards acceleration
    var terminalVelocity = 20; //maximum fall speed
    var elasticity = 0.5; //percentage of momentum to retain on collision
    
    function update() {
        const lastStep = coords;
        if(mouseCoords) {
            force = { x: mouseCoords.x - coords.x, y: mouseCoords.y - coords.y };
        }
        else {
            if((gravity >= 0 && bounded(drawBox.height - radius, coords.y)) || (gravity <= 0 && bounded(radius, coords.y))) {
                if(force.x > 0) {
                    force.x = Math.max(0, force.x - friction);
                } else if(force.x < 0) {
                    force.x = Math.min(0, force.x + friction);
                }
            }
            if(lastStep.y === coords.y && (bounded(radius, coords.y) || bounded(drawBox.height - radius, coords.y))) {
                force.y = -force.y * elasticity;
            }
            if(lastStep.x === coords.x && (bounded(drawBox.width - radius, coords.x) || bounded(radius, coords.x))) {
                force.x = -force.x * elasticity;
            }
        }

        if(!mouseCoords && gravity !== 0) {
            if(gravity > 0) {
                const delta = Math.min(gravity, (drawBox.height - radius) - coords.y) / gravity;
                force.y =  force.y + delta * gravity;
            } else {
                const delta = Math.max(gravity, radius - coords.y) / gravity;
                force.y =  force.y + delta * gravity;
            }
            if(bounded(0, force.y)) {
                force.y = 0;
            }
        }

        force = {
            x: Math.max(-terminalVelocity, Math.min(terminalVelocity, force.x)),
            y: Math.max(-terminalVelocity, Math.min(terminalVelocity, force.y))
        }

        coords = {
            x: Math.max(Math.min(drawBox.width - radius, coords.x + force.x), radius),
            y: Math.max(Math.min(drawBox.height - radius, coords.y + force.y), radius)
        }

        //console.log(coords);
        //console.log(force);

        ctx.fillStyle = "#acacac";
        ctx.fillRect(0, 0, drawBox.width, drawBox.height);

        ctx.beginPath();
        ctx.fillStyle = "#E69927";
        ctx.arc(coords.x, coords.y, radius, 0, 2  * Math.PI);
        ctx.fill();
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.closePath();

        window.requestAnimationFrame(update);
    }

    drawBox.onmousedown = (mouseEvent) => {
        if(Math.sqrt(Math.pow(mouseEvent.offsetX - coords.x, 2) + Math.pow(mouseEvent.offsetY - coords.y, 2)) <= radius)
            mouseCoords = { x: mouseEvent.offsetX, y: mouseEvent.offsetY };
    };
    drawBox.onmousemove = (mouseEvent) => { 
        if(mouseCoords)
            mouseCoords = { x: mouseEvent.offsetX, y: mouseEvent.offsetY }
    };
    drawBox.onmouseup = () => { mouseCoords = undefined };

    window.requestAnimationFrame(update);

    // Update settings -----------------------------------------------------------------------------
    const radiusSelector = document.querySelector("#radius");
    radiusSelector.onchange = () => {
        radius = parseInt(radiusSelector.value);
    }
    const frictionSelector = document.querySelector("#friction");
    frictionSelector.onchange = () => {
        friction = parseFloat(frictionSelector.value);
    }
    const gravitySelector = document.querySelector("#gravity");
    gravitySelector.onchange = () => {
        gravity = parseFloat(gravitySelector.value);
    }
    const terminalVelocitySelector = document.querySelector("#terminalVelocity");
    terminalVelocitySelector.onchange = () => {
        terminalVelocity = parseFloat(terminalVelocitySelector.value);
    }
    const elasticitySelector = document.querySelector("#elasticity");
    elasticitySelector.onchange = () => {
        elasticity = parseFloat(elasticitySelector.value);
    }
});