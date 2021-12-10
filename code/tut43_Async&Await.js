console.log('Async and Await in Javascript');

// function bedanta(){
//     return "Bedanta";
// };
async function bedanta(){
    console.log('Inside the function');

    const response = await fetch('https://api.github.com/users');
    console.log('Before Response');
    const users = await response.json();
    console.log('Users resolved');
    return users;

    return "Bedanta";
};

console.log('Before calling the function');
a = bedanta();
console.log('After calling the function');
console.log(a);
a.then(data => console.log(data));
console.log('Last line of the file');