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
First, promise resolves 1
Since it resolves successfully, it queues the then callback which logs the 1 and resolves to 2
Since that resolves successfully, it queues the next then callback which logs the 2
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
/*
1
3
First, promise rejects 1
Since it rejects, it queues the catch callback which logs the 1 and resolves to 3
Since that resolves successfully, it queues the next then callback which logs the 3
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
'Error: 2'
Promse.all queues 4 tasks simultaneously
runAsync(1) and runAsync(3) complete first and are fulfilled, but all must wait on all promises fulfilling or any of the promises rejecting
runReject(2) then rejects, so all can now finish with the rejection 'Error: 2', which is logged in the catch
*/