// ONLY use map, filter, reduce to solve the following problems:
let nums = [1, 2, 3, 4, 5, 6]

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubledNumbers = nums.map(ele => ele * 2)
console.log(doubledNumbers)

// 2. Given an array of numbers, return an array of numbers that are even.
const evenNumbers = nums.filter(ele => ele % 2 == 0)
console.log(evenNumbers)

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let s = 'Hello World'
const reverseStr = s.split('').reduce((acc, char) => char + acc, '')
console.log(reverseStr)

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
const arr3 = [[0, 1], [[2, 3], [4, [5, 6]]]]; // add more level for this inner array to test this func
const flattenArray1 = arr1.reduce((acc, arr) => acc.concat(arr), [])
const flattenArray = function(arr){ return arr.reduce((acc, arr) => acc.concat(Array.isArray(arr)? flattenArray(arr): arr), [])}
console.log(flattenArray1)
console.log(flattenArray(arr2))
console.log(flattenArray(arr3))
