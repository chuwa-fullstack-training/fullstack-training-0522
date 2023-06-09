// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  // If you don't return anything from a .then(), 
  // it will be treated as if you returned a resolved Promise and it will not wait for your setTimeout to finish.
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000)
  })
  .then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000)
    })
  })
  .then(() => { 
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(3);
        resolve();
      }, 1000)
    })
  })
}
print();


// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  // your code here
  nums.reduce((acc, cur) => {
    return acc.then(() => new Promise(resolve => {        // .then() should return a value or promise ==> need new Promise()
      setTimeout(() => {
        console.log(cur);
        resolve();
      }, 1000);
    }));
  }, Promise.resolve());
}
printList(nums);


// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function lightLoop() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("red");
        resolve();
      }, 1000)
    })
    .then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log("green");
          resolve();
        }, 1000)
      })
    })
    .then(() => { 
      return new Promise(resolve => {
        setTimeout(() => {
          console.log("yellow");
          resolve();
        }, 1000)
      })
    })
}
// }

async function trafficLight() {
  while (true) {
    await lightLoop();
  }
}

trafficLight()
