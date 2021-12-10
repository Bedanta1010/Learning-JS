// ==== Type conversion and Type coercion ====

// ==== Type conversion ====
console.log('Welcome to tut 5');
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr = String([1,5,7,9]);
console.log(arr, (typeof arr));

let i = 8;
// let i = true;
// let i = new Date();
// console.log(i.toString());

let stri = Number("3344");
// let stri = Number(true); Will show 1 because it is default value
// stri = Number("34d34");  Will show NaN (Not a number)
// stri = Number([4,7,5,8,1,5,3]);  Will show NaN (Not a number)
console.log(stri, (typeof stri))

// let number = parseInt('34.098'); // It is a int so it will show only 34
let number = parseFloat('34.098'); 
// let number = Number('34.098');
console.log(number, (typeof number));
// console.log(number.toFixed(30), (typeof number)); // .toFixed() can let you print the amount of decimal places required

// ==== Type coercion ====
// let mystr = Number("698");
let mystr = "698";
let mynum = 34;
console.log(mystr + mynum);