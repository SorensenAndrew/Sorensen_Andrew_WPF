/**
 * Created by Andrew Sorensen on 5/23/14.
 * WPF-1
 * Assignment Name
 */
//alert("Alert!");

//Did you successfully kill the Nazi?
var naziArmor=5;
var bullets= prompt("How many bullets hit the nazi?");
while(isNaN(bullets) || bullets===""){
    bullets= prompt("How many bullets hit the nazi?");
}
function naziDeath(b){
    shotThrough= b-naziArmor;
    return shotThrough;
}
var finallyDead= naziDeath(bullets);
(finallyDead<10)? console.log("The Nazi is not dead."):console.log("The Nazi is dead.");
if(finallyDead>100){
    console.log("He's really, really dead.");
}