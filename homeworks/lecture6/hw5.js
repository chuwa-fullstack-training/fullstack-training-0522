// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let num = 1;
  
  function printNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    });
  }
  
  function printNumbers() {
    printNumber()
      .then(() => {
        num++;
        if (num <= 3) {
          return printNumbers();
        }
      });
  }

  printNumbers();
}

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
  nums.reduce((promise, num) => {
    return promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(num);
          resolve();
        }, 1000);
      });
    });
  }, Promise.resolve());
}
