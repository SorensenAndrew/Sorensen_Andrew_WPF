/**
 Andrew Sorensen
 WPF-1
 Conditionals Assignment- Personal
 **/
//alert("Test");
// You told us to not worry about validating prompts for this assignment
// What game should I play today?
//Setting up the prompts that will determine my variables, as well as the final result variable

console.log(game);

var playersOnline= prompt("How many friends are online?");
var mood= prompt("Am I in a social mood?");
var game= "Game I am playing"

//If statement provides context to the prompt variables
 if(playersOnline>=2 && mood== "Yes"){
    //Logs response if both above statements are true
    console.log("GTA Online.");
     game= "GTA Online"
}else if(playersOnline==1 && mood== "Yes"){
    //Logs response if both above statements are true
    console.log("Portal 2.");
     game= "Portal 2"
}else {
     //Response if either inquiries come out False
     console.log("Dragon Age.");
     game= "Dragon Age"
 }
//End console.log to send expression to the console, with the result of the calculation within
console.log("The game I'm playing today is "+ game + ".");