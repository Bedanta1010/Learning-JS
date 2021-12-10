console.log('Maps in JavaScript');

// We can use any type of key or values in Maps
const myMap = new Map();
// console.log(myMap);

const key1 = 'some string',
    key2 = 45,
    key3 = function () { };

// Setting Map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is an integer');
myMap.set(key3, 'This is an empty function');

// console.log(myMap);

// Getting the values from a map
let value1 = myMap.get(key1);
// console.log(value1);
// console.log(myMap.get(key2));

// Get size of the Map
// console.log(myMap.size);

// Looping through keys and values using For..of loop
// for (let [key, values] of myMap) {
//     console.log(`Key: ${key} | Value: ${values}`);
// }

// Get only keys and values
// for (let keys of myMap.keys()) {
//     console.log(`Key is ${keys}`);
// }

// for (let values of myMap.values()) {
//     console.log(`Value is '${values}'`);
// }

// ForEach loop
// myMap.forEach((keys, values)=>{
//     console.log(`Key is ${keys}`);
//     console.log(`Value is ${values}`);
// })

// Converting map into an array
let myArray = Array.from(myMap);
console.log(myArray);

// Getting keys and array separately through an array
let myKeysArray = Array.from(myMap.keys());
let myValuesArray = Array.from(myMap.values());

console.log('Map to key arrays', myKeysArray);
console.log('Map to value arrays', myValuesArray);