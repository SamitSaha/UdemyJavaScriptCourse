// we are going to use strict mode in all scripts now.

'use strict';

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
