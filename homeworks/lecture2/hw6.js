// Algorithms

// 1. Write a function that returns the largest element in a list.
function largestElement(list) {
  let maxNumber = -Infinity;
  for (let i of list) {
    if (typeof i === "number") {
      maxNumber = Math.max(maxNumber, i);
    }
  }
  return maxNumber === -Infinity ? null : maxNumber;
}
console.log(largestElement([1, 2, 5, 9, 0, 30, 14, 17]));
console.log(largestElement([-11, -2, -5, -9, -30, -14, -17]));
console.log(largestElement([]));
console.log(largestElement(["a", "4", null]));
console.log(largestElement([2, undefined, 5, "7"]));

// 2. Write function that reverses a list, preferably in place.
function reverseList(list) {
  // implement your code here
  for (let i = 0; i < Math.floor(list.length / 2); i++) {
    const temp = list[i];
    list[i] = list[list.length - i - 1];
    list[list.length - i - 1] = temp;
  }
  return list;
}
console.log(reverseList([1, 2, 3, 4, 5, 6]));
console.log(reverseList([1, 2, 3, 4, 5]));
console.log(reverseList([]));

// 3. Write a function that checks whether an element occurs at least twice in a list.
function checkTwice(list, element) {
  let count = 0,
    i = 0;
  while (count < 2 && i < list.length) {
    if (list[i] === element) count++;
    i++;
  }
  return count >= 2;
}
console.log(checkTwice([1, 1, 2, 3, 4, 5, 5], 1));
console.log(checkTwice([1, 2, 5, 3, 4, "5", "5", "5"], "5"));
console.log(checkTwice([1, 2, 3], 3));
