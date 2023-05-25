// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y); // undefined, since var y is hoisted, but y=5 not declared yet.
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); // 5, y = 5 in line 8.
}
if (x === 3) {
  console.log(y); // 5
}


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x); // 2, line 7 change the value of line 5.
}
console.log(x); // 2