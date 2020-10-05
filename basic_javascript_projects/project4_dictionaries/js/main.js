function keeb_dictionary() {                    //create function 'keeb_dictionary
    var Keyboard = {                             //initiate an object named 'Keyboard'
        Name: "Exclusive E6.5",                    //assign the key 'Name' a value of 'Exclusive E6.5
        Type: "65%",                                //assign the key 'Type' a value of '65%'
        Color: "Clear",                              //assign the key 'Color' a value of 'Clear'
        Material: "Polycarbonate",                    //assign the key 'Material' a value of 'Polycarbonate'
        Weight: "Brass",                               //assign the key 'Weight' a value of 'Brass'
        Switches: "Zeal Roselios",                      //assign the key 'Switches' a value of 'Brass'
        Price: 409.00,                                   //assign the key 'Price' a value of '490.00'
    };
    delete Keyboard.Type                                          //use 'delete' operator to del key 'Type' of object Keyboard
    document.getElementById("keeb").innerHTML = Keyboard.Type;     //create method with id="keeb" to return value of key 'Type' in object 'Keyboard'
}