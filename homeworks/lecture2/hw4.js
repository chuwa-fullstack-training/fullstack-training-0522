// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
//7
//a = 10 -> if (a > 5) -> a = 7
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
f();

// 2. When executed, what value will be output?
//5
//if true -> var a = 5, var is function scope, out of if block scope, so 5 will be stored out of the block scope 
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
f();

// 3. When executed, what value will be output?
//3
//a = 3 -> global. or window.a = 3
function f() {
  a = 3;
}
f();
console.log(a);

// 4.
//6
//a = 5 -> first() -> a = 6 -> second() -> var a is global declared, print out a = 6
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();

// 5.
//7
// global var a = 5, f() -> var a = 7, function scope -> print out local a = 7
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
f();

// 6.
//1
//function a() {} is hoisted
var a = 1;
function b() {
  // hoisted  function a() {} here
  a = 10;//no longer change var a = 1 in the global scope
  return;
  function a() {}
}
b();
console.log(a);
