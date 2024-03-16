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
