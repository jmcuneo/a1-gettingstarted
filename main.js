const bgColor = document.body.style.backgroundColor;

function toggleLightness() {
	if (document.body.style.backgroundColor == 'rgb(255, 255, 255)'
	|| document.body.style.backgroundColor == '') {
		document.body.style.backgroundColor = '#2c3e50'
	} else {
		document.body.style.backgroundColor = "#FFFFFF"
	}
}

document.getElementById("mode").addEventListener("click", toggleLightness)


