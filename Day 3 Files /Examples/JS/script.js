/*
Andrew Sorensen
WPF 1405
Day 3 Class Examples
 */

//alert("Your page is linked correctly.");

// Find out how old we are
// Create a variable for birthyear
var birthYear = 1989;

//Create a variable to hold the age
var age = 2014 - birthYear-1;
console.log(age);

//Math
// + - / *

//Find the area of a Triangle
// base * height * .5
var base = 8;
var height = 5;

var areaTriangle = base * height * .5;
console.log(areaTriangle);

//Modulo - %
// Give the remainder
var remainder = 32%10;
console.log(remainder);

// Find out if things are even or odd
var evenOrOdd = 247673%2;
console.log(evenOrOdd);

//Assignment Operators
/*
=Assignment
++ Adds 1 to the variable
-- Subtracts 1 from the variable
+= Addition assignment
-= Subtract assignment
/= Division Assignment
*= Multiplication assignment
 */
var a = 1;
a++; //a = a+1
a--; //a = a-1
a+= 4; // a = a+4
a-= 3;
a/= 2;
a*=6;
console.log(a);

// Strings
// "" or '' used to find the beginning and end of string
// Needed to distinguish between variable names and normal text

var kermit = "Light green";
var frogName = "kermit";

// Double or Single quotes?
// Either, as long as the they match
var courseName = 'Web Programming Fundamentals';
var phrase = 'I don\'t know.\nNew line starts here';
console.log(phrase);
//Escaping character \ backslash
// \n - new line character

//Boolean
// True or False
// NOT the text value of it
// Must be lower case

var yes = true;

// Not Boolean, only text
var maybe = "true";

var nope = false;

// Order of operations
// Find the average of four quiz grades
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;
var quiz4 = 80;

var average = (quiz1 + quiz2 + quiz3 + quiz4) /4;
console.log(average);

// Do not over use parenthesis

//Find perimeter of a rectangle
// Length *2 + Width *2

//Create variable for givens
var length = 7;
var width = 6;

var perimeter = length * 2 + width * 2;
console.log(perimeter);




