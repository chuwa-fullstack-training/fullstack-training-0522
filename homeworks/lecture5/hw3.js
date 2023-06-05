// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));
// It will log 'a', 'c', 'e', 'd', 'b'
// console.log('a') is synchronous operation and be executed in call stack first.
// setTimeout(() => console.log('b'), 0); will add a callback function to macro task queue and will be executed after synchronous and microtasks have finished running.
// console.log('c'); is synchronous operation and be executed in call stack after logging 'a'.
// new Promise will first set fulfillment value to 'd' and then execute console.log('e'); in call stack after logging 'e'.
// .then() will add the logging to micro task to be executed. Micro task has higher priority than macro task queue so it will log 'd' then 'b'.


// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
// It will log '1', 'start', 'success' sequentially
// First, function fn is declared but not invoked, then fn() is invoked and create and return a promise, which includes running executor 
// logging '1' immediately and set fulfillment value to 'success'. .then() add a logging res to micro task but will be executed after synchoronous operations.
// Then synchronous operation 'start' is logging, then microtask promise fulfillment 'success' is logging.



