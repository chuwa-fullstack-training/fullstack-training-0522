// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  let count = 1;
  const printNum = () => {
    return new Promise(function (resolve) {
      setTimeout(() => {
        console.log(count);
        count++;
        resolve();
      }, 1000);
    });
  };

  printNum().then(printNum).then(printNum);
}
print();
// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  nums.reduce((acc, num) => {
    setTimeout(() => console.log(num), acc * 1000);
    return acc + 1;
  }, 0);
}

//printList(nums);
// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  const light = ["red", "green", "yellow"];
  let i = 0;

  const printLight = () => {
    console.log(light[i % 3]);
    i++;
    setTimeout(printLight, 1000);
  };

  printLight();
}
//trafficLight();
