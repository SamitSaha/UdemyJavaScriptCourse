// how scoping works, here is a demo code.

//'use strict';

function calage(birthyear) {
  const age = 2024 - birthyear;

  function printage() {
    let output = ` ${firstName}, You are ${age}, born in ${birthyear}`;
    console.log(output); // print output value.

    if (birthyear >= 1981 && birthyear <= 2000) {
      var millenial = true;
      // creating new variable with same name as oyter scope's variable.
      const firstName = 'AbC';
      // Reassigning outer scope's variable.
      output = 'New Output!';
      const strr = `oh, you are saha, ${firstName}`;
      console.log(strr); // print str value.

      function addd(a, b) {
        // the scope of this add function is only the block in which it was defined. here only use add function in 'use strict' .
        return a + b;
      }
    }
    console.log(addd(2, 3)); // print 2+3 = 5 .
    console.log(millenial); // print true
    console.log(output); // print new output.
    // console.log(str);  // const is not valid inside this block beacuse str is declared in block scope. so from the outside we cannot access it..
  }

  printage();

  console.log(firstName); // print Samit
  return age;
}
const firstName = 'Samit';
calage(1999);

// var millenial = true;
// console.log(millenial);

// console.log(age); // we cannot access this because this in global function or variable or any other scope.
// printage();

// the output is undefined beacuse the variable initialize after the printing code. this is -> "TDZ" !!!!!!!!!!!!!!
// console.log(me);
// console.log(job);
// console.log(year);

// vaiable declaration
var me = 'Samit';
let job = 'student';
const year = 1991;

// Function declaration

// console.log(addDeclaration(2 + 5)); //  print the value 2+5 = 7.
// console.log(addExpression(2 + 5)); // cannot print this funtion because the const variable is defined after the print code .
// console.log(addArrow(2 + 5)); // cannot print this funtion because the const & var variable is defined after the print code .

function addDeclaration(a, b) {
  // frictional function
  return a + b;
}
const addExpression = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

// Example
if (!num) deletes();
var num = 10;
function deletes() {
  console.log('deletesd');
}

// // // The this keyword

console.log('The this keyword!!!!!!!!!!!!!!! ');
//console.log(this); //global scope

const callage = function (birthyear) {
  console.log(2024 - birthyear);
  //console.log(this); //global scope
};
callage(1999);

const callageArrow = birthyear => {
  console.log(2024 - birthyear);
  //console.log(this); //global scope
};
callageArrow(1980);

const samit = {
  firstname: 'Samit',
  year: 1999,
  calAge: function () {
    console.log(this); // disk keyword always points to the object that is calling the method. it is dynamic, not static, it depends on how the function is called.
    console.log(2024 - this.year);
  },
};
samit.calAge();

const m = {
  year: 1998,
};
m.calAge = samit.calAge; // calAge() method borrowed from samit to m.
m.calAge();

const a = samit.calAge; // put the samit calAge function into the "a" const variable.
// a(); // undefined

// Primitives VS Objects / Reference Types
let aa = 30;
let oa = aa;
aa = 31;
console.log(aa);
console.log(oa);

const mee = {
  name: 'SAmit',
  aa: 30,
};

const friend = mee;
friend.aa = 27;
console.log('Friend:', friend);
console.log('Me:', mee); // for the primitive value the const is acutally const variable. but for the reference values const can be changed beacuse of the heap location and how that the variable is called.

const sam = {
  firstname: 'Sam',
  lastname: 'Saha',
  aa: 25,
  family: ['x', 'y'],
};

const samcopy = Object.assign({}, sam);
samcopy.lastname = 'Sssss';

samcopy.family.push('A');
samcopy.family.push('b');

console.log('Before: ', sam);
console.log('After: ', samcopy);
// creating deep clone -> use exxternal library
