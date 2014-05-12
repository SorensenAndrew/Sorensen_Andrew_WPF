/**
 Andrew Sorensen
 WPF-1
 Expressions: Wacky
 5/12/14
 */
//alert("Hello");

//What is the average number of lemmings that walk to their deaths per day?
    // Added variables for calculation, parseInt to have the code read as integers and not a string
var lemmingsDay1= parseInt(prompt("How many lemmings died on day 1?"));
var lemmingsDay2= parseInt(prompt("How many lemmings died on day 2?"));
var lemmingsDay3= parseInt(prompt("How many lemmings died on day 3?"));
// put all variables into an array for future calculations
var lemmingsDead= [lemmingsDay1, lemmingsDay2, lemmingsDay3];
//testing the array
console.log(lemmingsDead);
// putting the array into a calculation to determine average
var averageDead= (lemmingsDead[0] + lemmingsDead[1] + lemmingsDead[2]) / 3;
//testing array calculation
console.log(averageDead);
// put final calculation into a log and tested
console.log("An average of " + averageDead + " lemmings died per day.");

