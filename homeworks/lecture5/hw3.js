// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then((result) => console.log(result));
// output: a,c,e,d,b
// a c e will be print out immediately and d is schdeduled to be print out before b because then in a fulfilled promise is scheduled as a microtask which goes before tasks like those tasks scheduled using setTimeout.  resolve is invoked instead of reject because there is no error in promise

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then((res) => {
  console.log(res);
});

console.log('start');
//output :1 start success

// 1 and start are print out immediately, the initial function given to new Promise is called immediately
// the log of the result 'success' is scheduled  after the call stack finishes
