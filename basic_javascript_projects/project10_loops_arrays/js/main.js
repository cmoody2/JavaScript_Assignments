//WHILE LOOP

function callL() {                              //Define function "callL"
    var num = " ";                              //Assign variable "num" value of undefined
    var A = 1;                                  //Assign variable "A" value of 1
    while (A < 13) {                                //"while" loop with conditional statement (if A is less than 13)
        num += "<br>" + A;                          //Assign variable "num" new value of num = num + <br> + A
        A++                                         //Increment A by 1
    }
    document.getElementById("Loop").innerHTML = num;        //define method "Loop" to return variable "num"
}

//LENGTH STRING PROPERTY
function string() {                                                     //Define function "string"
    var shoes = "I need want a pair of Nike LD Waffle Sacai Black";         //Assign variable "shoes" a string value
    var S = shoes.length;                                                   //Assign variable "S" a value of the length of variable "shoes"
    document.getElementById("buy").innerHTML = S;                           //Define method "buy" to return variable "S"
}

//FOR LOOP

function shoes() {                                                          //Define function "shoes"                                                 
    var releases = ["Nike Air Max 90 QS \"ACG\"", "Nike Adapt Auto Max",        //Assign variable "releases" an Array object
    "Adidas Dame 7 \"I Am My Own Fan\"", "Nike Vapormax 2020"];
    var listed = " "                                                            //Assign variable "listed" a value of undefined
    for (S = 0; S < releases.length; S++) {                                     //"For" loop with conditional statement (S = 0; if S is less than length of releases; increment S by 1)
        listed += releases[S] + "<br>";                                         //Assign listed a value of listed = listed + releases[S] + <br>
    }
    document.getElementById("oct").innerHTML = listed;                          //Define method "oct" to return variable "listed"
}

//ARRAY

function myShoes() {                                                            //Define function "myShoes"
    var myshoe = [];                                                            //Assign variable "myshoe" as an Array object
    myshoe[0] = "Adidas Ozweego Coral/Oranges";                                 //Assign element at index[0] a string value
    myshoe[1] = "Nike Air Max 97 Sunbursts";                                    //Assign element at index[1] a string value
    myshoe[2] = "Nike Air Max 97 Script Swooshs";                               //Assign element at index[1] a string value
    myshoe[3] = "Nike Air Max 90 Viotechs";                                     //Assign element at index[1] a string value
    document.getElementById("wearing_Today").innerHTML = "Today I will be wearing a pair of " + myshoe[3] + ".";        //Define method "wearing_Today" to return string concatenated with element at index[n]
}

//CONSTANTS

function constant_function() {                                                  //Define function "constant_function"
    const futureBuys = {type: "shoes", brand: "Jordan", model: "Denim 4s"};                         //Assign constant "futureBuys" a list object 
    futureBuys.model = "Fragment 3s";                                                               //Assign model property a new value of "Fragment 3s"
    futureBuys.price = "$625";                                                                      //Define a new property called price with a value of "$625"
    document.getElementById("constant").innerHTML = "If I wanted the " + futureBuys.brand + " " +             //Define method "constant" to return string concatenated with different property values
    futureBuys.model + " it would cost " + futureBuys.price + ", ouch!!!";
}

//LET KEYWORD

function collection() {                                             //Define function "collection"                                                                                      
    var current = 9;                                                        //Assign variable "current" a value of 9
    document.getElementById("current_collection").innerHTML =                   //Define method "current_collection" to return string concatenated with variable "current"
    "I currently have " + current + " pairs of shoes.<br>";
    {
        let current = 10;                                                           //Assign let (variable) "current" a value of 10
        document.getElementById("new_current").innerHTML =                          //Define method "new_current" to return string concatenated with let "current"
        "But I would like to have " + current + " pairs of shoes.<br>";
    }
}

//RETURN KEYWORD

function returnStatement() {                                                //Define function "returnStatement"
    var shoes1 = "My favorite family of shoes is the Nike Air Max line"         //Assign variable "shoes1" a string value
    return shoes1;                                                              //return variable "shoes1"
}
document.getElementById("favorite").innerHTML = returnStatement();              //Define method "favorite" that returns function "returnStatement"

//LET OBJECT

let sneaker = {                                                             //Define object "sneaker"                                                           
    brand: "Reebok",                                                            //Assign property "brand" a value of "Reebok"
    model: "Question",                                                          //Assign property "model" a value of "Question"
    color: "White Mint Glow",                                                   //Assign property "color" a value of "White Mint Glow"
    description : function() {                                                      //Define method "description function()"
        return "The " + this.brand + " " + this.model + " in " +                    //Return string value concatenated with diffrent properties of the object
        this.color + " is a interesting shoe.";
    }
};
document.getElementById("interesting").innerHTML = sneaker.description();           //Define method "interesting" to return object method "description"

//BREAK STATEMENT

var num = "";                                           //Assign variable "num" an empty value
var B;                                                      //Declare variable "B"
for (B = 1; B < 5; B++) {                                   //create "for" loop with a conditional statement
    if (B === 4) {break;}                                   //Use "if" statement with a conditon of: if B is the same as 4 jump out of loop
    num += B + " new pair of shoes!" + "<br>";              //Assign num a value of num = num + B + "new pair of shoe!" + <br>
}
document.getElementById("count").innerHTML = num;           //Define method "count" to return variable "num"

//CONTINUE STATEMENT

var num = "";                                           //Assign variable "num" an empty value
var J;                                                       //Declare variable "J"
for (J = 1; J < 7; J++) {                                    //create "for" loop with a conditional statement
    if (J === 2) {continue;}                                 //Use "if" statement with a condition of: if J is the same as 2 jump over that iteration of the loop
    num += J + " new pair of shoes!" + "<br>";               //Assign num a value of num = num + J + "new pair of shoes!" <br>
}
document.getElementById("misCount").innerHTML = num;         //Define method "misCount" to return variable "num"