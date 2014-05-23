/**
 * Created by Andrew Sorensen on 5/23/14.
 * WPF-1
 * Anonymous Functions
 */
//alert("Alert!");
//Anonymous functions are used in object oriented programming and jquery
//Both regular and anonymous functions will work for you
//Quick and easy

//Create a basic function structure

function functionName(){

}

//Structure of anonymous function
var functionName2= function(){

}

//this code still needs a call to run
//Must declare anonymous function before calling it
functionName2();

//Create a normal function that calculates the area of a triangle
function triangleArea(b,h) {
    var area= .5*b*h;
    return area;

}
var result= triangleArea(5,6);
console.log(result);

//Make an anonymous version of the same function

var areaTriangle= function(b,h) {
    var area= .5*b*h;
    return area;

}
//Call anonymous function
var triArea= areaTriangle(7,8);
console.log(triArea);
