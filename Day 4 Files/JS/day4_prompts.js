/*
Andrew Sorensen
 WPF Section 1
 Day 4 Prompts
 */

//alert("Prompts!");
//Prompting user for info

//prompt("Enter your year of birth.");

//Capture the information the user provides
//var userInput = prompt("Enter your year of birth.");
//console.log(userInput);

//Prompt and explain to the user what we are doing
//Prompt the user for a width and calculate the area of a rectangle

var width = prompt("Lets calculate the area of a rectangle.\nPlease enter a width:");
var height = prompt("Please enter a height:");

//area of rectangle- width * height

var area = width * height;
console.log("The area of your rectangle is " + area);
alert("The area of your rectangle is " + area);

//Create a variable to hold the whole string of an answer
var result = "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + area;
console.log(result);
alert(result);

