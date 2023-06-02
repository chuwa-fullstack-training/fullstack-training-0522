// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const nums = [1,2,3,4,5]
const dbNums = nums.map(num => num*2) 

// 2. Given an array of numbers, return an array of numbers that are even.
const evenNums = nums.filter(num => num%2 === 0)

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = 'Hello World';
const reversedStr = str.split('').reduce((reversed, letter) => letter + reversed, '')
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const flattenedArr = arr => arr.reduce((newArr, val) => {
    if (val instanceof Array){
        return newArr.concat(flattenedArr(val));
    }else{
        newArr.push(val);
        return newArr;
    }
}, [])


