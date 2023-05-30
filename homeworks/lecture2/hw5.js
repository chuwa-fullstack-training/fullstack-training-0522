// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y); // prints undefined
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); // prints 5
}
if (x === 3) {
  console.log(y); // prints 5
}
/* for the code above, the keyword `var` is used for declaration, which means both x and y are global-scoped. 
First, a variable named x is declared but not initialized, so now it's undefined.
then since it's not 3, the first if statement will be executed.
within this code block, `var y = 5` will have the declaration `var y` hoisted, but not initialization , so the first console log prints 'undefined'.
then `var y` got initialized with value 5, so `if (y===5) is executed, x's value is set to 3.
therefore, variable y got console logged twice. 
*/

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x); //prints 2
}
console.log(x); // prints 2
// this code will print the value of variable x (2) twice.
// keyword `var` is gloabl scoped. So even with var x = 2 inside the if block. it's still referring to the same variable x.
// At first, it has value 3, so the if statement is executed.
// within the if statement, its value is reassigned as 2 and gets printed out.
// out of the if statment, its value (2) gets printed again.
