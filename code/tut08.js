console.log('This is Tutorial 8 !!');

const age = 15;
const doesDrive = true;
// const vari = 34;

// if (age!=19){
//     console.log('Age is 19 years !')
// }// else if (age === 65){
//     console.log('Age is 65 years !')    
// }else{
//     console.log('Age is not 19 years !')
// }

// if (age !== 65){
//     console.log('Age is 65 years !');  
// }else{
//     console.log('Age is not 19 years !');
// }

// if (typeof vari !== 'undefined'){
//     console.log("vari is defined");
// }else{
//     console.log("vari is undefined");
// }

// if (doesDrive && age>18){
//     console.log("You can drive");
// }else{
//     console.log("You cannot drive")
// }

// if (doesDrive || age>18){
//     console.log("You can drive");
// }else{
//     console.log("You cannot drive");
// }

// console.log(age == 45? 'Age is 45': 'Age is not 45');

switch (age) {
    case 18:
        console.log("You are 18");
        break;
    case 28:
        console.log("You are 28");
        break;
    case 38:
        console.log("You are 38");
        break;
    default:
        console.log("You are unknown age")
        break;
}


// == only checks the value whereas === checks for whether the condition is string and its value too