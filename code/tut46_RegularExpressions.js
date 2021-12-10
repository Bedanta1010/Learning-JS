console.log('Regular Expressions and related Functions in JS');

// To create regular expression literal you need to put something between two slashes
let reg = /harry/;
reg = /harry/g; // g means global
reg = /Harry/i; // i means case insensitive

console.log(reg);
console.log(reg.source);

let s = "This is a line which includes harry ";
// Functions to match expressions

/* 
    1. exec() - this function will return an array for match and null for no match
*/

s = "This is a line which includes haRRy and there is another harry";

let result = reg.exec(s);
console.log(result);

// console.log(result.input);
// console.log(result.index);

// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);

/* 
    2. test() - Returns true or false
*/
let result2 = reg.test('harry');
console.log(result2);

/*
    3. match() - Will return an array of results or null
*/
// This is wrong
// let result3 = reg.match(s)

// This is right
let result3 = s.match(reg);
console.log(result3);

// In global flag it will return both the results together unlike exec function

/*
    4. search() - Returns index of first match else -1
*/
let result4 = s.search(reg);
console.log(result4);

/*
    replace() - Returns new replaced string with all the replacements
*/
let result5 = s.replace(reg, 'Bedanta');
console.log(result5);
// It will replace all the similar words in the global flag unlike exec