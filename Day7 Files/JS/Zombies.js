/**
Andrew Sorensen
 WPF-1
 Zombies!
 */
//alert("Braaaaaaiiiiiinnnnnnsssssss.");

//Zombie Madness!
//We have a zombie at Full Sail
//Zombie can bite 4 people a day and turn them into zombies

//The CDC wants to know how many zombies there will be in 8 days if not contained

//Create givens
var numZombies= 1;
var numBites= 4;
var days= 8;

//For Loop
/*
for(var i=1; i<=days; i++){
    //How many new zombies are made every day
    //When do they bite new people
    var newZombies= numZombies*numBites;
    //Add new zombies to the total number of zombies
    numZombies+=newZombies;
    console.log("There are " +numZombies+ " zombies at the end of of day #"+ i+ ".");
}
*/

var numDays= 0;
while(numZombies<7000000000){
    numDays++;
    var newZombies= numZombies*numBites;
    //Add new zombies to the total number of zombies
    numZombies+=newZombies;
    console.log("There are " +numZombies+ " zombies at the end of of day #"+ numDays+ ".");
}
console.log("It will take "+numDays+ " days to take over the world.");
