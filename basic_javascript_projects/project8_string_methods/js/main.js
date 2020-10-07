function concatFunc() {                                     //create new function
    var first = "I would very";                               //assign variable first a string
    var second = " much like to";                              //assign variable second a string
    var third = " buy the new KAT";                           //assign variable third a string
    var fourth = " \"Refined\" keycap";                        //assign variable fourth a string
    var fifth = " set.";                                                //assign variable fifth a string
    var wholeSentence = first.concat(second, third, fourth, fifth);                 //assign variable wholeSentence a string value of first concatenated with second, third, fourth, and fifth using concat method
    document.getElementById("sentence").innerHTML = wholeSentence;                  //create a method that returns wholeSentence
}

function sliceMethod() {                                                                  //create new function
    var switches = "I prefer linear switches to tactile due to the more silent sound.";     //assign variable "switches" a string value
    var slice = switches.slice(16,24);                                                          //assign variable "slice" a value of the slice() method applied to variable "switches"
    document.getElementById("slicedSection").innerHTML = slice;                                   //create method that returns the variable "slice"
}

function upperCaseFunc() {                                          //create new function
    var str = "gmk modo light";                                         //assign variable "str" a string value
    var up = str.toUpperCase();                                             //assign variable "up" a value of the toUpperCase() method applied to variable "str"
    document.getElementById("upperCase").innerHTML = up;                        //create method that returns the variable "up"
}

function searchFunc() {                                                         //create new function
    var str = "GMK MODO LIGHT";                                                       //assign variable "str" a string value
    var A = str.search("MODO");                                                             //assign variable "A" a value of the search() method applied to variable "str"
    document.getElementById("searchStr").innerHTML = "it starts after index: " + A;               //create method that returns a string concatenated with variable "A"
}

function numToString() {                                        //create new function
    var S = 243                                                     //assign variable "S" a value of 243
    document.getElementById("numStr").innerHTML = S.toString();         //create method that returns the toString() method applied to variable "S"
}

function toPrecision() {                                            //create new function
    var X = 145543.8977677                                              //assign variable "X" a value of 145543.8977677
    document.getElementById("precise").innerHTML = X.toPrecision(8);        //create method that returns the toPrecision() method applied to variable "X" *it will round the last part of the number
}

function toFixed() {                                                //create new function
    var Z = 2445.4544                                                   //assign variable "Z" a value of 2445.4544
    document.getElementById("fixed").innerHTML = Z.toFixed(3);              //create method that returns the toFixe(3) method applied to variable "Z"
}

function valueOfStr() {                                                //create new function
    var U = "This string is stringy!";                                        //assign variable "U" a value string value
    var result = U.valueOf();                                                     //assign variable "result" a value of the valueOf() method applied to variable "U"
    document.getElementById("value").innerHTML = result;                                  //create method that returns variable "result"
}