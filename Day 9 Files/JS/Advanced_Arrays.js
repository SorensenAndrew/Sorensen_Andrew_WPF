/**
 * Created by Andrew Sorensen on 5/23/14.
 * WPF-1
 * Assignment Name
 */
//alert("Alert!");
var fruitArray=["Banana","Pear","Peach","Mango"];
console.log(fruitArray);

//Total number of items in the array
console.log(fruitArray.length);

//Last item in array is length-1
console.log(fruitArray[fruitArray.length-1]);

// Add an item to the end of the array
//push function- code that adds whatever is inside of the parentheses to the end of the array

fruitArray.push("Apple");
console.log(fruitArray);

//Add a tomato
fruitArray.push("Tomato");
console.log(fruitArray);

//Quick way to remove the last item in the array
//.pop()- Nothing goes inside parentheses
fruitArray.pop();
console.log(fruitArray);

//.pop can also return that item
//Create a variable to catch the return item
var caught= fruitArray.pop();
console.log(fruitArray);
console.log(caught);
