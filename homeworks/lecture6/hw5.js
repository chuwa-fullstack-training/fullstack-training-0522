// 1. use `promise` to print 1, 2, 3 in every 1 second
async function print() {
  // your code here
  for(let i=1;i<=3;i++){
    await pause(1000);
    console.log(i);
  }
}

async function pause(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

async function printList() {
  // your code here

  for(let i of nums){
    await pause(1000);
    console.log(i);
  }
}

// printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct

const arr = ["red","green","yellow"];
async function trafficLight() {
    let count = 0;
    while(true){
        await pause(1000);
        console.log(arr[count%3]);
        count++;
    }
}

// trafficLight();
