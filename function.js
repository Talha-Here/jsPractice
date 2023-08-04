const prompt = require("prompt-sync")();

/*
function sum(){
    let n1= 2;
    let n2 = 4;
    let x = n1 + n2;
    console.log(x);
}
sum();
*/

/*
function sayHello() {
    let you = prompt("What's your name? ");
    console.log("Hello", you + "!");
   }
sayHello();
*/


/*
function add(n1,n2){ // THESE n1 & n2 are parameters
    console.log(n1+n2);
}
add(100,14); // THESE 100 & 14 are arguments
*/

/* // STORING ANONYMOUS FUNCTION IN A VARIABLE  
let varContainingFunction = function() {
    let varInFunction = "I'm in a function.";
    console.log("hi there!", varInFunction);
   };
   varContainingFunction();
*/


/*
let arr = ["car", "object", "karaci", "apple", "hack"];
function getName(){
    let name = prompt("Enter the name: ");
    //randomVal = Math.random(arr);
    const nameAdj = Math.floor(Math.random() * arr.length);
    //console.log(arr[nameAdj] + "----- " );
    console.log("prompted value: " , name);
    console.log("Random value from Array: " , arr[nameAdj]);
}
getName();
*/

/*
// --------------- EX 6.3 --------------------------------
let n1 = prompt("Enter the 1st number: ");
let n2 = prompt("Enter the 2nd number: ");

let operator = "*"
function op(a,b,op){
    // if (op == "-"){
    //     console.log("Subtraction" , a-b);
    // } else {
    //     console.log("Addition" , a+b);
    // }
    
    (op == "-") ? console.log("Subtraction" , a-b) : console.log("Addition" , (a + b)); // using ternary operator
}
op(n1,n2,operator);
*/


/*
// ===================== ARROW FUNCTION ============================
let arrowfun = x => console.log(x);

arrowfun("GREAT!!")
*/


/*  // -------------------------- ForEach --------------------------------
const arr = {
    0: "squirrel",
    1: "alpaca",
    2: "buddy"
};
//arr.forEach((e, f) => console.log(e, f));
Object.entries(arr).forEach(entry => { // to iterate through Objects
    const [key, value] = entry;
    console.log(key, value);
  });
*/

/*
let arr1 = ["karachi","sydney", "london"];
let arr2 = ["khan","shah",...arr1, "john"];
console.log(arr2)
*/

/*
let val = [x,y,z];
let sum = (x,y,z) => console.log(x+y+z);
let arr = [2,4,6];

sum(arr); // will not give sum
sum(...arr); // will give sume i.e 12
*/

/*
function addTwoNumbers(x, y) {
    return x + y;
}

let resultsArr = [];
for (let i = 0; i < 10; i++) {
    let result = addTwoNumbers(i, 2 * i);
    resultsArr.push(result);
}
console.table(resultsArr);
*/


/*
// ======================== EX 6.4 =========================

let resultsArr = [];
for (let i = 0; i < 10; i++) {
    let val1 = i*5;
    let val2 = i*i;
    let result = addTwoNumbers(val1,val2);
    resultsArr.push(result);

}
console.log(resultsArr);
console.table(resultsArr);

function addTwoNumbers(x, y) {
    return x + y;
}

*/


// --------------------------- 3 AUG 2023 ---------------------------

/*
function testAvailability() {
    let y = "I'll return";
    console.log("Available here:", y);
    return y;
   }
   let z = testAvailability();
   console.log("Outside the function:", z);
   //console.log("Not available here:", y);
*/

/*
let val = 10;
function tester(val){
 val += 10;
 if(val < 100){
 return tester(val);
 }
 return val;
 
}
tester(val);
console.log(val);
*/

/*
let testFunction = function(){
    console.log("Hello");
   }();
*/


/*
(function () {
    console.log("Welcome");
   })();
   (function () {
    let firstName = "Laurence";
   })();
   let result = (function () {
    let firstName = "Laurence";
    return firstName;
   })();
   console.log(result);
   (function (firstName) {
    console.log("My Name is " + firstName);
   })("Laurence");
   
*/

/*
let test2 = (num) => num + 5;
console.log(test2(14));
*/


/*
var addFive1 = function addFive1(num) {
    return num + 2;
    };
    let addFive2 = (num) => num + 2;
    console.log(addFive1(14));
*/

// ========================================== EX: 6.5 ===========================================

/*

let value = "1000";
(function () {
    let value = "2000"
    console.log(value);
   })();

let result = (function () {
    let value = "result values"
    return value;
   })();
   console.log(value);
   console.log(result);

   (function (val) {
    console.log(`My name is ${val}`);
   })("talha");

*/

console.log("hi")