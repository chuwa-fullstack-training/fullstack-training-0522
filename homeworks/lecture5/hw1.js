// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

/* Output will be like this:
5
5
5
5
5
This happens because the loop uses the var keyword to declare the variable i. The var keyword has function scope, not block scope. In each iteration of the loop, the setTimeout function is called, but the callback function doesn't execute immediately. It executes after a delay of 1000 milliseconds. By the time the callback functions execute, the loop has already completed, and the value of i has become 5. As a result, each callback function references the same i, which is 5.
*/ 


// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

/* Output will be like this:
0
1
2
3
4
In this case, the loop uses the let keyword to declare the variable i. The let keyword has block scope, which means each iteration of the loop creates a new lexical environment with its own separate i variable. Therefore, each callback function captures and references the correct value of i corresponding to its iteration.
*/ 

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

/* Output will be like this:
0
1
2
3
4

In this code, an immediately-invoked function expression (IIFE) is used to create a new scope for each iteration of the loop. The IIFE accepts the current value of i as an argument and captures it in a new scope. Therefore, each callback function captures and references the correct value of i corresponding to its iteration.
*/ 

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

/* Output will be like this:
I am fn

When you later reassign fn to a new arrow function, you are changing the reference stored in the fn variable to point to the new function. However, the setTimeout function already received the original reference to the first function, and it will execute that function regardless of any subsequent reassignments to the fn variable.
*/ 

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

/* Output will be like this:
{ name: 'another obj' }

When you update the name property of the obj object using obj.name = 'another obj', you are modifying the existing object in memory. As a result, any references to that object, including the one inside the setTimeout callback, will reflect the updated property value.
*/ 