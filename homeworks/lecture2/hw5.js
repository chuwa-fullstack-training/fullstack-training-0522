// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}
// output undefined, 5, 5
// var y is hoisted to the top of the function, so the first console.log(y) prints undefined
// then y is assigned to 5, so the second console.log(y) prints 5
// then x is assigned to 3, so the third console.log(y) prints 5


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
// output 2, 2
// if declare a variable using var and then declare it again using var within the same scope, 
// the second declaration doesn't create a new variable; it just reassigns a value to the existing variable.
