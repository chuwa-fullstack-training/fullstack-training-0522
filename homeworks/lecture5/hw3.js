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

// a c e d b 
// The Promise is created, and its executor function is immediately invoked.
// d is the fulfilled result of the Promise 
// Promise has more priority than setTimeout.
// Therefore, e is before d, f is rejected, b is the last one.

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
// 1 start success
// The fn function is called immediately as fn() so console.log(1) is executed
// The console.log('start') statement is executed synchronously after fn().then(), and it logs "start" to the console.
// The event loop enters the next iteration and checks for any fulfilled Promises.
