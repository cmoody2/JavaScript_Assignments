var darkSoda = 'Pepsi or Coke?'     //assigns the variable 'darkSoda' a string value

window.alert(darkSoda);         //creates a window alert displaying variable 'darkSoda

document.write('Sprite or 7up?<br>');       //prints string inside page body

var Soda = " This is Soda choices.<br><br>";        //assigns variable 'Soda' a string value

document.write(Soda);                                  //prints variable 'Soda'

document.write(" Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded.<br><br>")          //prints string that uses 'Escaped' characters using a "\"

document.write("\"Be who you are and say what you feel,"+" because those who mind don\'t matter and those who matter don\'t mind.\""+" -Dr. Seuss<br><br>")     //prints a concatenation of several strings

var A = "\"If your can print \"Hello World\", you can change the world\"" + " -Raghu Venkatesh<br><br>"                             //assigns variable 'A' two strings that are concatenated and use 'Escaped' characters
document.write(A)

var Family = "The Griffins", Dad = "Peter", Mom = "Lois", olderSon = "Chris", Daughter = "Meg", youngerSon = "Stewie";              //assigns mutliple variables in one statement each with their own values
document.write(olderSon);

var Family = Family.fontcolor("blue");                                                                                      //assigns a font color for each variable
var Dad = Dad.fontcolor("green");
var Mom = Mom.fontcolor("orange");
var olderSon = olderSon.fontcolor("purple");
var Daughter = Daughter.fontcolor("red");
var youngerSon = youngerSon.fontcolor("yellow");
document.write(Daughter)

 var three = 3 + 3;                                                                                                     //assigns variable 'three' a value equal to the result of the expression
 document.write(three);

 function myFunction() {                                                                        //creates new function named 'myFunction' that uppercases text
     var A = document.getElementById("uppercase");                                            //assigns variable 'A' the method document.getElementById with id='uppercase'
     A.value = A.value.toUpperCase();                                                        //changes value of variable 'A' to uppercase
 }