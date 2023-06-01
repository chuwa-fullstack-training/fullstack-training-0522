// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
/* 7. Since var is function scoped. */

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

/* 5. Since var is function scoped. */

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);

/* Answer is 3. a is automatically assigned to global scope as it is not declared. */

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

/* 6. Since var when outside of function scope is global scope. */

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

/* 7. As var a is defined with 7 inside the function, so the value of output inside function will be 7. Var is functional scoped when it's placed inside function. */

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);

/* 1. The a inside function b is declared as a function. The function declaration is hoisted to the top of the function b, and assigned a value of 10. Thus, the global scoped a is not affected by the function a inside function b. So the output value is still 1. Only when the inside variable a is not declared, it will modify the global scoped a. */
