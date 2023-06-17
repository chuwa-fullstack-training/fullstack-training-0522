// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.

// 2. Given an array of numbers, return an array of numbers that are even.

// 3. Reverse the string: "Hello World" -> "dlroW olleH"

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */


function doubleNumbers(numbers) {
  return numbers.map((num) => num * 2);
}

function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function flattenArray(arr) {
  return arr.reduce((result, current) => result.concat(flattenArray(current), []));
}
