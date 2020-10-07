var A = 5;                                              //assign variable A value of 5 (Global)
function multiplyNum() {                                    //create new function
    var B = 20;                                                 //assign variable B value of 20
    var result = B * A;                                             //assign variable 'result' value of  B * A
    document.write("20 times 5 equals: " + result + "<br><br>");        //write to document string concatenated with variable 'result'
}
function divideNum() {                                      //create new function 
    console.log( B / A);                                        //create a console log to debug code (B is local NOT global so undefined)
    var divide = B / A;                                             //assign variable divide value of B / A
    document.write("20 divided by 5 equals: " + divide + "<br>");       //write to document string concatenated with variable 'divide'
}
multiplyNum();
divideNum();