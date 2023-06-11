// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

//Output: 1 2. the resolve in the promise will execute first and then res === 2,
//and then console.log res, so it's 2.

// // 2
Promise.reject(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    console.log(err);
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

//Output: 1 3.
//Because the error is catched and err = 1 and print out 1, then the value changed to 3, and then print 3.

//3
function runAsync(x) {
  const p = new Promise((resolve) => setTimeout(() => resolve(x), 1000));
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//Output:Error: 2.
//The runReject(4) will set a 4000ms timer to print Error: 4, and runReject(2) will execute before runReject(4).
//And then the error is catched, and end this process.
