/**
Andrew Sorensen
 WPF-1
 Expressions- Personal
 5/12/14
 */
//alert("Hello");

// How much time will it take to prepare for and arrive at school?

var eating= prompt("How long does it take you to make and eat food?");
var hygeine= prompt("How long does it take you to shower, shave, and brush your teeth?");
var driveTime = prompt("How long does it take for you to drive to school?");

var prepTime= parseInt(eating) + parseInt(hygeine) + parseInt(driveTime);
console.log(prepTime);

alert("It takes you " + prepTime + " minutes to get prepared for and arrive at school." );
console.log("It takes you " + prepTime + " minutes to get prepared for and arrive at school." );





