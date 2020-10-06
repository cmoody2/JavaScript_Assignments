//*TYPEOF SECTION*

document.write("\"RAMA KARA\" is a: " + typeof "RAMA KARA" + "<br><br>");     //use typeof operator to identify given value's type, return result


//*BOOLEAN OPERATOR SECTION*
var C = (98 > 101), D = (35 == 35);                                 //assign variables 'C' and 'D' boolean values
document.write("Am I a software developer? " + D + "<br><br>");      //write string concatenated with reuslt of variable 'D' 
document.write("Am I graphic designer? " + C + "<br><br>");                        //write stirng concatenated with result of variable 'C'


//*TYPE COERCION SECTION*

document.write("20" + 20);                          //return string using type coercion


//*NaN SECTION*

function testNaN() {                                    //create function 'testNaN'
    document.getElementById("NaN").innerHTML = 0/0;      //create method with id="NaN" to return the value 'Not a Number'
}

function true_NaN() {                                                          //create function 'true_NaN'
    document.getElementById("TNaN").innerHTML = isNaN('String of Strings');     //create method with id="TNaN" to return 'true' using isNaN function
}

function false_NaN() {                                              //create function 'false_NaN'
    document.getElementById("FNaN").innerHTML = isNaN('2020');       //create method with id="FNaN" to return 'false' using isNaN function
}

function finity() {                                             //create function 'finity'
    var B = 34E454, A = -34E454;                                 //create variabes 'B' and 'A' with values 34E454 and -34E454
    document.getElementById("InF").innerHTML = B + " or maybe " + A;       //create method with id="InF" to return infinty and -infinity with variables B and A
}


//*CONSOLE LOG SECTION*

console.log(5+5);                       //display result of 5+5 in a console log

console.log(5>10);                      //display boolean result of 5>10 in console log


//*'===' OPERATOR SECTION*

function coercion() {                                                //create function 'coercion'
var V = "", W = "fifty-two", X = "52", Y = 52, Z = 52;                 //assign values to variables 'V', 'W', 'X', 'Y', and 'Z'
var truth = (Y===Z), falseDifD = (X===Y),                               //assign variables a value equal to result of a comparions check using "===" operator
falseDifV = (W==X), falseDifBoth = (Z===V);
var truth = ("52 <= 52 in Javascript: " + truth + "<br><br>");                                  //assign variable 'truth' a string value 
var falseDifD = "\"52\" and 52 are the same in Javascript: " + falseDifD + "<br><br>";              //assign variable 'falseDifD' a string value
var falseDifV = "\"fifty-two\" and \"52\" are the same in Javascript: " + falseDifV + "<br><br>";         //assign variable 'falseDifV' a string value
var falseDifBoth = "\"undefined variable\" and 52 are equal in Javascript: "                            //assign variable 'falseDifBoth' a string value
+ falseDifBoth + "<br><br>";                                                                              
document.getElementById("comparisons").innerHTML = truth + falseDifD +                  //create method with id="comparisons" to return string containing all mentioned variables
falseDifV + falseDifBoth;
}


//*LOGICAL OPERATORS*

function andOperator() {                                                    //create function 'andOperator'
    var size = 2>1 && 3>2;                                              //assign variable 'size' a value of "True" with boolean logical operator AND
    document.getElementById("keebSize").innerHTML = "the answer is: " + size;               //create method with id="keebSize" to return string concatenated with variable 'size'    
}

function orOperator() {                                                    //create function 'orOperator'
    var color = 2<1 || 3<2;                                           //assign variable 'color' a value of "False" with bollean logical operator OR
    document.getElementById("keebColor").innerHTML = "the answer is: " + color;              //create method with id="keebColor" to return string concatenated with variable 'color'
}

function notOperator() {                                                            //create function 'notOperator'
    document.getElementById('not').innerHTML = "the answer is: " + ! (409 == 410);      //create method with id="not" to return string concatenated with NOT operator expression
}
