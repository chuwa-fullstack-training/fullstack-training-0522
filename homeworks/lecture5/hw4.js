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
/**
 * 1           -> 'console.log(res)' from the first fulfillment where 'res' is 1
 * 2           -> 'console.log(res)' from the third fulfillment where 'res' is 2
 */

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
/**
 * 1            -> console.log(err) in the rejection where 'err' is 1
 * 3            -> console.log(res) in the last fulfillment where res is '3'.
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

/**
 * After 1s, 'runAsync(1)' is executed
 * After 2s, 'runReject(2)' is executed and rejected. Immediately execute '.catch(err)' where 'err' is 2
 * After 3s, 'runAsync(3)' is executed, but anything trigger.
 * After 4s, 'runReject(4)' is executed, but nothing trigger
 * Output:
 * 'Error: 2'
 */