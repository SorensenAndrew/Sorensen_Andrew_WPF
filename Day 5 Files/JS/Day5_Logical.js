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

//Can we buy a car?
//If the price of the car is less than our budget- buy the car
// OR if you win the lottery- buy the car
var carPrice = 35000;
var carBudget= 12000;
var winLottery= true

//OR || one or more must be true to gain true result

if(carPrice<carBudget|| winLottery){
    console.log("Buy the car.");
} else {
    console.log("Don't buy the car.");
}

