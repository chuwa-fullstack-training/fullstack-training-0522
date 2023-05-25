// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y);         // undefined. Hoisting, but not defined yet
  var y = 5;
  if (y === 5) {
    var x = 3;            // x is changed to 3 and valid in the whole function scope.
  }
  console.log(y);         // y is declared. Output 5.
}
if (x === 3) {            // x is changed to 3 before, so true
  console.log(y);         // Output 5
}


// 2.
var x = 3;
if (x === 3) {            // x is declared and given value 3. It is valid the whole function scope. So true
  var x = 2;              // change x value to 2    
  console.log(x);         // Output 2
}
console.log(x);           // this belongs to the same function scope as x. Output 2.

