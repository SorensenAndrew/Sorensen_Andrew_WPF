/**
 * Created by AndrewSorensen on 5/21/14.
 * WPF-1
 * Scope
 */

//alert("Scope!");

//Variable Scope
//Variables inside and outside of a function

//Try not to use the same variable names
//This is going to be impossible in large files

//Create a variable for width in our main code
var width=5;

//Create a function that calculates the perimeter of a rectangle
function calcPeri(){
    console.log(width);
}
calcPeri();
