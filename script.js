//Cancels all the values in the display
function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // Display values oparends and operators
   function display(value) {
    document.getElementById("result").value += value;
   }
   // This function evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }