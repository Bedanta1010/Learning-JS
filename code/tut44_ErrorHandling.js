console.log('Error Handling and Try Catch function in JS');

let a = 'This is a variable';
a = undefined;

if (a != undefined){
    throw new Error('This is not undefined');
} else {
    console.log('This is undefined');
}

try {
    // kjkaskajskaj
    // null.console
    console.log('We are inside try block');
    someFunc();
} catch (error) {
    console.log(`Are you ok? Error: ${error}`);
    // console.log(error);
    // console.log(error.name);
    // console.log(error.message);
} finally {
    console.log('Finally we will run this');
}