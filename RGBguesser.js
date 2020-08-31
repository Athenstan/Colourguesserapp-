
var numsquares =6; 
var colours = [];
var squares = document.querySelectorAll(".square");
var pickedcolour; 
var colourdisplay = document.getElementById("colourdisplay");
var messege = document.querySelector("#message");
var  h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset"); 
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard"); 
var numsquares =6; 
var modebuttons = document.querySelectorAll(".mode")

init(); 

function init() {
    
    setupmodelistener();
    setupsquare();
 
    
    reset();
} 

function setupmodelistener(){
       //Mode buttons event listeners 
       for (var i = 0; i<modebuttons.length; i++){
        modebuttons[i].addEventListener("click", function(){
            modebuttons[0].classList.remove("selected");
            modebuttons[1].classList.remove("selected");
            this.classList.add("selected"); 
            // this.textcontent === "Easy" ? numsquares = 3: numsquares = 6; 
            if (this.textContent === "Easy"){
                numsquares =3; 
    
            }else {
                numsquares = 6; 
            }
            
            reset();
        })
    }

}

function setupsquare(){
    for(var i =0; i < squares.length; i++){

        // Ading click listeners to the squares
        squares[i].addEventListener("click", function(){
            //Grabbing colour of picked square and compare it to picked colour
            var clickedcolour = this.style.background;
      
            //Comparing 
            if(clickedcolour === pickedcolour){
                messege.textContent = "Correct!" 
                changeColours(clickedcolour);
                h1.style.background =clickedcolour; 
                resetbutton.textContent = "Play Again?"
                } else {
                this.style.background = "#232323"
                messege.textContent = "Try again!"
            }
        });
    }
}


// colourdisplay.textContent = pickedcolour; 


// Refactored 
// easy.addEventListener("click", function(){
//     easy.classList.add("selected");
//     hard.classList.remove("selected");
//     numsquares =3;
//     colours = generateRandomColours(numsquares);
//     pickedcolour = pickcolour(); 
//     colourdisplay.textContent = pickedcolour; 
//     for(var i =0; i<squares.length; i++){
//         if(colours[i]){
//             squares[i].style.background = colours[i];
//         } else {
//             squares[i].style.display = "none"; 
//         }
//     }

// })
// hard.addEventListener("click", function(){
//     hard.classList.add("selected");
//     easy.classList.remove("selected");
//     numsquares = 6
//     colours = generateRandomColours(numsquares);
//     pickedcolour = pickcolour(); 
//     colourdisplay.textContent = pickedcolour; 
//     for(var i =0; i<squares.length; i++){
//             squares[i].style.background = colours[i];
//             squares[i].style.display = "block"; 
        
//     }
    
// })
resetbutton.addEventListener("click", function(){
    // //generate new colours in the game 
    // colours = generateRandomColours(numsquares);
    // //pick new colour on array 
    // pickedcolour = pickcolour();
    // //change colour display to the picked colour: 
    // colourdisplay.textContent = pickedcolour; 
    // //Change the background to the colours:
    // resetbutton.textContent = "New Colours"
    // messege.textContent = ""
    
    // for(var i =0; i < squares.length; i++){
    //     // Adding initial colours to squares 
    //     squares[i].style.background = colours[i];
    // }
    // //reset the header to the original black colour 
    // h1.style.background = "steelblue"; 
    reset();
})

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

function reset(){ 
     //generate new colours in the game 
     colours = generateRandomColours(numsquares);
     //pick new colour on array 
     pickedcolour = pickcolour();
     //change colour display to the picked colour: 
     colourdisplay.textContent = pickedcolour; 
     //Change the background to the colours:
     resetbutton.textContent = "New Colours"
     messege.textContent = ""
     
     for(var i =0; i < squares.length; i++){
         if(colours[i]){
             squares[i].style.display = "block";
            squares[i].style.background = colours[i];
         } else {
             squares[i].style.display = "none";
         }
         // Adding initial colours to squares 
        
     }
     //reset the header to the original black colour 
     h1.style.background = "steelblue"; 
}









