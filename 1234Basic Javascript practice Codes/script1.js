// First practice and learning codes 

// alert("Hello World")
// let js = "amazing"
// if (js === "amazing") alert('JavaScript is FUN!')
// js = 'boring'
// if (js === "amazing") alert('JavaScript is FUN!')
console.log(40 + 8 - 10 + 23);

let f = "Samit";
console.log(f);
console.log(f);
console.log(f);

let a = "a";
let b = "v";
let c = "c";
let $d = "dollar can be first letter of a variable name ";


let lowecase = "first letter cannot be uppercase.";
let PI = 3.1416;

true;
let aa = "true";
console.log(aa);

console.log(typeof true);
console.log(typeof aa);
console.log(typeof 23);
console.log(typeof 'Samit');

aa = 'YES!';
console.log(typeof aa);

let ab;
console.log(typeof ab);

const x = 2034;
const y = x - 1000;
const z = x + 2000;
console.log(y, z);
console.log(y + z, y * z, x / y, 2 ** 3);

const fn = "samit";
const ln = "saha";
console.log(fn + ' ' + ln);

const isfullage = 14 >= 3;
console.log(x - 1991 > x - 2018);

let ac, ad;
ac = ad = 25 - 10 - 5;
console.log(ac, ad);


// first challenge of Udemy test  
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
let BMIMark, BMIJohn;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(`Mark's BMI: ${BMIMark}`);
console.log(`John's BMI: ${BMIJohn}`);

const markHigherBMI = BMIMark > BMIJohn;
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}`);


// Second practice start 

const firstname = "Samit";
const job = 'teacher';
const birthyear = 1991;
const year = 2037;

const sam = "I'm " + firstname + ', a ' + (year - birthyear) + 'year old ' + job + '!';
console.log(sam);

const samit = `I'm ${firstname}, a ${year - birthyear} year old ${job}!`;
console.log(samit);

console.log(`just a regular string.`);
console.log(`String with \n\ multiple \n\ lines`);
console.log(`String with
multiple
lines`);

const age = 19;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log("Hello true");
}
else {
    console.log("Hello false");
    const years = 18 - age;
    console.log(`Hello years ${BMIMark}`);
}


// second code challange 

// Store Mark's and John's mass and height
const massMarks = 78; // in kg
const heightMarks = 1.69; // in meters

const massJohns = 92; // in kg
const heightJohns = 1.95; // in meters

// Calculate BMIs
const BMIMarks = massMarks / (heightMarks * heightMarks);
const BMIJohns = massJohns / (heightJohns * heightJohns);

// Compare BMIs and print the result
if (BMIMarks > BMIJohns) {
    console.log(`Mark's BMI (${BMIMarks}) is higher than John's (${BMIJohns})!`);
} else if (BMIJohns > BMIMarks) {
    console.log(`John's BMI (${BMIJohns}) is higher than Mark's (${BMIMarks})!`);
} else {
    console.log("Mark and John have the same BMI!");
}



const xy = '1999';
console.log(Number(xy), xy);
console.log(Number(xy) + 20);
console.log(Number('Samit'));
console.log(typeof NaN);
console.log(String(23), 23);
console.log('I am ' + 23 + ' yeara old');
console.log('I am ' + '23' + ' yeara old');
console.log('23' + '23' - '3');
console.log('23' / '3');
console.log('23' * '3');

let n = '1' + 1;
n = n - 1;
console.log(n);

if (23 === 23) {
    console.log('ok');
}

const has = true;
const had = false;

console.log(has && had);
console.log(has || had);
console.log(!has);
const should = has && had;
if (should) {
    console.log("haha");
}
else {
    console.log('lol');
}
const it = true;
console.log(has && had && it);

if (has && had && !it) {
    console.log("haha");
}
else {
    console.log('lol');
}



// challenge 3 test code 


const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins);
console.log(scoreKoalas)

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
}
else if (scoreDolphins == scoreKoalas) {
    console.log("Both win the trophy");
}
else {
    console.log("Koalas win the trophy");
}

// next challenge practice

if (1 === "1") {
    console.log("haha");
}
else {
    console.log('lol');
}

// switch break 

const day = "W";

switch (day) {
    case 'M':
        console.log('1');
        break;

    case 'T':
        console.log('2');
        break;

    case 'W':
        console.log('3');
        break;

    case 'S':
        break;
    default:
        console.log('no');
}

const ax = 'samit';
console.log(`I'm ${2024 - 1999} years old ${ax}`);

const ag = 23;
const drink = ag >= 28 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (ag >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'wine';
}
console.log(drink2);

console.log(`I like to drink ${ag >= 18 ? 'wine' : 'water'}`);