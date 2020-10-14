function getReceipt() {                                             //this is our function for processing receipts                                
    var text1 = "<h3>You Ordered:<h3>";                                 // assign variable text1 a string value
    var runningTotal = 0;                                               //assign runningTotal and sizeTotal starting values of 0
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");            //this creates an array of all available sizes
    for (var i = 0; i < sizeArray.length; i++) {                        //for loop to run through each available size 
        if (sizeArray[i].checked) {                                     //check is size at index[i] is selected
            var selectedSize = sizeArray[i].value;                      //assign variable selectedSize as the user selected size 
            text1 = text1+selectedSize+"<br>";                          //add selected size to order list
        }
    }
    if (selectedSize === "Personal Pizza") {                            //these comparison statements correspond to each available size, and assigns each a price(sizeTotal)
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Party Pizza") {
        sizeTotal = 20;
    }
    runningTotal = sizeTotal;                                               //assign runningTotal a value of selected sizes price
    console.log(selectedSize+" = $"+sizeTotal+".00");                           //log selected size and total of that size, total will have a $ and deciaml point with two empty spaces
    console.log("size text1: "+text1);                                          //log selected size for order list
    console.log("subtotal: $"+runningTotal+".00");                              //log subtotal of selection thus far
    getTopping(runningTotal,text1);                                             //pass function getTopping parameters of runningTotal and text1
};

function getTopping(runningTotal, text1) {                                          // function for selected toppings
    var toppingTotal = 0;                                                             //assign variable topping total a starting value of 0
    var selectedTopping = [];                                                           //declare a empty array to use for user selected toppings
    var toppingArray = document.getElementsByClassName("toppings");                     //this gets an array of all the available toppings
    for (var j = 0; j < toppingArray.length; j++) {                                         //for loop to iterate through array of available toppings
        if (toppingArray[j].checked) {                                                      //check to see if topping at index[j] is selected
            selectedTopping.push(toppingArray[j].value);                                    //add selected topping to our user selected array of toppings
            console.log("selected topping item: ("+toppingArray[j].value+")");              //log the selected choices name to console
            text1 = text1+toppingArray[j].value+"<br>";                                       //add selected topping choice to order list
        }
    }
    var toppingCount = selectedTopping.length;                                       //assign toppingCount a value of the length of user selected array of toppings
    if (toppingCount > 1) {                                                             //if toppingCount is greater than 1, minus total number by 1 and set as toppingTotal. first topping is free
        toppingTotal = (toppingCount - 1);
    } else {                                                                            //otherwise if no toppings or 1 is selected, set toppingTotal to 0
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);                                       //assign runningTotal value of previous runningTotal plus the toppingTotal
    console.log("total selected topping items: "+toppingCount);                             //log total amount of toppings selected
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");        //log toppingCount and result of toppingTotal 
    console.log("topping text1: "+text1);                                                   //log the selected topping elements to the order list
    console.log("Purchase Total: "+"$"+runningTotal+".00");                                     //log total price of purchase
    document.getElementById("showText").innerHTML=text1;                                    //return order list to document
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+              //return total price to document
        runningTotal+".00"+"</strong></h3>";
};