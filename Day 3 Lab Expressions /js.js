/*
Andrew Sorensen
Web Programming Fundamentals 1405
Day 3 Lab Expressions
 */
// Problem 1
// Calculate how much pizza each party goer will receive

//Givens
var sliceNumber = 10;
var guestNumber = 25;
var pizzaNumber = 4;

// Formula depicting number of slices per person
var slicePerGuest = sliceNumber * pizzaNumber / guestNumber;
console.log(slicePerGuest);

// Final statement of formula depicting slices per person

console.log("Each party goer will recieve "+ slicePerGuest +" " + "slices of pizza.");

//Problem 2
// Assuming all guests get full slices, determine how much leftover pizza Sparky the dog will receive.

//Givens
sliceNumber= 10;
guestNumber= 25;
pizzaNumber= 4;
slicePerGuest= 1.6;


//Formula for how many slices Sparky will receive
var sparkySlices= sliceNumber * pizzaNumber - guestNumber;
console.log(sparkySlices);

// Statement of how many slices of pizza Sparky will receive

console.log("Sparky got " + sparkySlices + " " + "slices of pizza.");

//Problem 3
// Calculate average amount spent on groceries over a 5 week period

//Givens
var week1Bill= 120;
var week2Bill= 80;
var week3Bill= 175;
var week4Bill= 200;
var week5Bill= 110;



