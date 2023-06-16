// 1. use `promise` to print 1, 2, 3 in every 1 second

function delayPrint(number, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(number);
      resolve();
    }, delay);
  });
}
function print() {
  // your code here
  for (let i = 1; i < 4; i++) {
    promise = Promise.resolve().then(() => delayPrint(i));
  }
}

print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    delayPrint(num);
  }, Promise.resolve());
}

printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  delayPrint('red', 3000)
    .then(() => delayPrint('green', 3000))
    .then(() => delayPrint('yellow', 3000))
    .then(() => trafficLight());
}

trafficLight();
