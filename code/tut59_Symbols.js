console.log('Symbols in JS');

let sym1 = Symbol('Identifier');
let sym2 = Symbol('Identifier');
console.log('Symbol:', sym1);
console.log(`Type of Symbol is ${typeof(sym1)}`);

console.log(sym1 === sym2);

const a = 'this is';
const b = 'this is';

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol('Identifier for k1');
const k2 = Symbol('Identifier for k2');

let myObj = {};
myObj[k1] = "Harry";
myObj[k2] = "Bedanta";
myObj["name"] = "Something";
myObj[4] = "An integer";

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);

for (key in myObj){
    console.log(key, myObj[key]);
}
// Symbols are ignored in for in loop

console.log(JSON.stringify(myObj));