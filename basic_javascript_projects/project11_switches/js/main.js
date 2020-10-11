function gameFunction() {                                       //define funtion "gameFunction"
    var game_output;                                                //declare variable "game_output"
    var games = document.getElementById("game_input").value;        //Assign variable "games" a value of the user input value with id "game_input"
    var game_string = " is definitely a great game!";               //Assign variable "game_string" a string value
    switch(games) {                                                                 //define object "switch" with a parameter of variable "games"
        case "The Legend of Zelda: Breath of the Wild":                                     
            game_output = "The Legend of Zelda: Breath of the Wild" + game_string;          
        break;                                                                              
        case "Star Citizen":                                                                
            game_output = "Star Citzen" + game_string;
        break;                                                                                    //*these instructions apply to all elements within switch(games)*
        case "Super Mario Odyssey":                                                               //assign case of switch a string value
            game_output = "Super Mario Odyssey" + game_string;                                    //initialize variable "game_output" with a value of a string + variable "game_string"
        break;                                                                                    //break keyword to jump out of function                                                         
        case "Perfect Dark":
            game_output = "Perfect Dark" + game_string;
        break;
        case "The Witcher 3: Wild Hunt":
            game_output = "The Witcher 3: Wild Hunt" + game_string;
        break;
        case "Destiny 2":
            game_output = "Destiny 2" + game_string;
        break;
        case "Super Smash Bros: Ultimate":
            game_output = "Super Smash Bros: Ultimate" + game_string;
        break;
        default:                                                                                   //create a default element to display if no case match is found from user input
            game_output = "*Please enter a game exactly as written in the list.*";                 //assign game_output a sting value
    }
    document.getElementById("choice").innerHTML = game_output;                                     //define method "choice" that returns variable "game_output"
}


var string = " Are all Nintendo Switch games. The Nintendo Switch is one of my favorite consoles to play games on!"         //assign variable "string" a string value
var B = "";                                                                                                                 //assign variable "B" a empty value
var i;                                                                                                                      //declare variable "i"
for (i = 0; i < 3; i++) {                                                                                          //define conditonal statement using "for" loop
    var A = document.getElementsByClassName("switch")[i].innerHTML;                                                //assign variable "A" a value of: class "switch" at index [i]'s contents
    B += A + "<br>";                                                                                               //assign variable "B" a value of B = B + A + <br>
}
document.getElementById("output").innerHTML = B + "<br>" + string;                                                 //define method "output" that returns variable "B" + <br> + variable "string"


function myComp() {                                                                                                //define function "myComp"
    var a = document.getElementById("myComp");                                                                     //assign variable "a" a value of element(canvas) with id "mycomp"
    var ctx = a.getContext("2d");                                                                                  //assign variable "ctx" a value of: "a" with .getContext() method to access the canvases 2d drawing functions 
    var img = document.getElementById("computer");                                                                 //assign variable "img" a value of the element(image) with id "computer"
    ctx.drawImage(img,10,10);                                                                                      //assign properties of ctx using .drawImage(img,X-axis,Y-axis) method
}


var a = document.getElementById("myComp");                                                                         //assign variable "a" a value of element(canvas) with id "mycomp"                                                              
var ctx = a.getContext("2d");                                                                                      //assign variable "ctx" a value of: "a" with .getContext() method to access the canvases 2d drawing functions                                                              

var grd = ctx.createLinearGradient(0, 0, 480, 0);                                                                    //assign variable "grd" a value of: "ctx" with .createLinearGradient(X-start,Y-start,X-end,Y-end) method to access canvas gradient functions. 
grd.addColorStop(0, "red");                                                                                          //assign first color for gradient using .addColorStop() method      *gradient uses a scale of 0 to 1(decimal numbers are okay*)
grd.addColorStop(0.5, "blue");                                                                                       //assign second color for gradient using .addColorStop() method
grd.addColorStop(1, "black");                                                                                        //assign third color for gradient using .addColorStop() method

ctx.fillStyle = grd;                                                                                                 //assign ctx gradient as the fillstyle
ctx.fillRect(10, 10, 500, 500);                                                                                      //assign ctx gradient a rectangle shape different values(x-start, y-start, x-end, y-end)
