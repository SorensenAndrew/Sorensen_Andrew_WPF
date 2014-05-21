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
var width=5;//Scoped outside of the function

//Create a function that calculates the perimeter of a rectangle
function calcPeri(){
    var width= 10//Scoped to the function
    var height= 20;
    var perimeter=width*2+height*2
    console.log("Inside of function, the perimeter is "+perimeter+".");
}
calcPeri();
//console.log("After call the perimeter is "+perimeter); //Cannot access a variable declared inside a function

