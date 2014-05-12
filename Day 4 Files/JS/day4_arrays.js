/**
Andrew Sorensen
 WPF Section 1
 Arrays
 */
//alert("Testing");

// Create a basic array
var avengersNames= ["Hulk", "Iron Man", "Captain America"];

//Print array
console.log(avengersNames);

//Access a specific item in the array

console.log(avengersNames[2]);

//Set the value of a specific item
avengersNames[0] = "Thor";

console.log(avengersNames);

//Add a new variable to the array
avengersNames[3] = "Hawkeye";
avengersNames[4] = "Scarlet Witch";
avengersNames[5] = "Quicksilver";
avengersNames[6] = "She-Hulk";

console.log(avengersNames);

//How long is an array?
//Length property of arrays
//To access a property or attribute of a variable use .syntax

console.log(avengersNames.length);

//Index number of the last item is one less than the array length

//Create a variable to find last item
var newestRecruit = avengersNames.length - 1;
//Gives index number of last item in the array

//Print newest avenger
console.log("Welcome, " + avengersNames[newestRecruit] + ", you are our newest Avenger!");

//Pick oranges

//Create an array to hold the number of oranges we pick each day

var orangesPicked = [9000, 30, 35000,]

//Average amount of oranges picked in a day
//Add all 3 days, divide by number of days
//Create variable for total oranges

var totalOranges = orangesPicked[0] + orangesPicked[1] + orangesPicked[2];
console.log(totalOranges);
// Create a variable for number of days
var totalDays = orangesPicked.length;
console.log(totalDays);

//Create a variable to hold average
var average = totalOranges / totalDays
console.log(average);

console.log("We picked an average of " + average + " oranges per day.");

