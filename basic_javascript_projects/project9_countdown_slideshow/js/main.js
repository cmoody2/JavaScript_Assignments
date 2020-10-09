
var slideIndex = 1;                 // assign variable "slideIndex" a value of 1
showSlides(slideIndex);                 //assign function "showSlides" a parameter of "slideIndex"

// Next/previous controls
function plusSlides(n) {                //create function "plusSlides" with  parameter (n) 
    showSlides(slideIndex += n);            //assign function "showSlides" a new parameter of: slideIndex = slideIndex + n
}

// Thumbnail image controls
function currentSlide(n) {              //create function "currentSlide" with parameter (n)
    showSlides(slideIndex = n);             //assign function "showSlides" a parameter of: slideIndex assigned a value of (n)
}

function showSlides(n) {                                        //create function "showSlides" with parameter (n)                           
    var i;                                                          //pass variable "i" as undefined
    var slides = document.getElementsByClassName("mySlides");       //assign variable "slides" a value equal to the method with class name"mySlides" (mySlides class has 3 elements in this case)
    var dots = document.getElementsByClassName("dot");              //assign variable "dots" a value equal to the method with class name "dot" (dot class has 3 elements in this case)
    if (n > slides.length) {slideIndex = 1}                         //create conditional statement, evaluate "if" n is less than slides.length(), assign slideIndex a value of 1
    if (n < 1) {slideIndex = slides.length}                         //create conditional statement, evaluate "if" n is greater than 1, assign slideIndex a value equal to slides.length()
    for (i = 0; i < slides.length; i++) {                           //create "for" loop. 1st- initialize i as 0. 2nd- evaluate if i is less than slides.length(), if so proceed with loop. 3rd- when loop finishes, increment i by 1 and evaluate 2nd statement again
        slides[i].style.display = "none";                           //set slides(at index[i]) display to "none". (hidden)
    }
    for (i = 0; i < dots.length; i++) {                                //create "for" loop. 1st- initialize i as 0. 2nd- evaluate if i is less than dots.length(), if so proceed with loop. 3rd- when loop finishes, increment i by 1 and evaluate 2nd statement again
        dots[i].className = dots[i].className.replace(" active", "");       //if dots(at index[i]) class name is "dots active", replace active with nothing("") so new class name is "dots"
    }
    slides[slideIndex-1].style.display = "block";                    //set slides(at slideIndex -1) display to "block". (show)
    dots[slideIndex-1].className += " active";                       //set dots(at slideIndex - 1) class name to "dots active". (highlight)
}


// Countdown timer
function countdown() {                                              //create function "countdown"
    var seconds = document.getElementById("seconds").value;             //assign variable "seconds" equal to the value of the user input with id="seconds" 

    function tick() {                                               //create function "tick"
        seconds = seconds - 1;                                      //assign variable "seconds" a new value equal to "seconds" - 1
        timer.innerHTML = seconds;                                  //return current seconds to element in the HTML file with id="timer"
        setTimeout(tick, 1000);                                     //set a delay in processing of function tick by 1000 milliseconds(1 second)
    if(seconds == -1) {                                             //create conditional statment, evaluate "if" variable "seconds" is equal to -1
        alert("Time's up!");                                        //if above statement is true the invoke a window alert containing provided string
    }
        }
    tick();                                                         //call function "tick" within itself to make this function recursive(will be done again)
}