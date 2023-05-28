// Hoisting

// 1.
//undefined, 5, 5
// x = undefined -> x !== 3 -> hoisted, print out var y = undefined -> y = 5
// -> if (y === 5) -> global var x = 3 out of block scope -> print out global y = 5
// -> if (x === 3) -> log global y = 5
var x;

if (x !== 3) {
  console.log(y);//hoisted -> var y; log(y); y = 5;
  var y = 5;//hoisted
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}


// 2.
// 2, 2
//??? var x = 3 -> if -> var x = 2 redeclared now in global scope overlapped the previous one? -> block scope print out x = 2 
// -> global scope print x = 2 
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

