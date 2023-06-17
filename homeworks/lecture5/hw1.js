// what is the output of the following code? and explain why?

// 1
// 5,5,5,5,5
// i is declared using var and it will share the value all through the loop
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2
// 0,1,2,3,4
// now i is declare with let and it will change every iteration
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3
// 0,1,2,3,4
// i is delcared with var but now it is another function creates new scopes for each i so i now has different value passed into the new function
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4
// I am another fn
//the fn variable is originally assigned an arrow function that prints "I am fn" but, before the setTimeout function executes, the fn variable is reassigned to a new arrow function 
// and logs "I am another fn". then setTimeout executes the new value of fn after a delay of 1000ms, it will print out new log 
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5
// { name: 'another obj' }
// first object obj is created with the name initially set to 'obj' but after a delay of 1000ms, the setTimeout runs, and the callback function logs the value of obj. 
// However, before the callback function executes, the name property of obj is changed to 'another obj'. so the callback function will later prints the updated name which
// is another obj
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';