console.log('Date Object or Module in JavaScript');

// Initialize Date Module
let today = new Date();
// console.log(typeof(today));
// console.log(today);

let otherDate = new Date('2-6-2006 22:10:17');
// otherDate = new Date('March 18 2003');
console.log(otherDate);

a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getHours();
a = otherDate.getSeconds();
a = otherDate.getTime();  // Timestamp
a = otherDate.getMilliseconds();
a = otherDate.getMonth();   // Counted from 0 as January

console.log(a);

otherDate.setDate(15);
otherDate.setMonth(0);
otherDate.setFullYear(2021);
otherDate.setMinutes(54);
otherDate.setHours(15);
console.log(otherDate);
