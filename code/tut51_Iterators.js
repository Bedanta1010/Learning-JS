console.log('Iterators in JS');

function fruitIterator (values){
    let nextIndex = 0;
    // We will return the object from the function
    return {
        next: function(){
            if (nextIndex < values.length){
                // Return the object to the next: function block
                return {
                    value: values[nextIndex++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
};

const myArr = ['Apples', 'Grapes', "Oranges", 'Banana'];
console.log('My array is', myArr);

// Using the iterator
const fruits = fruitIterator(myArr);
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());

console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);