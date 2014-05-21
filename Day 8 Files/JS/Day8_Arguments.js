/**
 * Created by AndrewSorensen on 5/21/14.
 */
//alert("Not like fighting!");

//Argument & Parameter
//Argument goes into function
//Parameter catches arguments in the function

function calcArea(w, h){ //Parameters go here
    //var width=10;
    //var height= 20;
    var area= w*h;
    console.log(area);
}
calcArea(10, 20); //Arguments go here
calcArea(20,30);

//Dog years
function dogYears(humanAge){ //Parameter
    //Input a human year and get a dog year
    //Dog years=human years*7
    //create a variable for dog years
    var dogAge= humanAge*7
    console.log("Dog age is "+dogAge+".");
}
dogYears(4);//Argument
