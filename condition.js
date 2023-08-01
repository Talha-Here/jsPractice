/*  31/July/2023 blockChain bootcamp   */
const prompt = require("prompt-sync")();

// let hobby = prompt("Enter your hobby: ");
// switch(hobby){
//     case "coding":
//         console.log("I like coding");
//     case "painting":
//         console.log("I like painting");
//     case "playing":
//         console.log("I like playing");
//     case "reading":
//         console.log("I like reading");
//     break;
//     default:
//         console.log("this hobby is not in the list")
// }
// ------------------------ EX 1 ------------------------------------------------
// var age = prompt("Enter your age: ");
// console.log("Type of age prompt: ",typeof(age))
// var ageInNum = parseInt(age);
// console.log("Type of age after parseInt: ",typeof(ageInNum))

// let x = console.log("Age is: ", ageInNum);
// SWITCH case not working
// switch(ageInNum){
//     case ageInNum >= 21:
//         console.log("entry confirm & drinks allowed");
//         break;
//     case ageInNum <= 19:
//         console.log("entry confirm but drinks NOT allowed");
//         break;
//     default:
//         console.log("Entry DENIED");
// }

// if (ageInNum >= 21){
//     console.log("entry confirm & drinks allowed");
// } else if (ageInNum <= 19){
//     console.log("entry confirm but drinks NOT allowed");
// } else {
//     console.log("Entry DENIED");
// }

//-----------------------------------EX 2 ------------------------------------------------

let randomNum =Math.floor(Math.random() * 3);
console.log((randomNum))
var input = prompt("Enter your question: ");
//console.log(typeof(input))
switch(randomNum){
    case 0 :
        console.log("It is certain"); break;
    case 1 :
        console.log("Yes definitely"); break;
    case 2 :
        console.log("Outlook good"); break;
    default:
        console.log("answer not available")

}