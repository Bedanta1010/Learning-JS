console.log('MetaCharacters in JS');

let regex = /bedanta/;

// MetaCharacters in Regular Expressions
regex = /^be/; // ^ represents starts with
regex = /ta$/; // $ at the end represents ends with
regex = /bed.nta/; // . matches any character present at its position
regex = /be*ta/; // * matches 0 or more character present at its place
regex = /bedab?nta/; // b? represents that b is optional in that string
// regex = /bed\*ta/;

let str = 'bedanta plays football, bedanta codes bedanta';
let result = regex.exec(str);

console.log(`The result from exec is`, result);
// console.log(`The result from exec is ${result}`);

if (regex.test(str)) {
    console.log(`The string '${str}' matches the expression ${regex.source}`);
} else {
    console.log(`The string '${str}' doesn't match the expression ${regex.source}`);
}