// Hoisting

// 1.
// i think it will be undefined, 5, and 5. 
// it is because of the hoisting that even though y is accessed before it is declared, it is still declared at the top of its scope (hoisted). 
// So, the first console.log(y) outputs undefined. then y is assigned the value 5, and the second console.log(y) will output 5. 
// Finally, x is assigned the value 3 inside the if block, so the last console.log(y) prints 5
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


// 2.
// it will print out 2 and 2. 
// variable x is hoisted to the top of its scope and it isinitially assigned the value 3. 
// Within the if, x is assined with  the value 2, and the first console.log(x) will output 2. 
// The second console.log(x) outside the if also prints 2 because the the assignment is declared as var and it will affect the global variable x.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

