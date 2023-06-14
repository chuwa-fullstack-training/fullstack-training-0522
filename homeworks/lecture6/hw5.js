// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  let number = 1;
  const printNumber = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(number);
        number++;
        resolve();
      }, 1000);
    });
  };

  printNumber().then(printNumber).then(printNumber);
}
// test
// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
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

//test
printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  const lights = ["red", "green", "yellow"];
  let index = 0;

  function changeColor() {
    console.log(lights[index]);
    index = (index + 1) % 3;
    setTimeout(changeColor, 3000);
  }
  changeColor();
}
test;
trafficLight();
