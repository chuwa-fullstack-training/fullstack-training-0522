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

/* 
a
c
e
start
d
b

- 'a' and 'c' are immediately logged since they are executed synchronously.
- The setTimeout function with a delay of 0 milliseconds schedules the execution of the callback function 'b' to be executed asynchronously. However, it doesn't guarantee an immediate execution and depends on the event loop.
- The Promise constructor is called, and immediately 'e' is logged since the constructor function executes synchronously. The resolve('d') statement is also executed synchronously, setting the promise to resolved state with the value 'd'.
- The then function is called on the promise, but the callback is not immediately executed. It will be queued in the microtask queue to be executed after the current execution context finishes.
- 'start' is logged since it is executed synchronously.
- The current execution context finishes, and the microtask queue is processed. The then callback is executed, logging 'd'.
- Finally, the event loop checks the task queue and finds the timeout task for the setTimeout function. The callback function 'b' is executed, logging 'b'.
*/

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

/* 
1
success

The fn function is defined but not immediately invoked.
'start' is logged since it is executed synchronously.
The fn() function is invoked, which returns a promise.
Within the Promise constructor, '1' is logged before the resolve function is called synchronously.
The then function is called on the promise returned by fn(), and the callback function is queued in the microtask queue.
'success' is logged since the microtask queue is processed, and the then callback is executed.
*/