console.log('Tutorial 14');

/*
    Element Selectors:

    1. Single Element Selector
    2. Multi Element Selector
*/

// ===== Single Element Selectors =====

let elem = document.getElementById('myfirst');
// elem = elem.className;
// elem = elem.childNodes;
// elem = elem.parentNode;

// Changes the color to red 
// elem.style.color = 'red';
// elem.innerText = 'Testing text';
// elem.innerHTML = '<strong>Inner HTML Selector</strong>';
// console.log(elem.innerHTML);

// console.log(elem);

let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('div');
// Will show only the first div ^^

// sel.style.color = 'green';

// console.log(sel);

// ===== Multi Element Selector =====
let elems = document.getElementsByClassName('child');

// elems = document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'));

elems = document.getElementsByTagName('div');

// console.log(elems);
// console.log(elems[1]);

// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = 'blue';
// });

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
// };