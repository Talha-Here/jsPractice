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


/*------------------- PROGRAM TO CHECK IF THE USERNAME AND PASSWORD IS CORRECT OR NOT --------------------------*/
/*
let username = "talha";
let password = "123"
authentic = true
while (authentic) {
    input_username = prompt("Please input a valid username:")
    input_password = prompt("Please input a valid password:")
    authentic = false;
    if (input_username == username && input_password == password){
        console.log("Successful login!");
    }
    else{
        console.log("Either the username or the password is incorrect,please try again")
        authentic = true;
        
    }
}*/