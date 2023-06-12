// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const arr = [1, 2, 3, 4, 5];
const doubled = arr.map((num) => num * 2);

// 2. Given an array of numbers, return an array of numbers that are even.
const even = arr.filter((num) => num % 2 === 0);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = 'Hello World';
const strArr = str.split('');
const reversed = strArr.reduce((acc, cur) => {return cur + acc}, '');
console.log(reversed);

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
const result = [];

function flatten(arr) {

    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            return acc.concat(flatten(cur));
        }
        else {
            return acc.concat(cur);
        }
    }, []);
    
}
const flattened = flatten(arr2);
console.log(flattened);
