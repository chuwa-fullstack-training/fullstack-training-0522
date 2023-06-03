// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}


// 5,5,5,5,5
// When the loop runs, it schedules all the setTimeout callbacks to be executed after a delay of 1000 milliseconds. 
//However, by the time the first callback is triggered, the loop has already completed, 
//and the value of i is 5. Consequently, all the scheduled callbacks will log the final value of i, which is 5.




// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}



//0,1,2,3,4,
// let is block scope so the value is not changed


// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}


//0,1,2,3,4 because the function is immediately invoked after defined


// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}


// i am fn




// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

//name: another obj