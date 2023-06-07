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
//1: The resolved value 1 is logged to the console inside the first then block.
//2: The returned value 2 from the first then block is logged to the console inside the second then block.


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

 // 1: The rejected value 1 is logged to the console inside the catch block.
 // 3: The returned value 3 from the catch block is logged to the console inside the second then block.

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
 // Error: 4
 // The Promise.all function takes an array of Promises and returns a new Promise that fulfills when all the input Promises fulfill, or rejects when any of the input Promises reject.