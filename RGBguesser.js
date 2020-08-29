var colours = generateRandomColours(6);

var squares = document.querySelectorAll(".square");
var pickedcolour = pickcolour(); 
var colourdisplay = document.getElementById("colourdisplay");
var messege = document.querySelector("#message");
var  h1 = document.querySelector("h1");

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
            h1.style.background =clickedcolour; 
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

function generateRandomColours(num){
    //make an array 
    var arr = []

    // add num randon colours to array 
    // repeat num times
    for (var i = 0; i<num; i++){
        // get a random number and push into an array 
        arr.push(randomColour()); 
    }
    // return array 
    return arr; 

}

function randomColour(){
    //Generating a red, green and blue random number  for RGB
    var r = Math.floor(Math.random() * 256); 
    var g = Math.floor(Math.random() * 256); 
    var b = Math.floor(Math.random() * 256); 

    // return colours
    return "rgb(" + r + ", " + g + ", " + b + ")";



}









