// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 55555
// The value of i will be 5 when the setTimeout callback is executed

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 01234
// The value of i will be 0 1 2 3 4 each time when the setTimeout callback is executed every time in this block scope

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 01234
// This var is outside the block scope, so it will be 0 1 2 3 4 each time when the setTimeout callback is executed every time in this block scope

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// I am fn
// this function is already defined before the setTimeout callback is executed, so it will keep the console.log('I am fn'); one to output

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// {name: 'another obj'}
// before the setTimeout callback is executed, the obj.name is already changed to 'another obj'