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
// first promise has 1 as fulfilled value. Next catch will not execute because there is no reject. Next then will log 1 
// because the first then return 2 as a new Promise

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
// Since the Promise is rejected, the then callback is skipped.
// The catch callback function is executed. It logs the value 1.
// The catch callback returns the value 3.
// The Promise created in the catch block is fulfilled with the value 3, and the second then callback function is executed. 

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

// 'Error: 2'
// Promise.all rejects as soon as one of its input promises rejects
// the overall promise will reject as soon as the quickest runReject promise rejects, 
// which is runReject(2) after 2 seconds. 
// Hence, the catch block gets executed and logs "Error: 2" to the console. 
