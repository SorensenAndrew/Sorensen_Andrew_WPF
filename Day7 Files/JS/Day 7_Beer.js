/**
 * Created by AndrewSorensen on 5/19/14.
 * WPF-1
 * Beer
 */
//alert("Hooray for beer!");

//Create the 99 bottles of beer on the wall song

//No loops
/*
console.log("99 bottles of beer on the wall, 99 bottles of beer. \n You take one down, you pass it around, 98 bottle of beer on the wall.");
console.log("98 bottles of beer on the wall, 98 bottles of beer. \n You take one down, you pass it around, 97 bottle of beer on the wall.");
*/

//With loops!

for(var bottlesOfBeer=99; bottlesOfBeer>0; bottlesOfBeer--){
    //console.log(bottlesOfBeer);
    //console.log(bottlesOfBeer+" bottles of beer on the wall, "+bottlesOfBeer+" bottles of beer. \n You take one down, you pass it around, "+(bottlesOfBeer-1)+" bottles of beer on the wall.");
    if(bottlesOfBeer===1){
        console.log(bottlesOfBeer+" bottle of beer on the wall, "+bottlesOfBeer+" bottle of beer. \n You take one down, you pass it around, no more bottles of beer on the wall! \n The End!");
}   else{
        console.log(bottlesOfBeer+" bottles of beer on the wall, "+bottlesOfBeer+" bottles of beer. \n You take one down, you pass it around, "+(bottlesOfBeer-1)+" bottles of beer on the wall.");

    }
}
