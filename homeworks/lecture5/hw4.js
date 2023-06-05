// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then((res) => {
    // res = 1
    console.log(res); // logs 1
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    // res = 2
    console.log(res); // logs 2
  });
// output: 1 2
/*
 * `Promise.resolve(1)` creates a resolved promise with value of 1;
 * first `.then`is called, the callback func receives the resolve value from the promise (1)
 * it logs its value and returns 2;
 * the 2nd `.then` is called with the returned value of the previous `then` (2)
 * it logs 2  to the console.
 * no `.catch` is triggered.
 */

// // 2
Promise.reject(1)
  .then((res) => {
    // this `.then()` is skipped
    console.log(res);
    return 2;
  })
  .catch((err) => {
    // err = 1;
    console.log(err); // logs 1
    return 3; // return 3
  })
  .then((res) => {
    // res = 3;
    console.log(res); // log 3
  });
// output: 1 3
/*
 * `Promise.reject(1) creates a rejected promise with a value of 1
 * `.catch()` is executed, err = 1, it logs err to the console and returns 3
 * the promise chain continues with the next `.then()` and will log the returned value of the `.catch`block
 */

//3
// `runAsync` returns a promise that resolves with a value after 1s.
function runAsync(x) {
  const p = new Promise((resolve) => setTimeout(() => resolve(x), 1000));
  return p;
}
// `runReject` returns a promise that rejects with an error message after 1s * x
function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

// `Promise.all` waits for all of the four promises to be settled
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// output: Error: 2
/*
 * `runAsync(1)` resolves with 1, `runAsync(3)`resolves with 3
 * `runReject(4)` rejects with "Error: 4", `runReject(2)` rejects with "Error: 2"
 * The `Promise.all()`rejects when any of the input's promises rejects, with this first rejection reason.
 * Since in `runReject`, setTimeout's time is set as 1000 * x, so runReject(2) will get returned before runReject(4)
 * and will thus be logged to the console.
 */
