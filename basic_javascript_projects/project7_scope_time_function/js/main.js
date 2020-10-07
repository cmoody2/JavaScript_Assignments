var A = 5;                                              //assign variable A value of 5 (Global)
function multiplyNum() {                                    //create new function
    var B = 20;                                                 //assign variable B value of 20
    var result = B * A;                                             //assign variable 'result' value of  B * A
    document.write("20 times 5 equals: " + result + "<br><br>");        //write to document string concatenated with variable 'result'
}
function divideNum() {                                      //create new function 
    console.log( B / A);                                        //create a console log to debug code (B is local NOT global so undefined)
    var divide = B / A;                                             //assign variable divide value of B / A
    document.write("20 divided by 5 equals: " + divide + "<br><br>");       //write to document string concatenated with variable 'divide'
}
multiplyNum();
divideNum();

function budgetFunc() {                                                 //create new function
    var budget = document.getElementById("budget").value;                   //assign variable "budget" the value of the user input value named 'budget' 
    var honda = 15500;                                                          //assign variable "honda" a value of 15500
    if (budget >= honda) {                                                          //create condidtional statement using if operator to find if "budget" is higher than or equal to "honda"
        carPurchase = "You Have enough to buy the new Honda Civic!";                    //assign variable "carPurchase" a string value
    }
    else {                                                                          //use else operator to present an alternate path if the "if" statement is false
        carPurchase = "Sorry, You don't have enough to buy the new Honda Civic.";           //assign variable "carPurchase" a string value
    }
    document.getElementById("carBudget").innerHTML = carPurchase;                       //create method that returns variable "carPurchase" from either "if" or "else" of the conditional statment
}

function Time_function() {                               //create new function
    var Time = new Date().getHours();                       //assign variable "Time" the value of the local time using Date object and .getHours method
    var Reply;                                                  //assign variable "Reply" as undefined
    if (Time < 12 == Time > 0) {                                    //create conditional statement using "if" operator to compare if "Time" is less than 12 but greater than 0
        Reply = "It is morning time!";                                  //assign variable "Reply" a string value
    }   
    else if (Time > 12 == Time < 18) {                   //use "else if" operator as alternate path if "if" is false, that compare if "Time" is greter than 12 but less than 18
        Reply = "It is the afternoon.";                         //assign variable "Reply" a sting value
    }
    else {                                                  //use "else" operator as alternate path if "if" and "else if" are false
        Reply = "it is evening time.";                              //assign variable "Reply" a string value
    }
    document.getElementById("Time_of_day").innerHTML = Reply;       //create method that returns variable "Reply" from either "if", "else if", or "else"  of the conditional statement
}