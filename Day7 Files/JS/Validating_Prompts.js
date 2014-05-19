/**
 * Created by Andrew Sorensen on 5/19/14.
 * WPF-1
 * Validating Prompts
 */
//alert("Test");

//Ask user for a min and max number and create a random number in between those 2 numbers
alert("Lets find a random number between two numbers.");
var min= (prompt("Please type in a minimum number."));


//Validate with a loop
while(isNaN(min)|| min===""){
    //its a text string, prompt again for a number
    min=prompt("Please type in a minimum number.");
}

var max= Number(prompt("Please type in a max number."));
while(isNaN(max)){
    max= Number(prompt("Please type in a max number."));
}

/*
//Validate user response
//Empty string
if(min===""){
    console.log("Inside of empty string if statement.");
    min=Number(prompt("Dont leave it blank, give me a number."));
}

//Test for not a number for max value
//isNaN()
//Returns false if it is a number
console.log(isNaN(max));
if(isNaN(max)){
    //Will run if true
    //Max is a string, not a number
    max=Number(prompt("Please type in a number."));
}
*/
var randomNumber=Math.round(Math.random()*(max-min)+min);

console.log("Your random number is " +randomNumber);