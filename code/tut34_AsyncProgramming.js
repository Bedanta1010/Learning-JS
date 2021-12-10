console.log('Asynchronous Programming in JS');

// for (let index = 0; index < 45; index++) {
//     const element = index;
//     console.log(`This is index number ${index}`);
// }

// Example of Asynchronous Programming
setTimeout(() => {
    for (let index = 0; index < 45; index++) {
        const element = index;
        console.log(`This is index number ${index}`);
    } 
}, 100);

console.log('Printing Completed');