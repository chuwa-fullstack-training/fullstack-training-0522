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
//'a': The string 'a' is logged to the console.
//'c': The string 'c' is logged to the console.
//'e': The string 'e' is logged to the console. This is inside the executor function of the Promise, but it is immediately executed synchronously before the resolve and reject calls.
//'d': The string 'd' is logged to the console. This is inside the then block of the Promise, which is called asynchronously after the Promise is resolved with the value 'd'.
//'b': The string 'b' is logged to the console. This is inside the setTimeout callback, which is scheduled to be executed asynchronously after a timeout of 0 milliseconds.

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

//1: The number 1 is logged to the console inside the executor function of the Promise.
//'start': The string 'start' is logged to the console.
//'success': The resolved value 'success' is logged to the console. This is inside the then block of the Promise, which is called asynchronously after the Promise is resolved with the value 'success'.