// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function double(arr) {
  return arr.map(x => x * 2);
}

// 2. Given an array of numbers, return an array of numbers that are even.
function even(arr) {
  return arr.filter(x => x % 2 === 0);
}

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverse(str) {
    let res = str.split("").reduce((acc, cur)=>{
        return cur + acc;
    }, "")
    return res
}
console.log(reverse("Hello World"));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

function recursion(arr, prev) {
  return arr.reduce((acc, cur) => {
     if (Array.isArray(cur)) {
      acc = recursion(cur, acc);
     } else {
      acc.push(cur);
     }
     return acc;
  }, prev)
}

const arr = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(recursion(arr, []));



