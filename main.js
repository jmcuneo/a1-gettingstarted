var interval = null
function tornado() {
	var tor = document.getElementById("tornado");
	var position = 500;
	clearInterval(interval)
	tor.style.visibility = "visible";
	tor.style.opacity = "1";
	interval = setInterval(animate, 10);
	function animate() {
		if (position < 50) {
			tor.style.opacity = position/50;
		}
		if (position == 0) {
			clearInterval(interval);
			tor.style.visibility = "hidden";
		}
		else {
			position --;
			tor.style.right = (position/5)+'%';
			tor.style.top = ((Math.sin(position/15)*80)+300) + 'px';
		}
	}
}
