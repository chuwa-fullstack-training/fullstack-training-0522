// what is the output in order? and explain why?

// 1
// console.log('a');
// setTimeout(() => console.log('b'), 0);
// console.log('c');
// new Promise((resolve, reject) => {
//   resolve('d');
//   console.log('e');
//   reject('f');
// }).then(result => console.log(result));

// a c e d b
//promise callback is microtask which should be executed before macrotask(setTimeout).
//reject() doesnt effect since already resolved in line 8.

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

//1 start success
//the output should be 1 start success. Since fn() is a function, which is synchrnous statement, and console.log(start) also is synchrnous statement, so they are put into call stack and run. When we run fn(), we console.log(1) first. Then we met Promise.then, which is the microtask. but we still have a synchrnous statement not finished, so we run console.log(start). And last we run promise.then, which console.log(success).