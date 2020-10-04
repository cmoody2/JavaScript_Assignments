function add_func() {                                           //create function 'add_func'
    var addition = 10 + 10;                                                     //assign variable addition value equal to 10+10
    document.getElementById("math").innerHTML = "10 + 10 = " + addition;                //create method with id="math" that returns string "10 + 10" and variable 'addition'
}

function sub_func() {                                           //create function 'sub_func'
    var subtraction = 20 - 15;                                                      //assign variable addition value equal to 20-15
    document.getElementById("math").innerHTML = "20 - 15 = " + subtraction;                     //create method with id="math" that returns "20 - 15" and variable 'subtraction'
}

function multi_div() {                                          //create function 'multi_div'
    var simple_multi = 12 * 12;                                         //assign variable 'simple_multi' value equal to 12 * 12
    var simple_div = simple_multi / 2;                                              //assign variable 'simple_div' value equal to variable 'simple_multi' / 2
    document.getElementById("M_D").innerHTML = "12 * 12 / 2 = " + simple_div;               //create method with id="M_D" that returns "12 * 12 / 2" and variable 'simple_div'
}

function multiple_exp() {
    var expressions = (10 + 5) * 2 / 3 - 5;
    document.getElementById("exp_result").innerHTML = "10 plus 5 times 2 divided by 3 minus 5 equals " + expressions;
}

function modulus() {                                            //create function 'modulus'
    var remainder = 25 % 3;                                             //assign variable 'remainder' value equal to remainder of 25 / 3
    document.getElementById("mod").innerHTML = "When you divide 25 by 3 you get a remainder of : " + remainder;         //create method with id="mod" that returns string and variable 'remainder'
}