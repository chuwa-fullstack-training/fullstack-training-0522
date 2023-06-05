// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5 5 5 5 5
// explain: var is global scope, when these console.log functions are waited to execute
// at the call stack, they take the final value of i. 

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2 3 4 
// explain: let here is block scope, each log outputs i values are individual

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 0 1 2 3 4
// explain: each console.log() are executed seperately because they are inside function,
// they execute with their i value and wait 1s for the next to execute with i+1.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// I am fn
// explain: the fn is already push to the callback queues, the change later are not executed

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

// { name: 'another obj' }
// explain: obj.name = 'another obj'; executed before console.log(obj)