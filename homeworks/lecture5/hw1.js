// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5 5 5 5 5
// setTimeout is asynchronous, when the first setTimeout is waited 1 second, i is already 5.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2 3 4
// In this case ,let is used, a new block scope is created in every iteration, 
// so the variable i is scoped to that block. 
// This means that each iteration of the loop has its own separate i variable.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//0 1 2 3 4
// IIFE will create a new scope for each itera  tion of the loop,
// The i in the IIFE shadows the outer i variable, creating a separate i  for each iteration
// Inside each IIFE, a new closure is created, capturing the current value of i from the corresponding iteration. 
// When the setTimeout callbacks execute after a delay of 1 second, they reference the captured value of i.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// I am fn
// Although the fn is reassigned to a new arrow function later in the code, the previously scheduled timeout still references the initial function. 
// Therefore, it executes the original fn function that logs "I am fn".


// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

// {name: 'another obj'}
// In this case, the reassign works because the reference to obj is still the same, but the content of name is modified.