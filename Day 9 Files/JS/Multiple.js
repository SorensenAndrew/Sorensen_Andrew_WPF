/**
 * Created by Andrew Sorensen on 5/23/14.
 * WPF-1
 * Assignment Name
 */
//alert("Alert!");

//Create a function to find the perimeter of a rectangle
//Create a function call to perimeter
//Prompt the user for width and height

var width=Number(prompt("Please type in a width."));
//Validate with while loop
while(isNaN(width)|| width===""){
    width=Number(prompt("Please type in a width."));
}

var height=Number(prompt("Please type in a height."));
while(isNaN(height)|| height===""){
    height=Number(prompt("Please type in a height."));
}

perimeterRect(width,height);
var perimeter=perimeterRect(width,height);
console.log(perimeter);

//Function call to find area
var area=areaRect(width,height);
console.log(area);

//Final console log
console.log("A rectangle with a width of "+width+" and a height of "+height+" has a perimeter of "+perimeter+" and an area of "+area+".");
alert("A rectangle with a width of "+width+" and a height of "+height+" has a perimeter of "+perimeter+" and an area of "+area+".");


function perimeterRect(width,height) {
    //2*width + 2*height
    var p= 2*width+2*height;
    return p;
}
function areaRect(w,h){
    var a=w*h;
    return a;
}

/*  A ternary
    An expression with two arithmetic operators
    */
