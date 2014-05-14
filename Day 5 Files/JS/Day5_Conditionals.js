/**
 * Andrew Sorensen
 WPF-1
 Conditionals
 */
//alert("Test");

//Relational Expressions

//If a child is 48" or taller he can ride the rollercoaster
// If the child is riding with a parent, he can be 45" tall
//Anything shorter than that and he cannot ride

var kidHeight = 44;
var minHeight= 48;
var wParentHeight = 45;

if(kidHeight>= minHeight){
    //This code will run if the child is tall enough
    console.log("You can ride the rollercoaster.");
} else if(kidHeight>=wParentHeight){
    console.log("You can ride with a parent.")
} else {
    //This code will run if the kid is not tall enough
    console.log("You cannot ride the rollercoaster.");
}
console.log("What comes after");

