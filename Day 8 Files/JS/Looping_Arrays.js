/**
 * Created by Andrew Sorensen on 5/21/14.
 * WPF-1
 * Looping Arrays
 */
//alert("What up, self?")

//Cycle through an array
//for(var i=0;i<array.length;i++)
//Create an array of Scooby Doo Characters

var names=["Scooby","Shaggy","Velma","Fred","Daphne"];

//Loop through each and tell them they solved the case

for(i=0;i<names.length;i++){
    console.log("You solved the case, "+names[i]+"!");
}

//Create an array of bills & add them up

var bills=[50, 10, 5, 20, 10];
var totalbills=0;

for(var j=0;j<bills.length;j++){
    //totalbills= totalbills+bills[j];
//Only care about bills that are equal to or above 20
    if(bills[j]>=20){
        //if >= 20 add it to total, otherwise ignore
        totalbills= totalbills+bills[j];
    }
}
console.log("Your total for bills is $"+totalbills+".");
