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
a c e d b
a c and e are output immediately, the initial function given to new Promise is called immediately
d is scheduled to be output first before b because the then on a fulfilled promise is scheduled as a microtask which goes before tasks like those scheduled with setTimeout
Nothing happens with f because a promise can only be resolved and or rejected once.
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
1 start success
1 and start are output immediately, the initial function given to new Promise is called immediately
the log of the result 'success' is scheduled for immediately after the call stack finishes
*/