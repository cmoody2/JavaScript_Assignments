function display() {                                                    //create function 'display'
    var A = "\"Norbauer Norbaforce Mark II\"", B = "\"Gok 7V\"";         //assign both variables 'A' and 'B' their values
    var A = A.fontcolor("blue");                                          //change font-color of variable 'A' to blue
    var B = B.fontcolor("red");                                            //change font-color of variable 'B' to red  
    var result = A +' and '+ B;                                             //assign variable 'result' equal to variables 'A' and 'B' concatenated
    document.getElementById('favKeyboards').innerHTML = result;              //assign document.getElementByID method an ID of 'favKeyboards'
}