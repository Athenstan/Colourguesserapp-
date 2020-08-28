var colours = [
    "rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)", 
	"rgb(255, 0, 255)"
    ];

var squares = document.querySelectorAll(".square");
var pickedcolour = pickcolour(); 
var colourdisplay = document.getElementById("colourdisplay");
var messege = document.querySelector("#message")

colourdisplay.textContent = pickedcolour; 

for(var i =0; i < squares.length; i++){
    // Adding initial colours to squares 
    squares[i].style.background = colours[i];

    // Ading click listeners to the squares
    squares[i].addEventListener("click", function(){
        //Grabbing colour of picked square and compare it to picked colour
        var clickedcolour = this.style.background;
  
        //Comparing 
        if(clickedcolour === pickedcolour){
            messege.textContent = "Correct!" 
            changeColours(clickedcolour);
            } else {
            this.style.background = "#232323"
            messege.textContent = "Try again!"
        }
        
    });
}

function changeColours(colour){
    // Loop over an array and change colour 
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = colour; 
    }
}

function pickcolour(){
    var random = Math.floor (Math.random() * colours.length); 
    return colours[random]; 
}











