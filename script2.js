// 'use strict';
// let s = false;
// const p = true;

// if (p) s = true;
// if (s) console.log('I am good');


// // const i = 'audio';
// // const ii = 123;

function logger() {
    console.log('Samit');
}

logger();

function fruite(app, org) {
    console.log(app, org);
    const juice = `juice with ${app} apples and ${org} oranges.`;
    return juice;
}

const ajuice = fruite(5, 0);
console.log(fruite(6, 10));
console.log(ajuice);


function callage(birthyear) {
    return 2037 - birthyear;
}

const a1 = callage(1991);
console.log(a1);

const callage2 = function (birthyear) {
    return 2037 - birthyear;
}

const a2 = callage2(1991);
console.log(a1, a2);

const years = (birthyear, firstname) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years`;

}

console.log(years(1991, 'samit'));
console.log(years(1991, 'saha'));


const cut = function (fruit) {
    return fruit * 4;
}

const fruites = function (app, org) {
    const apps = cut(app);
    const orgs = cut(org);

    const juice = `juice with ${apps} apples and ${orgs} oranges.`;
    return juice;
}

console.log(fruites(2, 3));


// challenge 1

// Calculate average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Calculate average scores for Dolphins and Koalas
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

// Function to check the winner
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
};

// Test data 1
checkWinner(scoreDolphins, scoreKoalas);

// Test data 2
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));


// next practice part - array

const friend = ['samit', 'akib', 'bulbuli'];
let f = 'saha';
let g = [friend[0], f, friend[1], friend[2], friend.length - 1, 'friends.'];
console.log(g);

const call = birthyear => 2037 - birthyear;
const year = [1990, 1967, 2002, 2010, 2018];

const ag1 = call(year[0]);
const ag2 = call(year[1]);
const ag3 = call(year[year.length - 1]);
console.log(ag1, ag2, ag3);

const ages = [call(year[0]), call(year[1]), call(year[year.length - 1])];
console.log(ages);


