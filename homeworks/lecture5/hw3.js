// what is the output in order? and explain why?

// 1
// a,c,e,start,d,b
//'a' is printed first because it's a regular log
// 'c' is printed next because it's the next regular console.log statement.
// 'e' is printed because it's inside the Promise constructor, and it executes immediately since the promise is handled synchronously.
// 'start' is printed  because it's the next regular console.log statement.
// 'd' is printed because the resolve function inside the promise is called immediately after 'e'.
// 'b' is printed because it's inside the setTimeout callback. The callback is queued in the event loop and will be executed in the end.
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

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
