function delayHelper(n, t) {
  return () => new Promise((resolve) => setTimeout(() => {console.log(n); resolve();}, t));
}

// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  return delayHelper(1, 1000)().then(delayHelper(2, 1000)). then(delayHelper(3, 1000));
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  return nums.reduce((p, n) => p.then(delayHelper(n, 1000)), Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  return delayHelper("red", 1000)().then(delayHelper("green", 1000)).then(delayHelper("yellow",1000)).then(trafficLight);
}

print();