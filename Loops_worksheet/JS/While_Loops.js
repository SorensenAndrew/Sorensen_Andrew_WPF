/**
 * Created by AndrewSorensen on 5/19/14.
 * WPF-1
 * Loops Worksheet
 */

//What is the user's birthday?
//Variables determined by prompts
var month= prompt("What is the month of your birth?(Written in letters)");
//Check prompt using while statement
while(month==="" || month>= 0){
    month= prompt("What is the month of your birth?(Written in letters)");
}
console.log(month);
var date= prompt("What is the date of your birth?");
while(isNaN(date) || date===""){
    date= prompt("What is the date of your birth?");
}
console.log(date);
var year= prompt("What is your year of birth?");
while(isNaN(year) || year===""){
    year= prompt("What is your year of birth?");
}
console.log(year);
//Expression put into variable for final result
var dob= "Your date of birth is "+month+", "+date+"th "+year;

console.log(dob);