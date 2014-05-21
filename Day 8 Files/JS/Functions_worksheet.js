/**
 * Created by Andrew Sorensen on 5/21/14.
 * WPF-1
 * Functions worksheet
 */

//alert("Danger! Danger, Will Robinson!");

//Calculate the circumference of a circle
//Create function to house calculation
function calcCirc (r){//r= radius, the parameter
    //Variable that holds the calculation within the function
    var circumferenceCalc= 2*Math.PI*r;
    //creates the log of the calculation
    console.log("The circumference of the circle is "+circumferenceCalc+".");
    //allows the result to exist outside of the function
    return circumferenceCalc;

}
var circleCirc= calcCirc(5);



