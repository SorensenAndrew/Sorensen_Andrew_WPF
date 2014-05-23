/**
 * Created by Andrew Sorensen on 5/23/14.
 * WPF-1
 * Types of Functions
 */
//alert("Alert!");

//Create a function that gives a random integer

function randomizer(mn,mx) {
    //Generate random integer and return it back
    //Create a variable to hold the random integer
    var randomNum= Math.round(Math.random()*(mx-mn)+mn);

    //Return random integer
    return randomNum;

}
//Ask user for mn and mx values
var minUser=prompt("Enter a min value.");
var maxUser= prompt("Enter a max value.");

//Call randomizer function
//Needs variable to catch return value
var results= randomizer(20,100); //Needs arguments to run
console.log(results);
