/**
Andrew Sorensen
 WPF-1
 Nesting Ifs
 */

//alert("Test");

//Some decisions affect other decisions

//If it is warm outside, lets go to the beach
//If its not, lets go to the movies

//If the water is warm, then Im going in
//If it is cold, I am going to get a tan

//Create variable for outside temp

var temp= Number(prompt("What is the temp?"));


if(temp>=85) {
    console.log("Lets go to the beach!");
    //Only ask if going to beach
    var waterTemp=Number(prompt("What is the water temp?"));
    if (waterTemp >= 75) {
        console.log("Lets get in the water.");
    } else {
        console.log("Lets get a tan.");
    }


}else{
    console.log("Lets go to the movies!");
}


