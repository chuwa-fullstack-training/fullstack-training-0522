function counter() {
  let total = 0;

  return function (value) {
    if (typeof value === "number") {
      total += value;
    }
    return total;
  };
}

let count = counter();
console.log(count(3)); // Output: 3 | counter()(3)
console.log(count(5)); // Output: 8 (3 + 5) | counter()(5)
console.log(count()); // Output: 8 | counter()()

/* Based on the test cases, the counter is a function which returns another function.
The returned function keeps record of a value and adds the value passed as the argument to the value.
*/
