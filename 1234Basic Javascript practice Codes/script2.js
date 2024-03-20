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
};

const a2 = callage2(1991);
console.log(a1, a2);

const years = (birthyear, firstname) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  return `${firstname} retires in ${retirement} years`;
};

console.log(years(1991, 'samit'));
console.log(years(1991, 'saha'));

const cut = function (fruit) {
  return fruit * 4;
};

const fruites = function (app, org) {
  const apps = cut(app);
  const orgs = cut(org);

  const juice = `juice with ${apps} apples and ${orgs} oranges.`;
  return juice;
};

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
    console.log('No team wins...');
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

friend.pop();
const pop = friend.pop();
console.log(pop);
console.log(friend);

friend.shift();
console.log(friend);

console.log(friend.indexOf('Steven'));
console.log(friend.indexOf('obbb'));

friend.push(23);
console.log(friend.includes('Steven'));
console.log(friend.includes('Steven'));
console.log(friend.includes(23));

if (friend.includes('Peter')) {
  console.log('hiiii');
} else {
  console.log('bye');
}

// challenge 2

// Function to calculate tip
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test the function with a bill value of 100
console.log(calcTip(100)); // Output: 15

// Test data
const bills = [125, 555, 44];

// Calculate tips for each bill
const tips = bills.map(bill => calcTip(bill));
//const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ];
console.log(bills, tips); // Output: [18.75, 111, 8.8]

// Calculate total values
const totals = bills.map((bill, index) => bill + tips[index]);
// const totals = [ bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ];
console.log(bills, tips, totals); // Output: [143.75, 666, 52.8]

// practice part start - Objects

const s = {
  firstname: 'Samit',
  lastname: 'Saha',
  age: 2024 - 1999,
  job: 'bekar',
  friend: ['deb', 'hir', 'hos'],
};

console.log(s);
console.log(s.lastname);
console.log(s.firstname);

const namekey = 'name';
console.log(s['first' + namekey]);
console.log(s['last' + namekey]);

const interest = prompt(
  'what do you want to know about jonas? choose between firstname, lastname, age, job and friends'
);

if (s[interest]) {
  console.log(s[interest]);
} else {
  console.log('Wrong request!send again!');
}

s.location = 'narayanganj';
s['gamil'] = 'samitsaha99@gmail.com';
console.log(s);

// challange -> s has 3 friends and his best friend is called deb

console.log(
  `${s.firstname} ${s.lastname} has ${s.friend.length} friends, and his best friend is called ${s.friend[0]}. `
);

const ss = {
  statue: '10600',
  firstname: 'Samit',
  lastname: 'Saha',
  birthyear: 1999,
  job: 'bekar',
  friend: ['deb', 'hir', 'hos'],
  hasDriverLicense: true,

  calAge: function () {
    this.age = 2024 - this.birthyear;
    return this.age;
  },

  getSummary: function () {
    return `${this}`;
  },
};

console.log(ss.calAge());

// challange 3

// Define Mark and John objects
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  // Method to calculate BMI
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  // Method to calculate BMI
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

// Calculate BMI for both Mark and John
mark.calcBMI();
john.calcBMI();

// Determine and log who has the higher BMI
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
} else {
  console.log(
    `Both ${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`
  );
}

// challenge 4

// Function to calculate tip
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test data
const Bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const Tips = [];
const Totals = [];

// Calculate tips and totals
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  Tips.push(tip);
  totals.push(Bills[i] + ip);
}

console.log('Tips:', Tips);
console.log('Totals:', Totals);

// Function to calculate average
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Calculate average of totals
console.log('Average of totals:', calcAverage(Totals));

// practice.
// we are going to use strict mode in all scripts now.

('use strict');
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge);

// BUG

const caall = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const c = temps[i];

    if (typeof c !== 'number') continue;

    if (c > max) max = c;
    if (c < min) min = c;
  }

  console.log(max, min);
  return max - min;
};

const a = caall([3, 4, 5], [9, 7, 1]);
console.log(a);

// another

const d1 = [17, 21, 23];
const d2 = [12, 5, -5, 0, 4];

console.log(`... ${d1[0]}C ... ${d1[1]}C ... ${d1[2]}C ...`);

const print = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};
print(d1);
