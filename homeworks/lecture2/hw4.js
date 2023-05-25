// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a); // 7
}

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a); // 5
}


// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a); // 3, global variable without let const var

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first(); // set global variable a from 5 to 6
second(); // 6

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a); // 7. declare a = 7 in function, shadows the global variable, but a will be still 5 out of function.
}

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a); // 10
// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a); // 1
//since function are hoisted to top of scope, so function a(){} first declared, 
//and then a=10 change the local variable a, but not the global variable var a=1,
//so out of scope of function b, a = 1.
