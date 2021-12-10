console.log('For.. of VS For.. in JavaScript Loops');

let people = ["Bedanta", "Harry", "Shubham", "Rakesh", "Abhi"];

let obj = {
    name: "Bedanta",
    language: "JavaScript",
    hobbies: "Football"
};

// Iterating object using traditional for loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// === For-in Loop ===
// for (key in obj){
//     console.log(obj[key]);
// }

let myString = "This is my string for JS";
// for (char in myString){
//     console.log(myString[char]);
// }

// === For-of Loop ===
for (let name of people){
    console.log(name);
}
// This will print all the index of characters instead
// for (let name in people){
//     console.log(name);
// }

for (let char of myString){
    console.log(char);
}