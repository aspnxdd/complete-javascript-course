/*
let js = 'amzing';
let ji;
console.log(40 + 8);

// Type of variable
console.log(typeof ji)

const a = 2;
//const a=3; // Can't do this

let b = 3;
b = 4;

//var is old way of declaring variables prior to ES6
var c = 5;
c = 6; //it works
console.log('a' + 'b')
*/
//-----------------------------------------------------------------------------
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn=92;
const heightJohn=1.95;

const BMI = (mass, height) => mass / height **2;
console.log(BMI(massMark,heightMark));
console.log(BMI(massJohn,heightJohn));
console.log(BMI(massJohn,heightJohn)>BMI(massMark,heightMark));

const newString = `I'm ${heightMark} meters tall. 😍`;
console.log(newString);

if(true){
    let century=20;
}
// console.log(century); since century is inside a block it is not defined elsewhere.

console.log(Boolean(00));
*/
//-----------------------------------------------------------------------------
/*
console.log(18 === '18'); //false. triple equal does not have type coercion
console.log(18 == '18'); //true

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ? () => alert('Hello') : () => alert("Greetings!");

welcome();
console.log(typeof welcome)*/ //////////////
/*

let day = prompt("what day is it?")

switch(day){
    case 'monday':
        console.log('Plan monday')
        break;
    case 'tuesday':
    case 'wednesday':
        console.log('Plan 2')
    case 'monday':
        console.log('das');
    default:
        console.log('xD')


}
*/

const bill = prompt('bill?')

const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`the bill was ${tip}`);