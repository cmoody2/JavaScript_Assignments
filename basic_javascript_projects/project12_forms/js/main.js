function validateForm() {
   var w = document.forms["myForm"]["fname"].value;
   if (w == "") {
       alert("Please fill in first name");
       return false;
   } 
   var x = document.forms["myForm"]["lname"].value;
   if (x == "") {
       alert("Please fill in last name");
       return false;
   }
   var y = document.forms["myForm"]["email"].value;
   if (y == "") {
       alert("Please fill in email");
       return false;
   }
}