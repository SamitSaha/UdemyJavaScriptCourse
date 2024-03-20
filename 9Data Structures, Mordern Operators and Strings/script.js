'use strict';

const resturant = {
  name: 'Ananda Resturant',
  location: 'Narayanganj, Dhaka',
  categories: ['Bengali', 'Moglai', 'Biriyani', 'Drinks'],
  starterMenu: ['a', 'b', 'c', 'd', 'e'],
  mainMenue: ['P', 'Pa', 'Ri'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
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
const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);

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
