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
// setTimeout will be put in Web API and waiting, so a and c will be printed out first
// then it goes to new Promise, and console log e, promise goes to pending now
// promise.then() is a micro task which will execute the resolve status print out d
// then setTimeout will print out b when all the tasks in the callstack are executed 

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
// fn() invoked first and print out 1
// the macro task script will continue runing and print out start
// promise.then() is a micro task which will execute the resolve status and print out success