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

/*
let number;
do {
 number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));*/

/* // -------------------------- COUNTER ---------------------------------------------
let counter = 0;
do{
    console.log(counter++);
} while (counter <= 100 );
*/

/* // ---------FOR LOOP----------------
for(let step=0; step<10; step++){
    console.log(step)
}*/

 // ---------------------------NESTED LOOP------------------------------


/*
let arrOfArrays = [];
for (let i = 0; i < 3; i++){
 arrOfArrays.push([]);
 //console.log(arrOfArrays,">1st");
 for (let j = 0; j < 7; j++) {
 arrOfArrays[i].push(j);
 //console.log(arrOfArrays,">2nd");
 }
}
console.table(arrOfArrays);
*/


/*
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i ++){
 if(names[i].startsWith("M")){
 delete names[i];
 //break;
 continue;
 }
 names[i] = "hello " + names[i];
}
console.log(names);
*/

/*      // Your program gets stuck in an infinite loop here. Since a value gets added every
        iteration, the length of the loop grows with every iteration and i will never be bigger
        than or equal to length 
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++){
 names.push("...")
}*/

/* // ----------------FOR OF LOOP------------------------
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let arr of names){
 console.log(arr);
}
*/



