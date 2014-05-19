/**
 * Created by AndrewSorensen on 5/19/14.
 * WPF-1
 * Loops worksheet
 */

//Calculating how fast a Delorian accelerates before traveling back in time
//Variable that is altered by the do/while statement
mph= prompt("How fast is the Delorian going?");
while(isNaN(mph) || mph===""){
    mph= prompt("How fast is the Delorian going?");
}
//Runs code first
do{
    console.log("The Delorian is going "+mph+"mph.");
    //Doesnt run until second run of code
    mph++
    //Dictates when code stops running
}while(mph<88);
//What happens after the first set of code becomes false
if(mph===88){
    console.log("The Delorian has traveled back in time.");
}
