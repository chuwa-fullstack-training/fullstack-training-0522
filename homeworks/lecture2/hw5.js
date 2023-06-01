// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y); // undefined, since y is not created yet
  var y = 5; 
  if (y === 5) {
    var x = 3;  
  }
  console.log(y); // 5, since y is assigned value 5
}
if (x === 3) {  // now x is assigned value 3
  console.log(y); // 5 will be logged
}


// 2.
var x = 3;
if (x === 3) {
  var x = 2;  
  console.log(x); // 2, since the value is changed to 2
}
console.log(x);  // 2

