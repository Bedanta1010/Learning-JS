console.log(`Welcome to Tutorial 7 !!`);
let marks = [78, 45, 89, 96, 24, 62];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [4, 5]];

const arr = new Array(45, 78, 91, 'Orange');
// console.log(arr);
// console.log(mixed);
// console.log(marks);
// console.log(fruits[1]); // It will print the array in index 1.
// console.log(arr.length);

// console.log(Array.isArray(arr));
// console.log(Array.isArray('jaskaj')); // If it is not a array it will show false.

// ==== Restoring value of Array's ====
arr[0] = `Bedanta`;
let arrElement = arr[0];
// console.log('Element :' + arrElement);
// console.log(arr);

// console.log(marks);
let value = marks.indexOf(45);
// console.log(value);

// ==== Mutating or Modifying Arrays ====
// marks.push(3451);
// marks.unshift(124);
// marks.pop();
// marks.shift();
// marks.splice(1, 3); // Will remove all the characters from index 1 to 3
// marks.reverse();
let marks2 = [1, 7, 8, 15];
marks = marks.concat(marks2);
// console.log(marks);

let myObj = {
    name: `Harry`,
    channel: "CodeWithHarry",
    isActive: true,
    marks: [1, 5, 12, 19]
}
console.log(myObj);
console.log(myObj.marks);
console.log(myObj['name']);
// Both the above 2 commands are same.

// If there is const variable, then you can't change it but you can modify it.