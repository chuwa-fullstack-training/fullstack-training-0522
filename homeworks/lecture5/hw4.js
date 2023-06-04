// what is the output? and explain why?

// 1
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
// Ans: 1 2
//first then: console.log(1), and then return 2, so second then: console.log(2)

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
// Ans: 1 3
// since reject(1), run catch error so console.log(1), and return 3. so second then: console.log(3)

//3
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
// Ans: Error: 2
// Promise.all will reject after receive first reject. so when 2000 ms. runReject(2) rejects, so the ans is Error:2
