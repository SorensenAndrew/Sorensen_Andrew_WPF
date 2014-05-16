/**
 * Andrew Sorensen
 * WPF-1
 * Else/if Statement
 */
//alert("Test");

//Testing steak temperatures
/*
Under 120- Uncooked
120-124 - Rare
125-129 - Medium Rare
130-139 - Medium
140-149 - Medium Well
150-165 - Well done
Above 165 - Burnt
 */

//Create variable for steak temperature
//var steakTemp= 135;
//Cast variable as a number
var steakTemp = Number(prompt("What temperature is your steak?"));

if(steakTemp<120){
    console.log("Steak is uncooked, possibly still mooing.");
}else if(steakTemp<125){
    console.log("Steak is cooked rare.");
}else if(steakTemp<130){
    console.log("Steak is cooked medium-rare.");
}else if(steakTemp<140){
    console.log("Steak is cooked medium.");
}else if(steakTemp<150){
    console.log("Steak is cooked medium-well.");
}else if(steakTemp<=165){
    console.log("Steak is cooked well done.");
}else{
    console.log("Your steak is burnt and is no longer food.");
}