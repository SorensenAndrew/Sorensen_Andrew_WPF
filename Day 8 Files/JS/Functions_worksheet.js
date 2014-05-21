/**
 * Created by Andrew Sorensen on 5/21/14.
 * WPF-1
 * Functions worksheet
 */

//alert("Danger! Danger, Will Robinson!");

//Calculate the circumference of a circle
//Create function to house calculation
function calcCirc (r){//r= radius, the parameter
    //Variable that holds the calculation within the function
    var circumferenceCalc= 2*Math.PI*r;
    //allows the result to exist outside of the function
    return circumferenceCalc;

}
//Putting the function in a variable
var circleCirc= calcCirc(5);
//Using variable to print the result of the function
console.log("The circumference of the circle is "+circleCirc+".");

// Stung! How many bee stings is required to kill an animal?
//Variable used for weight in the calculation
var weight= 50;
//Function to house calculation
function beeStings(weight){
    //Stings per pound calculation
    var stingDeath= weight*8.666666667
    //bringing results out of the function
    return stingDeath;

}
//Putting the function in a variable, argument set to original variable for weight
var numberStings= beeStings(weight);
//Log function result to console
console.log("It takes "+numberStings+" bee stings to kill this animal.");

