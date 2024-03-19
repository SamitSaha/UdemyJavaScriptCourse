'use strict';

const resturant = {
  name: 'Ananda Resturant',
  location: 'Narayanganj, Dhaka',
  categories: ['Bengali', 'Moglai', 'Biriyani', 'Drinks'],
  starterMenu: ['a', 'b', 'c', 'd', 'e'],
  mainMenue: ['P', 'Pa', 'Ri'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenue[mainIndex]];
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
