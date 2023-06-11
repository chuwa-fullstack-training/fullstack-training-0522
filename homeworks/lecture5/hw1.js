// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Output: 5 5 5 5 5.
//With var we have a function scope, and only one shared binding for all of the loop iterations
//- i.e. the "i" in every setTimeout callback means the same variable that finally is equal to 5 after the loop iteration ends.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Output: 0 1 2 3 4
//With let we have a block scope and when used in the for loop we get a new binding for each iteration
//- i.e. the "i" in every setTimeout callback means a different variable, each of which has a different value.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//Output: 0, 1, 2, 3, 4
//Here the iteration "i" is also functional scope. Using immediately invoked
//function expression to use function scope in a similar way as the block scope works in the example with let.

// 4
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};
//Output: I am fn.
//The fn is already set and pushed to the task queue, the second one will never execute.
// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";
//Output: { name: 'another obj' }
//obj.name = 'another obj' will execute before the setTimeout.
