// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
/**
 * a will be changed to 7 in the conditional block;
 * Output 7
 */

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
/**
 * var has function scope. a is always 5
 * Output 5
 */

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
/**
 * Because a is not declared with var, let, or const, it is not a local variable within the function. 
 * Instead, it becomes a global variable (variable hoisting)
 * Output 3
 */

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();
/**
 * After executing first(), a is 6.
 * Output 6
 */

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
/**
 * a in 'console.log(a)' is a new variable declared in function f, not the globel variable.
 * Output 7
 */

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
/**
 * a in function b() is the function below return statement, which will never execute in this function.
 * Globel variable a is still 1 after executing function b();
 * Output 1
 */