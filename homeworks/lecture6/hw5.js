// 1. use `promise` to print 1, 2, 3 in every 1 second

function print() {
  // your code here
  let promise = Promise.resolve();
  for(let i = 1; i <= 3; i++){
    promise = promise.then(() => {
      console.log(i);
      return new Promise(resolve => setTimeout(resolve, 1000));
    });
    
  }
}
print();
 

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  let promise = Promise.resolve();
  for(let i = 0; i <nums.length; i++){
    promise = promise.then(() => {
      console.log(nums[i]);
      return new Promise (resolve => setTimeout(resolve, 1000));
    });
  }
}
printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function promise(){
  return new Promise (resolve => setTimeout(resolve, 1000));
}
async function trafficLight() {
  // your code here
  let lights = ["red", "green", "yellow"];
  let i = 0;

  while(true){
    let interval = await promise();
    console.log(lights[i % 3]);
    i++;
  }
}
trafficLight();
