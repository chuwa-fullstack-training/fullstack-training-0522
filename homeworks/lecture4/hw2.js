// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
let arr = [1, 2, 3, 4];
var doubleNum = arr.map((num) => num * 2);
// console.log(doubleNum);

// 2. Given an array of numbers, return an array of numbers that are even.
let array = [1, 3, 5, 2, 4, 6];
var evenNum = array.filter((num) => num % 2 === 0);
console.log(evenNum);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = "Hello World";
const reverseStr = str
  .split("")
  .reduce((reversed, char) => char + reversed, "");
console.log(reverseStr);
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
let arr1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
let arr2 = [
  [0, 1],
  [2, 3],
  [4, [5, 6]],
];
let flatArr = arr2.reduce((acc, cur) => {
  return acc.concat(cur.flat());
}, []);
// console.log(flatArr);
