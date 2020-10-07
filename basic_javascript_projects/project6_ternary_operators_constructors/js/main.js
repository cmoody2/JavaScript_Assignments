//*TERNARY OPERATORS*

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


//*OBJECT CONSTRUCTOR FUNCTION*

function Keyboard(model, designer, price, color) {              //create class 'Keyboard' constructor with parameters: model, designer, price, color 
    this.Keyboard_model = model;                                  //assign a potential object's 'model' property to the default class parameter 'model' using the "this" keyword to reference said object
    this.Keyboard_designer = designer;                              //assign a potential object's 'designer' property to the default class parameter 'designer' using the "this" keyword to reference said object
    this.Keyboard_price = price;                                      //assign a potential object's 'price' property to the default class parameter 'price' using the "this" keyword to reference said object
    this.Keyboard_color = color;                                        //assign a potential object's 'color' property to the default class parameter 'color' using the "this" keyword to reference said object
}
var Chris = new Keyboard("Southpaw 65+", "Reconsiderit", 210, "Raw Aluminum");    //create new object "Chris" with included properties using the constuctor function with the keyword "new"
var Emily = new Keyboard("No.2", "Keycult", 900, "Dark Gray and Brass");            //create new object "Emily" with included properties using the constructor function with the keyword "new"
var Erik = new Keyboard("Jane v2 CE", "TGR", 550, "Black");                           //create new object "Erik" with included properties using the constructor function with the keyword "new"
function keebsFunc() {                                                                              //create function 'keebsFunc'
    document.getElementById("new_and_this").innerHTML =                                               //create method with id="new_and_this" that returns concatenated string using the specified object's properties
    "Emily has a " + Emily.Keyboard_color + "-colored " + Emily.Keyboard_model +
    " designed by " + Emily.Keyboard_designer + " that retailed for $" + Emily.Keyboard_price + ".";
}


//*NESTED FUNCTION*
function compMemFunc() {                                   // create function 'compMemFunc'
    document.getElementById("compMem").innerHTML = comp();   //create method that returns result of function 'comp'
    function comp() {                                          //create function 'comp'
        var samsung = 89;                                        //assign variable samsung a value of 89
        function budget() {samsung += 10;}                         //create a nested function 'budget' which will use the variable 'samsung' in an expression
        budget();                                                    //set results of nested function which would be samsung(99) = samsung(89) + 10
        return samsung;                                                //return new value of variable 'samsung' from nested function 'budget'
    }
}