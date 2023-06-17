// what is the output? and explain why?

// 1
// 1, 2
//  Promise.resolve(1) creates a promise that immediately resolves with a value of 1.
//  The first then callback is called, logging 1, and returns 2. it continues to the next then callback, which logs 2.
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

// // 2
// 1,3
// now it has the promise rejects, so it will execute the catch block, and finally the then, which logs 1, then 3
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

//3
// i think it should be 2 because 
// we have four promises and they are created using the runAsync and runReject. 
  // The Promise.all method is used to wait for all promises to finish. 
  // If any of the promises reject, the entire Promise.all rejects and jumps to the catch handler.
//so the last reject, the runReject(2) promise rejects after a delay of 2 seconds, so the Promise.all rejects immediately. The catch handler is called, logging "Error: 2".

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
