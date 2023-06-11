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

//OutPut: a c e d b.
//Firstly, it will execute the two console.log, and execute the console.log in the Promise.
//Because Promise is microtask, so d is printed after e, and b is finally printed due to setTimeout.
// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

fn().then((res) => {
  console.log(res);
});

console.log("start");

//Output: 1 start success
//The function fn will print 1 first, then print start, then print the resolve in the Promise.
