// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/* This code prints out 5 for 5 times.
 * by the time the first timeout executes,
 * the loop is already completed, with the final value of i being 5.
 */

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output: 0 1 2 3 4
/* The use of `let` instead of `var` causes the change of the output.
 * By using `let`, each iteration has its own block scope and
 * maintains a seperate copy of the variable `i`.
 */

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// output: 0 1 2 3 4
// just like question2, IIFE will alsocreate a new scope for each iteration of the loop.

// 4
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};
/* output: `I am fn.` (after 1000ms.)
`setTimeout` function takes a reference to the function to be execute,
* rather than to the variable itself. 
* so even the variable is reassgiend, it will not affect the function scheduled by `setTimeout`.
*/

// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";
// output: {name: "another obj"}
/*
 * the `obj` variable is first assigned an object with `name` property set to `obj`.
 * setTimeout is called on `obj`, and will log obj in 1000ms.
 * the `name` property of `obj` is reset to `another obj` before the elapse time is due.
 * The function captures a reference to the `obj`object, not a copy of it.
 * so any changed to the `obj` object will show up when the function is executed.
 */
