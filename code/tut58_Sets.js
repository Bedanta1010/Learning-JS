console.log('Sets in JavaScript');

// Set stores unique values
let mySet = new Set();

// Adding values to this set
mySet.add('Line');
mySet.add('Name is');
mySet.add('Line');
mySet.add(35);

console.log(mySet);
console.log(mySet.size);

// let mySet2 = new Set([45, false, 'New Set', {a:4, b:78}, ['Another Array'], 45]);
// console.log(mySet2);

console.log(mySet.has(34));

// console.log(`Before removal (was there 35 before: ${mySet.has(35)})`, mySet);
// mySet.delete(35);
// console.log(`After removal (is there 35 after: ${mySet.has(35)})`, mySet);

// Iterating a set
for (let item of mySet) {
    console.log(`Item:`, item);
}

// mySet.forEach((item)=>{
//     console.log(item);
// })

let someArray = [7, 8, 9, 4, 5, 7, 2, 15, 6, 9, 1, 4];
const newSet = new Set(someArray);
let uniqueSet = Array.from(newSet);
console.log(uniqueSet);