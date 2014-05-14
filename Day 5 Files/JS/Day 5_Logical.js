/**
 Andrew Sorensen
 WPF-1
 Logical Operators
 */
//alert("Test");

// See if we can afford an Ipad
//If price of the Ipad is less than or equal to our budget
// AND if our paycheck is over $600

var budget = 700;
var iPadPrice= 499.99;
var paycheck= 700;

if(iPadPrice<=budget && paycheck>600){
  console.log("You can buy the iPad.");
} else{
    console.log("You cannot buy the iPad.");
}
