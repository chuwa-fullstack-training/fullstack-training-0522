// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let count = 1;

  function printNumber() {
    console.log(count);
    count++;
    if (count <= 3) {
      setTimeout(printNumber, 1000);
    }
  }

  printNumber();
}

print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(() => {
      return new Promise(resolve => {
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
  // your code here
  const colors = ["red", "green", "yellow"];
  let index = 0;

  function changeColor() {
    console.log(colors[index]);
    index = (index + 1) % colors.length;
    setTimeout(changeColor, 1000);
  }

  changeColor();
}

trafficLight();