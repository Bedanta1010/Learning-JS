console.log("This is tutorial 9");

// let a  = 34;
// a += 1;
// a++;
// console.log(a);

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// let j = 0;
// while (j < 10) {
//     console.log(j);
//     j++;
// }

// In do-while loop the first statement always executes inspite of the condition

// let k = 0;
// do {
//     console.log(k + 1);
//     if (k === 5){
//         break;
//     }
//     k += 1;
// } while (k < 10);

// do {
//     if (k === 5){
//         k += 1;
//         continue;
//     }
//     console.log(k + 1);
//     k += 1;
// } while (k < 10);

// let arr = [2, 4, 7, 8, 9, 4];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

// arr.forEach(function(element, index, array){
//     console.log(element, index, array);
// });

let obj = {
    name: "Rohan Das",
    age: 27,
    type: "Programmer",
    OS: "Ubuntu"
}

for (let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}

console.log(`finished`);