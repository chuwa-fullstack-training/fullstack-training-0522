// ONLY use map, filter, reduce to solve the following problems:

const { type } = require("express/lib/response");

// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubleArray(arr) {
      const res = arr.map(x => x * 2);
      return res;
}

// 2. Given an array of numbers, return an array of numbers that are even.
function evenArray(arr) {
      const res = arr.filter(x => x % 2 === 0);
      return res;
}

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseString(str) {
      const arr = [];
      for(let c of str) arr.push(c);

      var res = arr.reduce((acc, c) => c + acc, '');
      return res;
}

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flattenArray(arr) {
      var res = arr.reduce((acc, c) => {
            // c could be an array or an number
            if(Array.isArray(c)) return acc.concat(flattenArray(c));
            return acc.concat(c);
      }, []);
      return res;
}
