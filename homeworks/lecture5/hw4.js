// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });
// It will log 1, 2 
// In first .then() received a resolved promise with value 1 passed to res, and will log 1 and return a resolved promise with value 2 to next .then();
// .catch will catch error if any error throwed. Because there is no error so .catch() will be skipped.
// Promise with resolved value 2 will be passed to last .then() and value 2 will be passed to res and then log 2.


// // 2
Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err);
    return 3;
  })
  .then(res => {
    console.log(res);
  });
// It will log 1, 3 
// In first .then() because the preceding promise return a reject value, so it will be skipped.
// .catch() will be passed Promise with rejected value 1 and log 1. Then it will return a resolved promise with resolved value 3. 
// In the last .then() the resloved vlaue 3 will be passed to res and then log 3.


//3
function runAsync(x) {
  const p = new Promise(resolve =>
    setTimeout(() => resolve(x), 1000)
  );
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res => console.log(res))
  .catch(err => console.log(err));
// It will log Error: 2
// Promise.all() takes an array of promises and returns a new promise that only resolves when all of the promises in the array have resolved.
// If any promise in the array is rejected, Promise.all immediately rejects with the reason of the first promise that was rejected.
// So runReject(2) will return a rejected promise after 2 seconds which priors to runReject(4) takes 4 seconds.
// So Promise.all rejects with the same reason, which is Error: 2