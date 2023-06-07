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
/**
 * Callstack will execute all sync operation first.
 * 'setTimeout' will be stored in callback queue and wait till the callstack is empty.
 * Promise is invoked by the 'new' and is stored into the microtask queue and wait till the callstack is empty.
 * After callstack is empty, execute microtasks first. Only resolve('d') will be executed.
 * Wait till all microtasks are executed, callback function's setTimeout is executed.
 * Output:
 * 'a'
 * 'c'
 * 'e'
 * 'd'
 * 'b'
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
/**
 * Output:
 * 1
 * 'start'
 * success
 */