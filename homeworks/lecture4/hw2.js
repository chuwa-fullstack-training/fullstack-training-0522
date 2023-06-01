// ONLY use map, filter, reduce to solve the following problems:
const numbers = [1, 2, 3, 4, 5, 0];
// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubleNumbers = numbers.reduce((numberList, number) => {
  numberList.push(number * 2);
  return numberList;
}, []);
console.log(`question 1 answer is ${doubleNumbers}`);

// 2. Given an array of numbers, return an array of numbers that are even.
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(`question 2 answer is ${evenNumbers}`);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const s = "Hello World";
const reverseString = s
  .split("")
  .reduce((rstring, c) => {
    rstring.unshift(c);
    return rstring;
  }, [])
  .join("");
console.log(`question 3 answer is ${reverseString}`);

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const arr1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const arr2 = [
  [0, 1],
  [2, 3],
  [4, [5, 6]],
];
function flatten(arr, flattenArr) {
  return arr.reduce((newArr, element) => {
    if (typeof element === "object") {
      flatten(element, newArr);
    } else {
      newArr.push(element);
    }
    return newArr;
  }, flattenArr);
}

const flattenArr1 = flatten(arr1, []);
const flattenArr2 = flatten(arr2, []);
console.log(flattenArr1, flattenArr1.length);
console.log(flattenArr2, flattenArr2.length);
