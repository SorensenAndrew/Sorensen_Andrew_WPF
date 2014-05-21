/**
 * Created by AndrewSorensen on 5/21/14.
 */
//alert("!!!!!!");

//Basic Function
// function functionName(){}
//Create a function that logs "Hello"

function printHello () {
    console.log("Hello");
}

//Create a function that logs "prints out more"
function printMore(){
    console.log("Prints out more text");
}
//Function Call our printHello
//functionName();
printHello();
printMore();
printHello();
printMore();

//Create a function that calculates the area of a rectangle

function calcArea(){
    //Create variables for width, height, and area
    var width=20;
    var height=30;
    var area= width*height;
    console.log(area);
}
calcArea();