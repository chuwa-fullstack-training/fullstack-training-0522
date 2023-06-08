// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  // If you don't return anything from a .then(), 
  // it will be treated as if you returned a resolved Promise and it will not wait for your setTimeout to finish.
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000)
  })
  .then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000)
    })
  })
  .then(() => { 
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(3);
        resolve();
      }, 1000)
    })
  })
}
print();


// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
   
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
}
