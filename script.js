var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

// css.innerHTML = "linear-gradient(to right, rgb(0, 255, 0), rgb(255, 0, 0));";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;;
}

function getRandomColors() {
	color1.value = setRandomColor();
	color2.value = setRandomColor();
}

function randomGradient() {
	getRandomColors();
	setGradient();
}

// Tests to ensure listeners are working
// color1.addEventListener("input", function() {
// 	console.log(color1.value);
// });

// color2.addEventListener("input", function() {
// 	console.log(color1.value);
// });

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomGradient);