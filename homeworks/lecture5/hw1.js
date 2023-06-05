// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// It will output 5 five times at the same time after 1 second.
// because i is declared by var globally in this case, so every iteration web API need to finish 1 second timeout and
// add the () => console.log(i) callback function to task queue, at this time iteration has been finished and 
// these callback functions will access global variable i as 5.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// It will output 1,2,3,4,5 at once after 1 second
// 'let' is block-scoped, which means a new i is created for each iteration of the loop. 
// When the setTimeout function is called, it creates a closure over the i from its own loop iteration. 
// So when the setTimeout callbacks execute, each one logs the i from its own loop iteration.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// It will output 1,2,3,4,5 at once after 1 second
// This code uses an IIFE function to create a new scope for each iteration of the loop. 
// This ensures that the value of i within each setTimeout callback is the value of argument i passed to function at the time the IIFE was invoked.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// It will log 'I am fn' after 1 second.
// When passing a function, it pass the function value rather than variable hold this function. 
// When setTimeout(fn, 1000); is executed, it takes the current value of fn, which is the first function 
// (() => console.log('I am fn');). It's going to use this function when the timer expires.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// It will log 'another obj' after 1 second.
// When passing a function, it pass the function value rather than variable hold this function. 
// When setTimeout(() => console.log(obj), 1000); is executed, it takes the current value of fn, which is console.log(obj) 
// And at this time obj has been modified, so it logs name = 'another obj'