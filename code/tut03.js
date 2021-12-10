console.log('tut3')

// ==== Variable in JS ====
// Variables are made using { var, let, const }
var name = `Bedanta`;
var channel;
channel = `Code with Harry`  // Will show undefined if this line is commented
var marks = 34
// ==== By using backticks, single and double quote you can define that the variable is a string, but without those the variable will be counted as a number ====
console.log(name, channel, marks);

// ====== Rules For JavaScript ======
/*
    1. Cannot start with numbers.
    2. Can start with letters, numbers, _ or $.
    3. Are case sensitive.
*/

// var ^city = `Delhi`; <-- This is incorrect because of rule Number 2
// var _city = `Delhi`; <-- This is Correct {Underscore and $ are not recommended to use in jS}

const ownersName = `Ram Bhole`;
// ownersName = `John Walker`; <-- This is not possible since const doesnt support this type of changes {If you dont want to change any object then const is the right choice !!!}
console.log(ownersName);
const fruit = `Orange`;

// ==== let makes you create a local variable inside a block. If you put change the city object inside the block it will override the global variable ====
{
    let city = `Rampur`;
    city = `Kolkata`;
    console.log(city)
}

const arr1 = [12,23,12,53,3];
// arr1 = [45,78,96]; This is not possible (Error)
// arr1.push(45);
console.log(arr1);
// array is a collection of elements. Push lets the object to be pushed inside the element.

/* Common programming Case Types:
    1. camelCase
    2. kebab-case
    3. snake_case
    4. PascalCase
*/