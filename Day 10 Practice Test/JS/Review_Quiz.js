/**
 * Created by Andrew Sorensen on 5/23/14.
 * WPF-1
 * Review Quiz
 */
//alert("Alert!");

var radius= prompt("What is the radius of the circle?");
while(isNaN(radius)||radius===""){
    radius= prompt("What is the radius of the circle? In numbers only.");

}
function circArea(r){
    var area= 2*r*Math.PI;
    return area;
}
var result=circArea(radius);
console.log("The area of the circle is "+result+".");
