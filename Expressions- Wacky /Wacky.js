/**
 Andrew Sorensen
 WPF-1
 Expressions: Wacky
 5/12/14
 */
//alert("Hello");

//What is the average number of lemmings that walk to their deaths per day?

var lemmingsDay1= parseInt(prompt("How many lemmings died on day 1?"));
var lemmingsDay2= parseInt(prompt("How many lemmings died on day 2?"));
var lemmingsDay3= parseInt(prompt("How many lemmings died on day 3?"));

var lemmingsDead= [lemmingsDay1, lemmingsDay2, lemmingsDay3];
console.log(lemmingsDead);

var averageDead= (lemmingsDead[0] + lemmingsDead[1] + lemmingsDead[2]) / 3;
console.log(averageDead);

console.log("An average of " + averageDead + " lemmings died per day.");

