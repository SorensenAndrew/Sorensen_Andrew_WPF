/**
Andrew Sorensen
 WPF-1
 For Loops
 */
//alert("Ghosts and psychics are fake!");

//Basic For loop
//for(initialization;condition to test; change variable)

for(var i=1; i<=20; i+=4){
    console.log("i = "+i);
}

//Breaks
//Stops loop anywhere it is

for(var k=0; k<5; k++){
    console.log("k= " +k);
    if(k===3){
        break;
    }
}