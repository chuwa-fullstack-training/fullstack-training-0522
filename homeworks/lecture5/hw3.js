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

// Answer: a c e d b
// Explaination: promise is microtasks and setTimeout() is macrotasks which execute later. resolve inside promise is
// also promise, so d is printed after e.

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

// Answer: 1 start success
// Explain: the function fn print console.log(1); before console.log('start'); the resolve inside promise is executed later.