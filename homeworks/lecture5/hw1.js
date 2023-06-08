// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/*
After a sec, 5 5s are output.
5 calls of a function which calls console.log on the global var i are queued up
when the function is called, the value of i is 5, so 5 is output 5 times
*/
// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/*
After a sec, 0 1 2 3 4 are output.
5 calls of a function which calls console.log on the local let variable i are queued up
since i is block scoped, each loop gets its own local var i and when the function is called,
it outputs that loop's value of i
*/
// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/*
After a sec, 0 1 2 3 4 are output.
a function which creates a queued log function is created and called immediately 5 times.
each of these IIFE has its own copy of the var i saved as an argument at the time when the function was called
the queued functions then outputs that value since it has a closer scope than the global var i
*/
// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
/*
After a sec, "I am fn" is output.
A function is created and assigned to fn, that function is then passed to setTimeout and queued to be called after a sec.
Another function is then created and overwrites fn, but that does not affect the function passed to setTimeout.
*/
// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/*
After a sec, an object with the property name with value 'another obj' is output.
First, an object obj is created. Then a function which logs the obj is queued. The object is then modified.
Finally when the queue pops, the obj's current value is output.
*/