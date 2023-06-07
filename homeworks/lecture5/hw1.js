// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//The output will be "5" printed five times. In this code, the variable i 
//is declared using var, which has function scope. The setTimeout function 
//is asynchronous, and by the time the callback function is 
//executed after the delay, the loop has already completed, and the value of i is 5. 
//Therefore, when the callback is executed, it prints the value of i, which is 5 for each
// iteration.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//The output will be "0", "1", "2", "3", "4" printed each after a 1-second delay. 
//In this code, the variable i is declared using let, which has block scope. Each 
//iteration of the loop creates a new lexical scope for the variable i, allowing the 
//callback function to capture the correct value of i at that particular iteration.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//The output will be "0", "1", "2", "3", "4" printed each after a 1-second delay. 
//In this code, a self-invoking function is used to create a new scope for each iteration
// of the loop. The i parameter of the self-invoking function shadows the outer i variable,
// creating a separate copy for each iteration.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
//The output will be "I am another fn". In this code, a function expression is assigned 
//to the fn variable using arrow function syntax. After a 1-second delay, the function 
//expression assigned to fn is executed, printing "I am another fn". The previous assignment
// fn = () => { console.log('I am fn'); } is overridden before it gets executed.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//The output will be { name: 'another obj' }. The object obj is defined with a name property 
//initially set to 'obj'. After a 1-second delay, the console.log statement logs the value of 
//obj, which is { name: 'another obj' }. This happens because JavaScript objects are passed by
// reference, and even though the name property is modified before the console.log statement,
// the reference to the object remains the same.