/**
 Andrew Sorensen
 WPF-1
 Ternary
 */
//alert("Test");

//Check our GPA and see if we can graduate
//Higher than 2.0 GPA to graduate

var gpa= 3.7
var minGPA= 2.0

if(gpa>minGPA){
    console.log("You can graduate.:)");
} else {
    console.log("You cannot graduate. :(");
}

//(Condition to be met)? True code: False code;

(gpa>2.0)? console.log("You graduate :)"):console.log("You cannot graduate :(");

//Pick a book based on a kids age
//Under 10- Green eggs and ham, 10+ gets Time Machine

var age=6;

(age < 10 ) ? console.log("blah1") : console.log("blah2");
//(age < 10)? console.log("Green eggs and ham") : console.log("Time Machine");
//(age>=10)? console.log("Time Machine"): console.log("Green Eggs and Ham");

//Save the book name to a variable
var book;

book= (age<10)? "Green Eggs and Ham.":"Time Machine";

if(age<10){
    book= "Time Machine";
}
console.log("This is the if statement book " + book);
