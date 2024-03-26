'use strict';

const weekdays = ['sat', 'sun', 'mon', 'tues', 'wed', 'thu', 'fri'];
const openingHours = {
  [weekdays[5]]: {
    open: 12,
    close: 22,
  },
  [weekdays[6]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2]]: {
    open: 0,
    close: 24,
  },
};

const resturant = {
  name: 'Ananda Resturant',
  location: 'Narayanganj, Dhaka',
  categories: ['Bengali', 'Moglai', 'Biriyani', 'Drinks'],
  starterMenu: ['a', 'b', 'c', 'd', 'e'],
  mainMenue: ['P', 'Pa', 'Ri'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenue[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20.00',
    address,
  }) {
    console.log(
      `Order recevied! ${this.starterMenu[starterIndex]} and ${this.mainMenue[mainIndex]} will be deliverd to ${address} at ${time}.`
    );
  },
  openingHours, // ES6 enhanced object literals
  orderPasta: function (i1, i2, i3) {
    console.log(`Here is your delicious pasta with ${i1}, ${i2}, ${i3}`);
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

const arr = [2, 3, 4];
const aa = arr[0];
const ba = arr[1];
const ca = arr[2];

//destructuring assignment
const [x, y, z] = arr; // destructuring array  -> [x , y , z] are not arry. are single variables which takes values from the array based on their value of index number.
console.log(x);
console.log(y);
console.log(z);
console.log(x, y, z);
console.log(arr);

let [main, , , secondary] = resturant.categories;
console.log(main, secondary);

// switching variables
const temp = main; // swapping values front (1 to 2) and (2 to 1).
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main]; // short cut to swap valeus.
console.log(main, secondary);

const [starterMenu, mainMenu] = resturant.order(2, 0); // receive 2 return values from a function.
console.log(starterMenu, mainMenu);

const nested = [2, 4, [5, 6]]; // nested destructuring
const [a, b, [c, d]] = nested;
console.log(aa, b, [c, d]);

const [p = 1, q = 1, r = 1] = [8, 9]; // default values
console.log(p, q, r);

//Practice.

//1.1
//Destructure the books array into two variables called firstBook and secondBook.
// const [firstBook, secondBook] = books;

//1.2
//Destructure the books array into a variable called thirdBook. You must skip the first two books.
// const [, , thirdBook] = books;

// 1.3
// Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;

// 1.4
// Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// /////////////////////  Destruction Objects   /////////////////////
const { name, openingHourss, categories } = resturant;
console.log(name, openingHourss, categories);

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = resturant;
console.log(resturantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = resturant; // default values
console.log(menu, starters);

let xx = 111; // Muatting variables
let yy = 999;
const obj = { xx: 23, yy: 7, zz: 14 };
({ xx, yy } = obj);
console.log(xx, yy);

// Nested Objects
const {
  fri: { open: oo, close: cc },
} = openingHours;
console.log(oo, cc);

resturant.orderDelivery({
  time: '22:30',
  address: 'xyz',
  mainIndex: 2,
  starterIndex: 2,
});
resturant.orderDelivery({
  address: 'xyz',
  starterIndex: 3,
});

// //////////////////// The Spread Operators ///////////////

// spread operators are used where we would otherewise write values, separated by comma, the rest pattern is basically used where we would otherwise write variable names separated by commas.
const ar = [7, 8, 9, ...[3, 4]]; // spread, because of RIGHT side of =

const [s, f, ...others] = [1, 2, 3, 4, 5, 6]; // rest, because on LEFT side of =
console.log(s, f, others);
const badNewAr = [1, 2, ar[0], ar[1], ar[2]];
console.log(badNewAr); // same output

const newAr = [1, 2, ...ar];
console.log(newAr); // same output
console.log(...newAr); // get the value individually. not as array

const newMenu = [...resturant.mainMenue, 'LOL'];
console.log(newMenu);
console.log(...newMenu);

// copy array
const mainMenuCopy = [...resturant.mainMenue];

// join 2 array
const menuee = [...resturant.mainMenue, ...resturant.starterMenu];
console.log(menuee);

// Iterables: arrays, strings, maps, sets, not objects.
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// Real world example - using prompt
// const ing = [
//   prompt("Let's make pasta"),
//   prompt("Let's make pasta"),
//   prompt("Let's make pasta"),
// ];
// console.log(ing);
// resturant.orderPasta(ing[0], ing[1], ing[2]);
// resturant.orderPasta(...ing);

// Objects
const newRes = { ...resturant, founding: 2024, founder: 'Samit' };
console.log(newRes);
const resturantCopy = { ...resturant };
resturantCopy.name = 'Sugondha';
console.log(resturant.name);
console.log(resturantCopy.name);

const [P, Pa, ...otherfood] = [
  ...resturant.mainMenue,
  ...resturant.starterMenu,
];
console.log(P, Pa, otherfood);

//objects
const { sat, ...weekdayss } = resturant.openingHours;
console.log(weekdayss);

// Functions -> rest parameters. rest syntax.
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};
add(2, 3);
add(3, 4, 5, 7, 6);

const xq = [23, 4, 5];
add(...xq);

resturant.orderPizza('mashroom', 'onion', 'olives', 'spices');
resturant.orderPizza('mushrooms');

//  ////////////// Short Circuting (&& and ||)
console.log('----OR----');
console.log(3 || 'Samit'); // use any data type and return any data type and something called short-circuiting.
console.log('' || 'Samit');
console.log(true || 0);
console.log(undefined || null);

resturant.numGuests = 0;
const g1 = resturant.numGuests ? resturant.numGuests : 10;
console.log(g1);

const g2 = resturant.numGuests || 10;
console.log(g2);

console.log('----AND----');

console.log(0 && 'Samit');
console.log(7 && 'Samit');

// practival example
if (resturant.orderPizza) {
  resturant.orderPizza('LOL', 'LALA');
}

// ///////////  Logical Assignment Operators ////////////////
console.log('///////////  Logical Assignment Operators ////////////////');
const g3 = resturant.numGuests ?? 10;
console.log(g3);

// ///////////  the nullish coalescing operator ////////////////
console.log('the nullish coalescing operator');
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'la Piazza',
  owner: 'Samit',
};

// OR assignment operator
rest2.numGuests = rest1.numGuests || 10;
rest1.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

// AND assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

// //////// Looping Arrays: The for-of Loop////////
for (const item of menuee) console.log(item);
for (const item of menuee.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
for (const [i, el] of menuee.entries()) console.log(`${i + 1}: ${el}`);
console.log([...menuee.entries()]);
console.log(menuee);

// //////// Optional Chainning ////////
console.log('//////// Optional Chainning ////////');

if (resturant.openingHours && resturant.openingHours.mon)
  console.log(resturant.openingHours.mon.open);
console.log(resturant.openingHours.mon?.open);
console.log(resturant.openingHours?.mon?.open);

const days = ['sat', 'sun', 'mon', 'tues', 'wed', 'thu', 'fri'];
for (const day of days) {
  console.log(day);
  const open = resturant.openingHours[day]?.open;
  console.log(`On ${day} we open at ${open}`);
}
// property names
console.log('/////// property names ////////');
const po = Object.keys(openingHours);
console.log(po);

let o = `We are open on ${po.length} days: `;
for (const day of po) o += `${day}, `;
console.log(o);

// property values
console.log('/////// property values ////////');
const val = Object.values(openingHours);
console.log(val);

// Entire objects
console.log('/////// Entire objects ////////');
const en = Object.entries(openingHours);
console.log(en);

console.log('/////// Entire objects  ////////');
for (const [x, { y, z }] of en) console.log(`${x},${y},${z}`);

// //////// SETS ////////
// //////// SETS ////////
// //////// SETS ////////
console.log('//////// SETS ////////');

const orederSet = new Set([
  'Pasta',
  'Pizza',
  'Pakora',
  'Risotto',
  'Pum',
  'Pudina',
]);
console.log(orederSet);
console.log(new Set('SAMIT'));
console.log(orederSet.size);
console.log(orederSet.has('Pizza'));
console.log(orederSet.has('Pum'));
orederSet.add('Biriyani');
orederSet.add('Meat');
orederSet.delete('Pum');
orederSet.add('Pummm');
//orederSet.clear();
console.log(orederSet);

for (const os of orederSet) console.log(os);
const staff = ['wq', 'we', 'wr', 'ws', 'wa', 'ws'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['w', 'ws', 'wa', 'wz', 'wc', 'we']).size);
console.log(new Set('Samit').size);

const rest = new Map();
rest.set('name', 'Ananda Resturant');
rest.set(1, 'sugondha');
rest.set(2, 'Monir');
console.log(rest.set(3, 'SUmaiya'));

rest
  .set('categories', ['wq', 'we', 'wr', 'ws', 'wa', 'ws'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

const arrr = [1, 2];
rest.set(arrr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arrr));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'try again'],
]);
console.log(question);
console.log(Object.entries(openingHours)); // convert objects to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your Answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

const airline = 'Tap Air Portugal eeeee';
const plane = 'Abcde';

console.log(plane[0]);
console.log(plane[1]);

console.log(airline.length);
console.log('B23de'.length);

console.log(airline.indexOf('r'));
console.log(airline.indexOf('r'));
console.log(airline.indexOf('portugal'));
console.log(airline.slice(4));
console.log(airline.slice(0, 7));
console.log(airline.slice(1, -1));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ' + 1)));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('Middle');
  else console.log('Lucky');
};
checkMiddleSeat('11C');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('SAMIT'));
console.log(typeof new String('Samit'));
console.log(typeof new String('Samit').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'Samit';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toLowerCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'samitsaha99@gmail.com';
const loginEmail = 'SamitSaha@gmail.com \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = '288,97$';
const priceUS = priceGB.replace('$', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to barding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
//console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

const planee = 'A23o0ne';
console.log(planee.includes('wed'));
console.log(planee.includes('A23'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW airbuds family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not alllowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snackes and a gun for protection');
