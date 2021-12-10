console.log("Math Object in JavaScript");

let x = 14;
let y = 98;
let z;
z = x + y;
z = x - y;
z = x * y;
z = x / y;

// ==== Math Object ====
z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(7.5);
z = Math.ceil(7.5);   // It will always round to the highest closest int whatever the decimal be..
// Floor always throws the smallest near the number specified (opposite to ceil)
z = Math.floor(4.2);
z = Math.floor(-4.2);

z = Math.abs(-7.2);  // Absolute value :)
z = Math.sqrt(64);
z = Math.pow(7, 3);
z = Math.min(1, 78, 85, -2, 54);
z = Math.max(1, 78, 85, -2, 54);

z = Math.random() * 100;
z = 50 + Math.random() * (100-50);  // Random num between 50 and 100
z = Math.floor(Math.random() * 100);

console.log(z);