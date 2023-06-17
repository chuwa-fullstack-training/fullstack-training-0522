// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
// 7 because a is first assigned the value 10. 
// but then a > 5 is true, the value a is now changed to 7.
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}


// 2. When executed, what value will be output?
// 5 becasuse The variable a is declared inside the if block, 
// but JavaScript does not have block-level scoping for variables declared with var. 
// then the declaration is hoisted to the top of the function, so a is now having the value of 5 within the function.
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output?
// 3 because a is not declared with the var, let, or const,
// so when it is assigned the value 3 inside the function f(), it becomes global variable. 
// then it can be accessed outside the function scope. 
function f() {
  a = 3;
}
f();
console.log(a);

// 4.
// 6 becasue  the variable a is declared as a global variable with the initial value of 5. 
// The function first() change the global variable a to 6, and then the function second() outputs the modified value.
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
// 7 because  inside the function f(), a new variable a is declared with a local scope, with the value 7. 
// This local variable a is now different. so the output  prints the local variable which is 7
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// 6.
// '1' becasue inside the function b(), a function a() is declared, and then it becomes a locally scoped function 
// then it does not impact the value of the global variable a. inside function b, a = 10 does not affect the global variable because it points to local function a()
// and final ir  prints the global variable, which has value 1
// 
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
