// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// no output if not called
// if called, output 7, because a has been reassigned to 7


// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// no output if not called
// if called, output 5, because var a is hoisted to the top of the function


// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// output 3
// if assign a value to a variable without first declaring it (i.e., without using var, let, or const), 
// that variable automatically gets the global scope regardless of where it is defined.


// 4. When executed, what value will be output?
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();
// output 6
// first() reassigns a to 6, then second() prints a, which is 6


// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// output 7 if f() is called
// inside f(), a new local variable a is declared with var, so it is scoped to the function f(), and the global variable a is not affected
// console.log(a) will print the local variable a, which is 7


// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// output 1
// function a() {} is hoisted to the top of function b(), so a = 10 is actually assigning 10 to the local variable a, not the global variable a
// the global variable a is not affected, so it is still 1