/**
 Andrew Sorensen
 WPF-1
 Conditionals Worksheet
 */

//alert("Test");

//Last Chance for Gas
//Should you stop for gas?

var mpg = 15
var gasTank= .50
var tankCapacity = 15

if(mpg*tankCapacity*gasTank > 200){
    console.log("Yes, you can make it without stopping for gas.");
} else {
    console.log("You only have " + tankCapacity*gasTank +" " + "gallons of gas left in your tank, better get gas while you can.");
}

//Grade Letter Calculator

var grade= 85

if(grade <= 100 && grade >= 95){
    console.log("You have " + grade + "%" + " ,which means you have earned an A+ in this class." );
} else if(grade < 95 && grade >= 90){
    console.log("You have " + grade + "%" + " , which means you have earned an A in this class." );
} else if(grade < 90 && grade >= 85){
    console.log("You have " + grade + "%" + " , which means you have earned a B+ in this class." );
} else if (grade<85 && grade>=80){
    console.log("You have " + grade + "%" + " , which means you have earned a B in this class." );
}else if (grade<80 && grade >= 76){
    console.log("You have " + grade + "%" + " , which means you have earned a C+ in this class." );
}else if(grade<76 && grade>=73){
    console.log("You have " + grade + "%" + " , which means you have earned a C in this class." );
}else if(grade<73 && grade>=70){
    console.log("You have " + grade + "%" + " , which means you have earned a D in this class." );
}else if(grade<70){
    console.log("You have " + grade + "%" + " , which means you have earned a E in this class." );
}

//Movie ticket Price

var movieTime = 6
var customerAge= 60


if((movieTime>= 3 && movieTime<= 5)|| customerAge>= 55){
    console.log("The ticket price is " + (12 - 5));
}else{
    console.log("The ticket price is " + 12);

}

