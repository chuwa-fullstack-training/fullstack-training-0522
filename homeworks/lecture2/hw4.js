// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// 7
// variable a is function scoped.
// its value changed from 10 to 7 as a is bigger than 5, in the end it gets printed.

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// 5
// the condition in the if statement is obviously true
// so a variable named a is initialized with value 5.

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// 3
// Inside the function, a variable is assigned the value 3 without declaring it with `var` or `let`.
//  This creates an implicit GLOBAL variable
// so when console.log(a); statement is executed, the value of this global var will be logged.

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
// 6
// Inside the function first(), the value of the global variable a is modified to 6 with the assignment a = 6;
// In the function second(), global variable `a` is accessed and gets printed out.

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// if `f()` is executed, 7 (the local variable) will be logged
// but the global variable `a`'s value is still 5.
// inside the function `f()`, a LOCAL variable `a` is declared and assigned value 7.
// Inside the function's scope, this local vairbale `a` shadows the global variable `a`.

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// 1
// a global var `a` is declared and assigne the value of 1.
// inside the function `b()`, a function declaration for `a` is present with `function a()`.
// this function declaration is HOISTED BUT ONLY TO THE TOP OF THE FUNCTION SCOPE.
// then the local variable `a` is reassigned with value 10.But none of these has to do with the gloabl var `a`.
