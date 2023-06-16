// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 5);
}
//output: 5,5,5,5,5
// var i has function scope not bolck sccope
//the callback function is invoked after the loop completes, the i value inside callback function will be 5

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 5);
}
//output: 0,1,2,3,4
// let i has block scope, a new variable 'i' is created for each iteration of the loop and each iteration of the loop creates a separate closure for the callback function passed to 'setTimeout'. Therefore, when the callback funcitons are invoked, they have access to their respective 'i' value at the time of the iteration

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 5);
  })(i);
}
//output: 0,1,2,3,4
// Since each iteration of the loop creates a new scope due to the IIFE, the callback functions passed to setTimeout capture the correct value of i corresponding to their respective iterations.

// 4
let fn = () => {
  console.log('I am fn');
};
setTimeout(fn, 5);
fn = () => {
  console.log('I am another fn');
};
//output: 'I am fn'
// the fn has already been pushed to the callback queue, the overwritten of fn after setTimeout will not be executed

// 5
let obj = {
  name: 'obj',
};
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//output: { name: 'another obj' }
// javascript object are passed by reference, the current state of obj will be printed out when the callback function accesses the reference to the 'obj' object after 1000 milliseconds delay
