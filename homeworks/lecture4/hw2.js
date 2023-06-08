// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); 

// 2. Given an array of numbers, return an array of numbers that are even.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = "Hello World";
const arr = str.split('');
const ReverseString = (arr.reduce((acc, char) => {
  acc.unshift(char);
  return acc
}, [])).join('');
console.log(ReverseString);

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]]; ???
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const arr1 = [[0, 1], [2, 3], [4, 5]];
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
const flatten = (arr2.reduce((acc, add) => {
  // concat method will return a new array
  // in concat, a spread operator is needed
  acc = acc.concat(...add);
  return acc
}, []))

console.log(flatten);