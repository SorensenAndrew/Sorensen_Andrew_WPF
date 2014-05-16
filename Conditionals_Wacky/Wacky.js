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
if(platpusHead*Math.PI === fedoraCirc){
    console.log("The platypus can wear the fedora.")
    //Set final result variable to each possible outcome
    perryThePlatypus= "Since the cicumference of the hat matches that of the platypus, the platypus can wear the fedora."
}else{
    console.log("The platypus cannot wear the fedora.")
    perryThePlatypus= "Since the circumference of the hat does not match the circumference of the platypus, the platypus cannot wear the fedora."
}
