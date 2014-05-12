/*
Andrew Sorensen
WPF-1
Day 4 Casting variables
 */
//alert("Test");

//Casting variables means treating one variable type as another type
var stringVar = "6";
//var stringVar = Number("6");
var result = 7 + Number(stringVar);
console.log(result);

//Cast by wrapping the variable in the data type you want it to be
// Number(); whatever is inside will be treated as a number

//Casting numbers as string variables
var areaCode = 407;
var firstPart= 203;
var secondPart= 4529;

//Combine into a phone number
//var phoneNumber= areaCode + firstPart + secondPart;
var phoneNumber=String (areaCode) + (firstPart)+ (secondPart);
console.log(phoneNumber);

//Prompting
//Prompts return string values
//Sometimes the computer can figure out numbers, but not usually

var cupsHad= prompt("How many cups do you have?");
var cupsBought= prompt("How many cups are you going to buy?");

//Total number of cups the person will have
var totalCups= Number (cupsHad) + Number(cupsBought);
console.log(totalCups);

//Parsing an integer
//Looks through a text string to find an integer
//Only the first number in a string is returned
//Leading and trailing spaces are allowed
//If first character cannot be converted to a number, it will return NaN

//parseInt()

var a = parseInt("40 years old");
console.log(a);
var b = parseInt("He was 40 years old.")
console.log(b);
