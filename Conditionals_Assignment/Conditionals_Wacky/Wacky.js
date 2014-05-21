/**
 Andrew Sorensen
 WPF-1
 Wacky Conditional
 */
//alert("Test");
// You told us not to worry about validating for this assignment

//Creating the calculation
// Is the platypus's (platypi?) head large enough to wear a fedora?

//Variables that will be entered by the user, which will determine the result of the calculation
var platpusHead= prompt("What is the diameter of the platypus's head?");
var fedoraCirc= prompt("What is the circumference of the fedora?");
var perryThePlatypus= "Can the platypus wear the fedora?"

//Statement that uses user prompted variables and calculates them to find the result
if(platpusHead*Math.PI.toFixed(1) == fedoraCirc){
    console.log("The platypus can wear the fedora.")
    //Set final result variable to each possible outcome
    perryThePlatypus= "Since " + platpusHead*Math.PI.toFixed(1) +", the circumference of the platypus's head matches " + fedoraCirc + ", the circumference of the fedora, the platypus can wear the hat.";
}else{
    console.log("The platypus cannot wear the fedora.")
    perryThePlatypus=  perryThePlatypus= "Since " + platpusHead*Math.PI.toFixed(1) +", the circumference of the platypus's head does not match " + fedoraCirc + ", the circumference of the fedora, the platypus can wear the hat.";
}
//final result variable logged to the console to show final expression
console.log(perryThePlatypus);