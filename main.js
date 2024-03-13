// store the background color
const bgColor = document.body.style.backgroundColor;

/**
 * toggle the darkness & lightness of the body container
 */
function toggleLightness() {
	// if the body is white (light), set it to a nice dark color
	// else, if it is dark, set it to white
	if (document.body.style.backgroundColor == 'rgb(255, 255, 255)'
	|| document.body.style.backgroundColor == '') {
		document.body.style.backgroundColor = '#2c3e50'
	} else {
		document.body.style.backgroundColor = "#FFFFFF"
	}
}

// bind the function as a callback to the click of a button
document.getElementById("mode").addEventListener("click", toggleLightness)


