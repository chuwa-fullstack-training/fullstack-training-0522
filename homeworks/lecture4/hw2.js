// ONLY use map, filter, reduce to solve the following problems:
var array = [0, 1, 2, 3];
// 1. Given an array of numbers, return an array of numbers that are doubled.
console.log(array.map(nums => nums * 2));
// 2. Given an array of numbers, return an array of numbers that are even.
console.log(array.filter(nums => nums % 2 == 0));
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
// map, filter and reduce can only apply on array?
var string = "Hello World";
console.log(string.split('').reduce((acc, char) => char.concat(acc), []));
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const arr1 = [[0, 1], [2, 3], [4, 5]];
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(arr1.reduce((acc, subarr) => acc.concat(...subarr), []));
console.log(arr2.reduce((acc, subarr) => acc.concat(...subarr), []));
