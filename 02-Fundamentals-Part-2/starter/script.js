'use strict'; //used to create visible errors and avoid bugs with
/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if(hasDriversLicense) console.log('i can drive')*/

// Function declaration
/*
const hola = function dirHola (){
console.log('Hola');
}

// Function expression
const hola2 = function (){
console.log('Hola2');
}

hola();
hola2();*/

//Part 2 Coding Challenge #1------------------
//const Dolphins = average(44,23,71);
//const Koalas = average (65,54,49);
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreKoalas = calcAverage(6665, 54, 49);
const scoreDolphins = calcAverage(441, 123, 171);
console.log('koalas: ', scoreKoalas, 'dolpghins', scoreDolphins)

const checkWinner = (avgDolphins, avgKoalas) => {
const winner = avgKoalas > 2 * avgDolphins ? 'Koalas' : avgDolphins > 2 * avgKoalas ? 'Dolphins' : 'No winner';
switch (winner) {
case 'Dolphins':

return `${winner} win ${avgDolphins} vs ${avgKoalas}`
break;
case 'Koalas':

return `${winner} win ${avgKoalas} vs ${avgDolphins}`
break;
default:
return 'no winner'
}
}
console.log(checkWinner(scoreDolphins, scoreKoalas));

/*
const friends = ['arnau','marc'];
console.log(friends.push('toni')); //add element at the end
console.log(friends.unshift('john')); //add element at the start
console.log(friends);
console.log(friends.pop()); //deletes last element
console.log(friends.shift())//deletes first element
console.log(friends.indexOf('marc')) //position in array
console.log(friends.includes('asdas')); //check if element exists in array
*/
/*
const bills = [125, 555, 44]

const calcTip = bill => {
return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let tips=[];
let billsAndTips=[];
for (let i = 0; i < 3; i++) {
tips[i] = calcTip(bills[i]);
billsAndTips[i]=bills[i]+tips[i];
}
console.log(tips)
console.log(billsAndTips)

*/

/*
const jonas = {
  name: 'jonas',
  friends: ['mike', 'jim', 'scooby'],
  birthYear: 1991,
  hasCar: true,
  calcAge: function () {
    this.age = 2020 - this.birthYear;
    return this.age
  },
  getSummary: function(){
    return `${this.name}'s best friend is ${this.friends[0]} and was born in ${this.birthYear}, he has ${this.hasCar ? 'a':'no'} car`
  }
}

//console.log(`${jonas.name} has ${jonas.friends.length} and his best friend is ${jonas.friends[0]}`)
console.log(jonas.calcAge());
console.log(jonas);
console.log(jonas.getSummary())
//console.log(jonas['calcAge']())
*/ //////////////
/*
const Mark = {
  name: 'Mark',
  lastName: 'Miller',
  mass: 788,
  height: 1.69,
  calcBMI: function(){
    this.BMI = this.mass / this.height**2;
    return this.BMI;
  }
}

const John ={
  name: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.BMI = this.mass / this.height**2;
    return this.BMI;
  }
}

Mark.calcBMI();
//console.log(Mark)
John.calcBMI();
//console.log(John)
console.log(`${Mark.BMI > John.BMI ? Mark.name +"'s BMI " + "("+Mark.BMI+") is higher than "+John.name+"'s " + John.BMI : John.name +"'s BMI " + "("+John.BMI+") is higher than "+Mark.name+"'s " + Mark.BMI} `)
*/
/* -- Loop
const types = [];
const jonas = [
  'jonas',
  'jonsas',
  1, 5,
  true,
  'as'
]
for (let i = 0; i < jonas.length; i++) {
  types.push(typeof jonas[i])
}
console.log(types)

// Continue exits the current iteration 'continue' is executed
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof (jonas[i]))
}

// Break exits the whole loop when 'break' is executed
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'number') break;
  console.log(jonas[i], typeof (jonas[i]))
}*/
/*
// Looping backwards
const jonas = [
  'jonas',
  'smith',
  2020 - 1991,
  true,
  'California'
]
console.log(jonas.length)
for (let i = jonas.length - 1;i>=0;i--){

}*/

// While loop
/*
let rep = 1;
while (rep <= 10) {
  console.log(`Repetition number ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(dice)
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice===6){ //when line 179 => dice=6 it doesnt break till current iteration is over
    console.log('loop is over')
  }
}*/

// Coding challenge 4
/*
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcAverage = arr => {
  let sum=0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i]
  }
  return sum / arr.length
}

for (let i = 0; i <= bill.length - 1; i++) {
  tips.push(calcTip(bill[i]));
  totals.push(bill[i] + tips[i]);
  console.log(`Index: ${i} Tips: ${tips[i]}, totals: ${totals[i]}`)
  console.log(calcAverage(totals));
}
*/
