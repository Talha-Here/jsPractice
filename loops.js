const prompt = require("prompt-sync")();

//let num = prompt("enter the number: ")

/*while(num == "1"){      //first check the condition
    console.log(num)
}*/

/*do{                     //1 time it prints then checks the condition
    console.log(num)
}while(num == "1")*/

/*let i =0;
while(i<10){
    console.log(i);
    i++;
}*/

/*let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
 if (someArray[0] === "Louiza") {
 console.log("Found her!");
 notFound = false;
 } else {
 someArray.shift();
 }
}*/

let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
let authentic;
while (name == "talha" && age == "21"){
    console.log("User Authorized!!!");
    authentic = true; 
    // if(name == "talha" && age == "21"){
    //     console.log("User Authorized!!!");
    //     authentic = true; 
    // }else{
    //     console.log("User NOT Authorized!!!");
    //     authentic = false; 
    // }
}