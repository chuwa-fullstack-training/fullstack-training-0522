// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then(res => {
    console.log(res); // 1
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res); // 2
  });

// Answer: 1 2
// Explain: first console.log(res) takes in input res === 1; second console.log(res) takes return value 2.

// // 2
Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err); // 1
    return 3;
  })
  .then(res => {
    console.log(res); // 3
  });

// Answer: 1 3
// Explain: reject(1) take value 1 and go to catch, print err = 1 and return 3 goto then print 3.

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

// Answer: Error:2
// Explain: runAsync(1) proceed correctly, runReject(4) setTimeout 4000ms, start a 4000 ms timer to print Error:4
// runAsync(3) proceed correctly, runReject(2) setTimeout 2000ms, start a 2000 ms timer to print Error:2
// runReject(2) execute before runReject(4) and then go to catch err