// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let count = 1;

  function printNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(count);
        resolve();
      }, 1000);
    });
  }

  printNumber()
    .then(() => {
      count++;
      return printNumber();
    })
    .then(() => {
      count++;
      return printNumber();
    })
    .then(() => {
      count++;
    });
}

print()

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
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

printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct

function trafficLight() {
  const colors = ['red', 'green', 'yellow'];
  let currentIndex = 0;

  function printColor(color) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(color);
        resolve();
      }, 1000);
    });
  }

  function cycleColors() {
    const color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    return printColor(color).then(cycleColors);
  }

  cycleColors();
}

trafficLight();
