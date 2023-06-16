// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
let arr = [1, 2, 3, 4, 5];
const arrayDoubled = arr.map((num) => num * 2);
console.log(arrayDoubled);

// 2. Given an array of numbers, return an array of numbers that are even.

const arrayEven = arr.filter((num) => num % 2 == 0);
console.log(arrayEven);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = 'Hello World';
const reversedStr = str.split('').reduce((reversed, ele) => ele + reversed, '');
console.log(reversedStr);

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const arr4 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const arr5 = [
  [0, 1],
  [2, 3],
  [4, [5, 6]],
];
const flatArr = (arr) =>
  arr.reduce((acc, cur) => {
    return acc.concat(cur.flat());
  }, []);

console.log(flatArr(arr4));
console.log(flatArr(arr5));
