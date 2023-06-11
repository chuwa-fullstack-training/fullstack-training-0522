// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  let start = 1;
  const printNum = () => {
    return new Promise(function (resolve) {
      setTimeout(() => {
        console.log(start);
        start++;
        resolve();
      }, 1000);
    });
  };
  printNum().then(printNum).then(printNum);
}
// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  // your code here
  nums.reduce((acc, num) => {
    setTimeout(() => console.log(num), acc * 1000);
    return acc + 1;
  }, 0);
}
// printList(nums);

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights = ["red", "green", "yellow"];
  let counter = 0;
  const showLight = () => {
    console.log(lights[counter % 3]);
    counter++;
    setTimeout(showLight, 1000);
  };
  showLight();
}
// trafficLight();
