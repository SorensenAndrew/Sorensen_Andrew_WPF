/**
 Andrew Sorensen
 WPF-1
 Conditionals Assignment- Personal
 */
//alert("Test");
// You told us to not worry about validating prompts for this assignment
// What game should I play today?
//Setting up the prompts that will determine my variables
var playersOnline= prompt("How many friends are online?");
var mood= prompt("Am I in a social mood?");
//If statement provides context to the prompt variables
if(playersOnline>=2 && mood== "Yes"){
    //Logs response if both above statements are true
    console.log("GTA Online.");
}else if(playersOnline==1 && mood== "Yes"){
    //Logs response if both above statements are true
    console.log("Portal 2.")
}else {
    //Response if either inquiries come out False
    console.log("Dragon Age.")
