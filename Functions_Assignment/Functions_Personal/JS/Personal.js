/**
 * Created by Andrew Sorensen on 5/23/14.
 * WPF-1
 * Functions- Personal
 */
//alert("Alert!");

//What am I having for breakfast?

var howHungry= prompt("How hungry am I? Answer with Very, Slightly, or Not at all.");
while(howHungry!= "Very" && howHungry!="Slightly"&& howHungry!="Not at all"){
    howHungry= prompt("How hungry am I? Answer with Very, Slightly, or Not at all.");
}
if(howHungry==="Not at all"){
    console.log(myBreakfast);
}else {
    var time = prompt("Am I in a hurry? Yes or No?");
    while (time != "Yes" && time != "No") {
        time = prompt("Am I in a hurry? Yes or No?");
    }
    var laziness = prompt("Am I feeling lazy? Yes or No?");
    while (laziness != "Yes" && laziness != "No") {
        laziness = prompt("Am I feeling lazy? Yes or No?");
    }
}
function breakfast(hh,t,l){
    if(hh==="Very" && t==="No"&&l==="No"){
        var breakfastItem= "Eggs and Bacon";
    }else if((hh==="Slightly") && (t==="Yes" || "No") && (l==="Yes" || "No")){
        breakfastItem="Cereal"
    }else if((hh==="Not at all") && (t==="Yes"||"No") && (l==="Yes"|| "No")){
        breakfastItem="Nothing"
    }else if((hh==="Very") && (t==="Yes") && (l==="Yes"||"No")){
        breakfastItem="Cereal"
    }
return breakfastItem;
}
var myBreakfast= breakfast(howHungry,time,laziness);
console.log("I will be having "+myBreakfast+" for breakfast.");
