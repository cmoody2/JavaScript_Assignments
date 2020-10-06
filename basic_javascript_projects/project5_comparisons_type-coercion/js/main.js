document.write(typeof "RAMA KARA" + "<br><br>");     //use typeof operator to identify given value's type, return result

var C = (98 > 101), D = (35 == 35);                                 //assign variables 'C' and 'D' boolean values
document.write("Am I a software developer? " + D + "<br><br>");      //write string with concatenated reuslt of variable 'D' 
document.write("Am I graphic designer? " + C + "<br><br>");                        //write stirng with concatenated result of variable 'C'

document.write("20" + 20);                          //return string using type coercion

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
    document.getElementById("InF").innerHTML = B + " " + A;       //create method with id="InF" to return infinty and -infinity with variables B and A
}

console.log(5+5);

console.log(5>10);



