console.log('Destructuring in JS');

let a, b;

// ==== Array Destructuring ====

[a, b] = [7, 8];
// console.log(`${a} and ${b}`);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

({a, b , c, ...d} = {a:34, b:345, c:75, d:96, e:874});
// console.log(a, b, c, d);

const fruit = ['apple', 'banana', 'mango', 'orange'];
[a, b, c, d] = fruit;
// console.log(a, b, c, d);

// ==== Object Destructuring ====

const laptop = {
    model: "ASUS Strix",
    age: "7 months",
    price: 241000,
    gender: "Male",
    start: function () {
        console.log('started');
    }
};

const {model, age, price, gender, start} = laptop;
console.log(model, age, price, gender, start);
laptop.start();

// Will show undefined in price2
/*
const {model, age, price2} = laptop;
console.log(model, age, price2);
*/