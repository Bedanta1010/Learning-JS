// ===== Primitive Data Types =====

// String 
var name = `Bedanta`;
console.log(`This is a string: ` + name);
console.log(`Data Type is ` + (typeof name)); // typeof allows to find the data type of the variiable assigned to it

// Numbers 
let marks = 1010;
console.log(`Data type is ` + (typeof marks));

// Boolean
let isDriver = true; 
console.log(`Data type is ` + (typeof isDriver));

// Null
let nullVar = null;
console.log(`Data Type is ` + (typeof nullVar)); // This is a primitive although it has a bogus return value

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// Object literals 
let stMarks = {
    harry: 34,
    shubham: 38,
    Rohan: 45 
}
// If space is given in a block then the indentifier shows error. You need to use ',",` to make then space count.
console.log(stMarks);
console.log(typeof stMarks);
function findName() {
    
}
console.log(typeof findName);
let date = new Date();
console.log(typeof date);