/**
Andrew Sorensen
 WPF-1
 Industry Conditionals
 */
//alert("Test");
//You told us to not worry about validating for this assignment

//Creating problem to be calculated
// Can the customer rent an R rated film?

//Variables to be determined by prompt
var age= prompt("How old is the customer?");
var money= prompt("How much money does the customer have?");

//Set variables to a ternary statement, allows the prompt responses to determine result

 (age>= 17 && money>= 2.80)? console.log("Yes, the customer can rent the movie."):console.log("No, the customer cannot rent the movie.")


