function ride_function() {                                              //create function 'ride_function'
    var height, can_ride;                                                 //create variables 'height' and 'can_ride' 
    height = document.getElementById("height").value;                       //create method with id='height' to get user entered value and set equal to variable 'height'
    can_ride = (height < 52) ? "You are too short":"You are tall enough";     //use ternary operator to return 'true' or 'false' string based on condition and set equal to variable 'can_ride'
    document.getElementById("ride").innerHTML = can_ride + " to ride.";         //create method with id="ride" to return result of ternary operation concactenated with string
}

function voteFunc() {                                                           //create function 'voteFunc'
    var age, canVote;                                                             //create variables 'age' and 'canVote'
    age = document.getElementById("age").value;                                     //create method with id='age' to get user entered value and set equal to variable 'age'
    canVote = (age < 18) ? "Sorry you're not old enough to vote.":"You are old enough to vote!";    //use ternary operator to return 'true' or 'false' string based on condion and set equal to variable 'canVote'
    document.getElementById("vote").innerHTML = canVote;                              //create method with id="vote" to return result of ternary operation
}


function Keyboard(make, designer, price, color) {
    this.Keyboard_make = make;
    this.Keyboard_designer = designer;
    this.Keyboard_price = price;
    this.Keyboard_color = color;
}
var Chris = new Keyboard("Southpaw 65+", "Reconsiderit", 210, "Raw Aluminum");
var Emily = new Keyboard("No.2", "Keycult", 900, "Dark Gray and Brass");
var Erik = new Keyboard("Jane v2 CE", "TGR", 550, "Black");
function keebsFunc() {
    document.getElementById("new_and_this").innerHTML =
    "Emily has a " + Emily.Keyboard_color + "-colored " + Emily.Keyboard_make +
    " designed by " + Emily.Keyboard_designer + " that retailed for $" + Emily.Keyboard_price + ".";
}