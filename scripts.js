const figure = document.body.querySelector("figure");
const benjamin = document.body.querySelector("img");
const bigCircle = document.body.querySelector(".big-circle");
const smallCircle = document.body.querySelector(".small-circle");

function getMouseXPos(xRef) {
	let panelRect = figure.getBoundingClientRect();
	return {
		x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * figure.offsetWidth,
	};
}

document.body.addEventListener("mousemove", function(e) {
	const mousePos = getMouseXPos(e.clientX);
	const documentCenterX = document.body.offsetLeft + (document.body.offsetWidth / 2);
	const	distX = mousePos.x - documentCenterX;

	if (Math.abs(distX) < 500) {
		benjamin.style.transform = "translate3d(calc(-50% + " + (-1 * distX)/6 + "px), 0, 0)";
		bigCircle.style.transform = "translate3d(calc(-50% + " + (-1 * distX)/12 + "px), 0, 0)";
		smallCircle.style.transform = "translate3d(calc(-50% + " + (-1 * distX)/3 + "px), 0, 0)";
	}
})
