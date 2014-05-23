/**
 * Created by Andrew Sorensen on 5/23/14.
 * WPF-1
 * Assignment Name
 */
//alert("Alert!");

//Assuming you make $80,000 a month(very large assumption) and you make $5,000 bonus each time you create a successful project
//Will you be a millionaire at the end of the year

var salary= 80000*12;
var bonus= 5000;
var bonusProjects= prompt("How many successful projects did you have this year?");
while(isNaN(bonusProjects) || bonusProjects===""){
    bonusProjects= prompt("How many successful projects did you have this year?");
}
var millionaireStatus= function(s,b){
    var totalEarned= s+b*bonus;
    if(totalEarned<=999999){
        totalEarned="You are not a millionaire."
    }else if(totalEarned>=1000000){
        totalEarned="You are a millionaire"
    }
    return totalEarned;
}
millionaireStatus();

var millionaire=millionaireStatus(salary,bonusProjects);
console.log(millionaire);



