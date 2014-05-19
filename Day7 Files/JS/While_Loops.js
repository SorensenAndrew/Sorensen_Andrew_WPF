/**
Andrew Sorensen
 WPF-1
 Loops
 */
//alert("This is a test, this is only a test.");

//Basic while loop
//While loop loops through a block of code as long as the condition is true
//Initialize the counter variable

var counter= 0;
//Set up while loop
while(counter<200){ //condition loops until false
    console.log("Some things just never end.");
    //Change the value of the counter variable or it will run forever
    console.log("The counter is " + +counter);
    counter++
}

console.log("Ending counter " +counter)

//Do While Loop
//Runs code once to start before checking if the condition is true, then repeats as long as it is true

//Initialize the variable
var i=20;
//Set up do/while loop
do{
    console.log("The number value of i is "+i);
    i++
} while(i<10);//Condition to test
console.log(i);