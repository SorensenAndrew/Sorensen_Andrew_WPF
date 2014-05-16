/**
Andrew Sorensen
 WPF-1
 Math
 */
//alert("test");

//Math.round()
//Normal rounding .5 goes up, less goes down

var num1= 9.5444;
console.log(num1);
console.log(Math.round(num1));

//Math.floor()
//Removes all numbers past decimal

var num2= 6.9;
console.log(num2);
console.log(Math.floor(num2));

//Math.ceil()
//Rounds number up to next integer

var num3= 4.00000001;
console.log(num3);
console.log(Math.ceil(num3));

//Random numbers
//Use Math.random()
// Gives random number between 0-1
var num4= Math.random();
console.log(num4);

//Random number between 0-10 (in a range)
var num5= Math.random()*10;
console.log(num5);

//Random integer between 0-100 (in a range)
var num6= Math.round(Math.random()*100);
console.log(num6);

//Get a random integer between 2 numbers
//Math.random()*(max-min)+min

//Get an integer between 50-80
var num7= Math.round(Math.random()*(30)+50);
console.log(num7);
