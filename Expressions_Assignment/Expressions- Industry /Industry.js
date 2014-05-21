/**
Andrew Sorensen
 WPF-1
 Expressions: Industry
 5/12/14
 */
//alert("Hello.");

// How much money did I make at work for the month, before taxes? (Video rental store)
    // Variables for the calculation, one non prompt because it does not alter
var halfOffCard = prompt("How many half off cards did I sell?");
var candyBundle= prompt("How many candy bundles did I sell?")
var rent3Get1= prompt("How many rent 3 get 1 free bundles did I sell")
var hourlyWage= 8.40
var daysWorked= prompt("How many days did I work?")
// determining calculation by number of each sale items multiplied by its commission and days worked by  hourly wage
totalPayCheck= halfOffCard * 1 + candyBundle *.10 + rent3Get1 *.25 + daysWorked * hourlyWage;
//testing calculations
console.log(totalPayCheck);
// Put calculation into expression and tested
console.log("I made $" + totalPayCheck + " before taxes this month.");
