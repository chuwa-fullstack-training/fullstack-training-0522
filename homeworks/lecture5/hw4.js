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

/* 
1
2
Promise.resolve(1) creates a promise that immediately resolves with the value 1.
The first then callback is called with the resolved value 1, logging 1.
The first then callback returns 2, which becomes the fulfillment value for the subsequent then callback.
The second then callback is called with the fulfillment value 2, logging 2.
*/

// 2
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

/* 
1
3

Promise.reject(1) creates a promise that immediately rejects with the value 1.
The then callback is skipped since the promise is rejected. The control jumps directly to the catch callback.
The catch callback is called with the rejection value 1, logging 1.
The catch callback returns 3, which becomes the fulfillment value for the subsequent then callback.
The second then callback is called with the fulfillment value 3, logging 3.
*/

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

/* 
Error: 4

Promise.all is used to create a promise that waits for all promises in the iterable to fulfill or any to reject.
runAsync(1) and runAsync(3) create promises that fulfill after a delay of 1 second, with values 1 and 3 respectively.
runReject(4) and runReject(2) create promises that reject after a delay of 4 seconds and 2 seconds respectively, with error messages 'Error: 4' and 'Error: 2'.
Since one of the promises in the Promise.all array, runReject(4), rejects, the overall promise is immediately rejected with the rejection value 'Error: 4'.
The catch callback is called with the rejection value 'Error: 4', logging 'Error: 4'.
*/