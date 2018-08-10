var numbSquares = 6;
var colors = generateRandomColors(numbSquares);

var squares = document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	setupModeButtons();
	setupSquares();
}


function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numbSquares = 3: numbSquares = 6;
		reset();
	});
}
}

function setupSquares(){
for(var i = 0; i < squares.length; i++){
	//add initial colors
	squares[i].style.backgroundColor = colors[i];

	//add click listeners
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetbutton.textContent = "Play again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}
	reset();

}

function reset(){
	colors = generateRandomColors(numbSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
	//add initial colors
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display = "none";
	}
}

	h1.style.backgroundColor = "steelblue";
	resetbutton.textContent = "New Colors";
	messageDisplay.textContent = "";

}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numbSquares = 3;
// 	colors = generateRandomColors(numbSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numbSquares = 6;
// 	colors = generateRandomColors(numbSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}
// });

resetbutton.addEventListener("click", function(){
	reset();
})


function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for(var i =0; i < num; i++){

		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}