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
  // 1 2
  // resolve(1), when then(), pass 1 as res, console log 1 and return 2
  // catch will not be triggered since it's resolve(1)
  // the returned 2 will be pass to the last to then(res) as res and be printed out

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
  // 1 3
  // reject(1), when catch() (first then will not be executed since is rejected), pass 1 as err and print out
  // and return 3
  // the last then will accept 3 as res and print it out

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
// Error: 2
// Promise.all(), once there is one promise rejected it will fall to catch
// runReject(4) -> dely 4s, runReject(2) -> dely 2s
// catch will run the first error caught, which is runReject(2)