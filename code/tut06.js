const name = 'Bedanta';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html = "<h1>This is a heading </h1>" +
        "<p>This is a para</p>";
html = html.concat('this', ' str2');

console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toLocaleUpperCase());

// console.log(html[0]);
// console.log(html.indexOf('This'));
// // console.log(html.indexOf('<'));
// console.log(html.indexOf('jsdjasaakfj')); // Will show -1
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(1));
// console.log(html.endsWith('str2')); // Will show false if the condition is not matching
// console.log(html.includes(' fg')); // Will show false or true regarding the condition
// console.log(html.substring(1,5)); // Will show all the characters from index 1 to 4 (5-1)
// // console.log(html.substring(-4)); // Will print the whole script (Here, html)
// console.log(html.slice(0, 4)); // Same as substring
// // console.log(html.slice(-4)); // Will return the last 4 indexes
// console.log(html.split(' '));
// console.log(html.replace('This', 'it')); // It will replace only the first occurence


let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
<h1> This is heading </h1>
<p> You like ${fruit1} and ${fruit2}`;
document.body.innerHTML = myHtml;