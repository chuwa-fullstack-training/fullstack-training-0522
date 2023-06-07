// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 * This code will create 5 individual callback functions in Callback Queue.
 * Those callback functions will log the value of i after a delay of 1000ms.
 * After 1000ms, 'var i' has been 5. 
 * Variable declaration 'var' has function scope, so all 'i' references in callback functions are assigned value 5. 
 * Therefore, it will output five '5's together.
 * 
 * Output: 
 * 5
 * 5
 * 5
 * 5
 * 5
 */

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 * Since variable declaration 'let' only have block scope, the callback function will 'record' the value of 'i' from 0 to 4
 * Therefore, after 1000ms delay, it will output '0' to '4' together
 * 
 * Output: 
 * 0
 * 1
 * 2
 * 3
 * 4
 */

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/**
 * Since the function in the loop will be invoked immediately everythime, the value of reference 'i' will be 'recorded'.
 * Therefore, after 1000ms delay, it will output '0' to '4' together
 * 
 * Output: 
 * 0
 * 1
 * 2
 * 3
 * 4
 */

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
/**
 * After 1000ms, the function 'fn' will be executed.
 * Although 'fn' has been reassigned, but 'let' only has block scope.
 * The callback function in setTimeout() will still execute the earlier one.
 * Therefore, the code will log 'I am fn' after 1000ms delay.
 * 
 * Output: 'I am fn'
 */

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/**
 * 'obj' refers to a memory area for the object.
 * The callback function will output the object 'obj' in 1000ms delay.
 * Before the callback function's execution, the property in 'obj' has been modified.
 * So the callback function will log the object with new name 'another obj'
 * Output: {name: 'another obj'}
 */