// what is the output? and explain why?

// // 1
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
//output: 1 2
//there is no task in callstack, the callback queue will push console.log in the first then and the second then to callstack and execute them sequencely

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
// output: 1 3
// since reject is invoked in the Promise, only function in catch will be invoked, so 1 ,3 will be print out sequencely

// //3
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

//output: 2
// promise.all is used when wait for multiple promises to complete and obtain all their results together.
// If any of the input promises reject, the returned promise immediately rejects with the reason of the first rejected promise. Error : 2 is print out since run Reject 2 is the first one that completes
