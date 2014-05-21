/**
 * Created by AndrewSorensen on 5/21/14.
 */
//alert("Return!");

//Returning a value from a function

function calcArea(w,h){
    var area= w*h;
    console.log(area);
    //return the area to the main code
    return area;
}
calcArea(30,20);
//console.log(area); //Nopesville

//Catch the return value from the function
//Create a variable to hold the results

var returnedArea= calcArea(10,20);

console.log("Outside"+returnedArea);
