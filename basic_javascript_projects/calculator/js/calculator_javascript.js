const Calculator = {                         //creates an object to keep track of values
    Display_value: '0',                       //this displays 0 on the screen
    First_Operand: null,                       //this will hold the first operand of any expressions, we set it to null for now
    Wait_Second_Operand: false,                 //this checks whether or not the second operand has been input
    operator: null,                              //this will hold the operator, we set it to null for now
};

function Input_Digit(digit) {                                                               //this modifies values each time a button is clicked
    const { Display_value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {                                            //we are checking to see if Wait_Second_Operand is true and set Display_Value to the key that was clicked
        Calculator.Display_value = digit;                                       
        Calculator.Wait_Second_Operand = false;
    } else {                                                                                //this overwrites Display_Value if the current value is 0, otherwise it adds onto it
        Calculator.Display_value = Display_value === '0' ? digit : Display_value + digit;
    }
}

function Input_Decimal (dot) {                                  //this section handles decimal points
    if (Calculator.Wait_Second_Operand === true) return;        //this ensures that accidental clicking of the deciaml point doesn't cause bugs in your operation
    if (!Calculator.Display_value.includes(dot)) {              
        Calculator.Display_value += dot;                        //we are saying that if the Display_Value does not contain a decimal point we want to add a decimal point
    }
}

function Handle_Operator(Next_Operator) {                                               //this section handles operators
    const { First_Operand, Display_value, operator } = Calculator
    //when an operator key is pressed, we convert the current number
    //displayed on the screen to a number and then store the result in
    //Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_value);
    //checks if an operator already exists and if Wait_Second_Operand is true,
    //then updates the operator and exits from the function                                   
    if (operator && Calculator.Wait_Second_Operator) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {                                                                  //checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is performed for the operator
        //in the Perform_Calculation object and the function that matches the
        //operator is executed
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        result = Number(result).toFixed(9)                                                  //here we add a fixed amount of numbers after the decimal
        result = (result * 1).toString()                                                        //this will remove any trailing 0's
        Calculator.Display_value = parseFloat(result);                                          
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {                                                           //this defines the calculations of first and second operands with chosen operator
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,                 //defines division operator operations
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,                 //defines multiplication operator operations
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,                 //defines addition operator operations
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,                 //defines subtraction operator operations
    '=': (First_Operand, Second_Operand) => Second_Operand                                  //defines equals operator operations
};

function Calculator_Reset() {                                                  //this function resets the calculator back to default values
    Calculator.Display_value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {                                                 //this function updates the screen with the contents of Display_Value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_value;
}

Update_Display();
const keys = document.querySelector('.calculator-keys');                      //this section monitors button clicks
keys.addEventListener('click', (event) => {                                   
    const { target } = event;                                                 //the target variable is an object that represents the element that was clicked
    if (!target.matches('button')) {                                      //if the element that was clicked on is not a button, exit the function
        return;
    }
    if (target.classList.contains('operator')) {                            //if operator is clicked implement Handle_Operator function on target.value, then update display 
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {                             //if decimal operator is clicked implement Input_Decimal function on target.value, then update display
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {                           //ensures that AC clears the numbers from the Calculator
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);                                              
    Update_Display();
})