/**
 * Created by AndrewSorensen on 5/19/14.
 * WPF-1
 * Loops worksheet
 */

//Calculating how fast a Delorian accelerates before traveling back in time
//Variable that is altered by the do/while statement
mph= prompt("How fast is the Delorean going?");
while(isNaN(mph) || mph===""){
    mph= prompt("How fast is the Delorean going?");
}
//Runs code first
do{
    console.log("The Delorean is going "+mph+"mph.");
    //Doesnt run until second run of code
    mph++
    //Dictates when code stops running
}while(mph<88);
//What happens after the first set of code becomes false
if(mph===88){
    console.log("The Delorean has traveled back in time.");
}
//DeLorean