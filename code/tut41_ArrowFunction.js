console.log(`Tutorial on Arrow Functions`);

// const func = ()=>{
//     console.log('This is the best function to exist.');
// };

// func();

// const greet = ()=>{
//     return "Good Morning";
// };

// Another way to write the above greet function
// const greet = () => "Good Morning";

// Way to return a object
// const greet = () => ({name: 'Bedanta'})

// console.log(greet());

// For one argument you can remove the parenthesis, although for more than one you have to put them in a parenthesis
const greet = (name) => `Good Morning ${name}`;
console.log(greet('Bedanta'));