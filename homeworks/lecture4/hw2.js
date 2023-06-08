// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.

function double(arr) {
    return arr.map((x) => (2 * x));
}

// 2. Given an array of numbers, return an array of numbers that are even.

function even(arr) {
    return arr.filter((x) => (x % 2 == 0));
}

// 3. Reverse the string: "Hello World" -> "dlroW olleH"

function reverse(str) {
    return str.split("").reduce((str, val) => (val.concat(str)), "");
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

function flatten(arr) {
    return arr.reduce((a, val) => { Array.isArray(val) ? a.push(...flatten(val)) : a.push(val); return a; }, []);
    // let ret = [];
    // function flat(arr) {
    //     arr.forEach((val) => (Array.isArray(val) ? flat(val) : ret.push(val)));
    // };
    // flat(arr);
    // return ret;
}
