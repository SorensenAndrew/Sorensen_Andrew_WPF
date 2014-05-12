/**
Andrew Sorensen
 WPF-1
 Expressions- Personal
 5/12/14
 */
//alert("Hello");

// How much time will it take to prepare for and arrive at school?
//Creating variables for the prompts
var eating= prompt("How long does it take you to make and eat food?");
var hygeine= prompt("How long does it take you to shower, shave, and brush your teeth?");
var driveTime = prompt("How long does it take for you to drive to school?");
//adding the variables into a calculation for common variable, adding parseInt to get numeric value from answers
var prepTime= parseInt(eating) + parseInt(hygeine) + parseInt(driveTime);
//Testing calculation
console.log(prepTime);
//Put calculation into final expression
alert("It takes you " + prepTime + " minutes to get prepared for and arrive at school." );
//Testing expression 
console.log("It takes you " + prepTime + " minutes to get prepared for and arrive at school." );





