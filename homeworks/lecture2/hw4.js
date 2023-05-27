// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a); //7
}


// 2. When executed, what value will be output?
function f() {
  if (true) {
    // var没有block scope，因为是es6之后的，但是var是es6之前的
    var a = 5;
  }
  console.log(a); // 5
}
//

// 3. When executed, what value will be output?
function f() {
  //会自动assign，hoisting值在最前面，所以就不会报错
  a = 3;
}
f();
console.log(a); // 3

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second(); // 6

// 5.
var a = 5;
function f() {
  //? 替换掉
  var a = 7;
  console.log(a); // 7
}

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a); // 10 ??? 1
