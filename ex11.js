var sl = ["Milk","Bread","Apples"];
//console.log(sl.length);
sl[1] = "Banana";
//console.log("Updated Array-->",sl);
//console.log(sl.length);
sl.push("Eggs");
console.log(sl);
sl.pop();
console.log(sl);
//sl.splice(2,0,"Biscuit","Tea","Mango");
//console.log(sl);
sl.splice(2,1,"Biscuit","Tea","Mango"); //remove the 1 element from index 2 i,e Apples
//console.log(sl);
sl.shift();//remove first element
//console.log(sl);
sl.unshift(1);//add the first element
//console.log(sl);
var sl2=[1,2,3,4,5,6,7,8,9,10]
sl3 = sl.concat(sl2);
console.log(sl3);

