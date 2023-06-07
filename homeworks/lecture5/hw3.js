// what is the output in order? and explain why?

// 1
console.log("a");
setTimeout(() => console.log("b"), 0);
console.log("c");
new Promise((resolve, reject) => {
  resolve("d");
  console.log("e");
  reject("f");
}).then((result) => console.log(result));
// output: a c e d b
/*  
* executing sequence:
1. the first line that logs "a";
2. the 2nd line with`setTimeout()`. even though the delay is set as 0, it's still asynch, allowing the following code to execute;
3.the 3rd line is executed, "c" is logged to the console
4. a new Promise is created. within the promise, a callback function is executed instantly, but the `resolve` and `reject` are not executed immediately.
5. so `e` is logged to the console.
6. the callback function within `then` logs the resolved value `d` to the console.
7. the callback function in `setTimeout` is executed, logging `b` to the console.
*/

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

fn().then((res) => {
  console.log(res);
});

console.log("start");
// output: 1 "start" "success"
/*
 * the first const `fn` defines a function which takes no input and returns a new Promise.
 * `fn` is invoked, a new Promise is created.
 * Within the promise, `1` is logged to the console.
 * Since fn is async, js will not wait for the promise to be resolved. the "start" got logged
 * The Promise is resolved with the value of `success`.
 * this triggers the execution of the callback func within `then`, which logs the resolved value, `success`.
 */
