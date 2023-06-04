// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//5,5,5,5,5
//var is functional scope, so when start to call back the time function, they will use the final value of i, which is 5.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//0,1,2,3,4
//let is block scope, so set timeout function use the new i while call back.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//0,1,2,3,4
//although i is var, since IIFE inside for.

// 4
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};
//I am fn
//setTimeout get the reference of fn, which means setTimeOut get what fn points to, which is I am fn
//so although change the content fn points to, it will not influence what setTimeout get.

// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";
//{name: 'another obj'}
//Same as 4, setTimeOut get what fn points to, is obj. but obj.name change the content in that address, so setTimeout will get the content that after change/
