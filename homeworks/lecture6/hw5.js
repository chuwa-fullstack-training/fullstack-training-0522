// 1. use `promise` to print 1, 2, 3 in every 1 second
function print(num) {
  // your code here
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(num);
      resolve(++num);
    }, 1000)
  });
}

print(1)
  .then((num) => print(num))
  .then((num) => print(num));

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce(async (promise, num) => {
    return promise.then(() => print(num));
  }, Promise.resolve());
}

function print(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(num);
      resolve();
    }, 1000);
  });
}

printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
const light = ['red', 'green', 'yellow'];

function trafficLight() {
  // your code here
  light.reduce((promise, color) => {
    promise.then(() => print(color))
  }, Promise.resolve())
  .then(trafficLight);
}

function print(color) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(color);
      resolve();
    }, 1000);
  });
}

trafficLight();     // Output red -> green -> yellow -> red every 1s