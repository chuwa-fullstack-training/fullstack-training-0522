// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const testArray1 = [1, 2, 3, 4];
// using map
const doubledArray1 = testArray1.map((num) => num * 2);
console.log(doubledArray1); // [2, 4, 6, 8]

// using reduce
const doubledArray2 = testArray1.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);
console.log(doubledArray2); // [2, 4, 6, 8]

// 2. eturn an array of numbers that are even.
const testArray2 = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = testArray2.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
// use `reduce`. `reversed` parameter represents the accumulated value,
// which is initialized as an empty string.
const testString = "Hello World";
const reversedString = testString
  .split("")
  .reduce((reversed, char) => char + reversed, "");
console.log(reversedString); // "dlroW olleH"

/**
 * 4. Flatten the array of arrays to a single array:*/

// here we need to use `reduce` in a function in order to recursively solve the problem
function flattenArray(arr) {
  return arr.reduce(
    (flattened, item) =>
      flattened.concat(Array.isArray(item) ? flattenArray(item) : item),
    []
  );
}

const nestedArr1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log(flattenArray(nestedArr1)); // [0, 1, 2, 3, 4, 5]
const nestedArr2 = [
  [0, 1],
  [2, 3],
  [4, [5, 6]],
];
console.log(flattenArray(nestedArr2)); // [0, 1, 2, 3, 4, 5, 6]
