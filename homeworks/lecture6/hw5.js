// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let currNum = 1;

  function printAllNumbers() {
    if (currNum <= 3) {
      printOneNum().then(() => {
        currNum++;
        printAllNumbers();
      });
    }
  }

  function printOneNum() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000); // 1s
    });

  printAllNumbers();
}

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

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const colors = ['red', 'green', 'yellow'];
  let curr = 0;
  let n = colors.length
  function changeTrafficColor() {
    console.log(colors[curr]);
    curr = (curr + 1)
    curr %=  n;
    setTimeout(changeTrafficColor, 1000);
  }

  changeTrafficColor();
}
